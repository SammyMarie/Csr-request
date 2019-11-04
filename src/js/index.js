/* eslint-disable no-undef,no-unreachable */
import * as asn1js from "asn1js";
import { arrayBufferToString, stringToArrayBuffer, toBase64, fromBase64 } from "pvutils";
import { getCrypto, getAlgorithmParameters, setEngine } from "./helpers/common.js";
import CertificationRequest from "./CertificationRequest.js";
import AttributeTypeAndValue from "./helpers/AttributeTypeAndValue.js";
import Attribute from "./helpers/Attribute.js";
import Extension from "./helpers/Extension.js";
import Extensions from "./helpers/Extensions.js";
import RSAPublicKey from "./helpers/RSAPublicKey.js";
import GeneralNames from "./helpers/GeneralNames.js";
import GeneralName from "./helpers/GeneralName.js";

let pkcs10Buffer = new ArrayBuffer(0);
let hashAlg = "SHA-1";
let signAlg = "RSASSA-PKCS1-V1_5";

//Auxiliary functions
function formatPEM(pemString) {

    const stringLength = pemString.length;
    let resultString = "";

    for(let i = 0, count = 0; i < stringLength; i++, count++) {
        if(count > 63) {
            resultString = `${resultString}\r\n`;
            count = 0;
        }

        resultString = `${resultString}${pemString[i]}`;
    }

    return resultString;
}

//Create PKCS#10
function createPKCS10Internal() {
    //Initial variables
    let sequence = Promise.resolve();
    const pkcs10 = new CertificationRequest();

    let publicKey;
    let privateKey;

    //Get a "crypto" extension
    const crypto = getCrypto();
    if(typeof crypto === "undefined")
        return Promise.reject("No WebCrypto extension found");

    //Put a static values
    pkcs10.version = 0;
    pkcs10.subject.typesAndValues
          .push(new AttributeTypeAndValue({
                                              type: "2.5.4.6",
                                              value: new asn1js.PrintableString({ value: "RU" })
          }));
    pkcs10.subject.typesAndValues
          .push(new AttributeTypeAndValue({
                                              type: "2.5.4.3",
                                              value: new asn1js.Utf8String({ value: "Simple test (простой тест)" })
          }));

    const altNames = new GeneralNames({
                                          names: [
                                              new GeneralName({
                                                                  type: 1, // rfc822Name
                                                                  value: "email@address.com"
                                                              }),
                                              new GeneralName({
                                                                  type: 2, // dNSName
                                                                  value: "www.domain.com"
                                                              }),
                                              new GeneralName({
                                                                  type: 2, // dNSName
                                                                  value: "www.anotherdomain.com"
                                                              }),
                                              new GeneralName({
                                                                  type: 7, // iPAddress
                                                                  value: new asn1js.OctetString({ valueHex: (new Uint8Array([0xC0, 0xA8, 0x00, 0x01])).buffer })
                                              }),
                                          ]
                                      });

    pkcs10.attributes = [];

    //Create a new key pair
    sequence = sequence.then(() => {
        //Get default algorithm parameters for key generation
        const algorithm = getAlgorithmParameters(signAlg, "generatekey");
        if("hash" in algorithm.algorithm)
            algorithm.algorithm.hash.name = hashAlg;
        return crypto.generateKey(algorithm.algorithm, true, algorithm.usages);
    });

    //Store new key in an interim variables
    sequence = sequence.then(keyPair => {
        publicKey = keyPair.publicKey;
        privateKey = keyPair.privateKey;
        }, error => Promise.reject((`Error during key generation: ${error}`))
    );

    //Exporting public key into "subjectPublicKeyInfo" value of PKCS#10
    sequence = sequence.then(() => pkcs10.subjectPublicKeyInfo.importKey(publicKey));

    //SubjectKeyIdentifier
    sequence = sequence.then(() => crypto.digest({ name: "SHA-1" }, pkcs10.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex))
                       .then(result => {
                           pkcs10.attributes
                                 .push(new Attribute({
                                                         type: "1.2.840.113549.1.9.14", // pkcs-9-at-extensionRequest
                                                         values: [(
                                                             new Extensions({
                                                                                extensions: [
                                                                                    new Extension({
                                                                                                      extnID: "2.5.29.14",
                                                                                                      critical: false,
                                                                                                      extnValue: (new asn1js.OctetString({ valueHex: result })).toBER(false)
                                                                                    }),
                                                                                    new Extension({
                                                                                                      extnID: "2.5.29.17",
                                                                                                      critical: false,
                                                                                                      extnValue: altNames.toSchema().toBER(false)
                                                                                    }),
                                                                                    new Extension({
                                                                                                      extnID: "1.2.840.113549.1.9.7",
                                                                                                      critical: false,
                                                                                                      extnValue: (new asn1js.PrintableString({ value: "passwordChallenge" })).toBER(false)
                                                                                    })
                                                                                ]
                                                             })).toSchema()]
                           }));
                       });

    //Signing final PKCS#10 request
    sequence = sequence.then(() => pkcs10.sign(privateKey, hashAlg), error => Promise.reject(`Error during exporting public key: ${error}`));

    return sequence.then(() => {
        pkcs10Buffer = pkcs10.toSchema().toBER(false);
        }, error => Promise.reject(`Error signing PKCS#10: ${error}`));
}

//Create PKCS#10
function createPKCS10() {
    return Promise.resolve().then(() => createPKCS10Internal()).then(() => {
        let resultString = "-----BEGIN CERTIFICATE REQUEST-----\r\n";
        resultString = `${resultString}${formatPEM(toBase64(arrayBufferToString(pkcs10Buffer)))}`;
        resultString = `${resultString}\r\n-----END CERTIFICATE REQUEST-----\r\n`;

        document.getElementById("pem-text-block").value = resultString;
    });
}

//Verify existing PKCS#10
function verifyPKCS10Internal() {
    //region Decode existing PKCS#10
    const asn1 = asn1js.fromBER(pkcs10Buffer);
    const pkcs10 = new CertificationRequest({ schema: asn1.result });

    //region Verify PKCS#10
    return pkcs10.verify();
}

function verifyPKCS10() {
    return Promise.resolve().then(() => {
        pkcs10Buffer = stringToArrayBuffer(fromBase64(document.getElementById("pem-text-block").value
                                                              .replace(/(-----(BEGIN|END) CERTIFICATE REQUEST-----|\n)/g, "")));
    }).then(() => verifyPKCS10Internal()).then(result => {
        alert(`Verification passed: ${result}`);
        }, error => {
        alert(`Error during verification: ${error}`);
    });
}

function handleHashAlgOnChange() {
    const hashOption = document.getElementById("hashAlgorithm").value;
    switch(hashOption) {
        case "alg_SHA1":
            hashAlg = "sha-1";
            break;
        case "alg_SHA256":
            hashAlg = "sha-256";
            break;
        case "alg_SHA384":
            hashAlg = "sha-384";
            break;
        case "alg_SHA512":
            hashAlg = "sha-512";
            break;
        default:
    }
}

function handleSignAlgOnChange() {
    const signOption = document.getElementById("signAlgorithm").value;
    switch(signOption) {
        case "alg_RSA15":
            signAlg = "RSASSA-PKCS1-V1_5";
            break;
        case "alg_RSA2":
            signAlg = "RSA-PSS";
            break;
        case "alg_ECDSA":
            signAlg = "ECDSA";
            break;
        default:
    }
}

window.createPKCS10 = createPKCS10;
window.verifyPKCS10 = verifyPKCS10;
window.handleHashAlgOnChange = handleHashAlgOnChange;
window.handleSignAlgOnChange = handleSignAlgOnChange;