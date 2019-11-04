import * as asn1 from "asn1js";
import { arrayBufferToString, stringToArrayBuffer, toBase64, fromBase64 } from "pvutils";
import { getCrypto, getAlgorithmParameters, setEngine } from "./helpers/common";
import CertificationRequest from "./CertificationRequest";
import AttributeTypeAndValue from "./helpers/AttributeTypeAndValue";
import Attribute from "./helpers/Attribute";
import Extension from "./helpers/Extension";
import Extensions from "./helpers/Extensions";
//import RSAPublicKey from "./helpers/RSAPublicKey";
import GeneralName from "./helpers/GeneralName";
import GeneralNames from "./helpers/GeneralNames";
alert ('hello');
//Initial values
let pcks10Buffer = new ArrayBuffer(0);
let hashAlgorithm = "SHA-1";
let signAlgorithm = "RSASSA-PKCS1-V1_5";

//Auxiliary function
function formatPEM(pemString) {
    const stringLength = pemString.length;
    let resultString = "";

    for(let index = 0, count = 0; index < stringLength; index++, count++){
        if(count > 63){
            resultString = `${resultString}\r\n`;
            count = 0;
        }
        resultString = `${resultString}${pemString[index]}`
    }

    return resultString;
}

//Create PKCS#10
function createPKCS10Internal() {
    let sequence = Promise.resolve();
    const pkcs10 = new CertificationRequest();
    let privateKey;
    let publicKey;

    //Get a crypto Extension
    const crypto = getCrypto();
    if(typeof crypto === "undefined"){
        return Promise.reject("No Webcrypto extension found");
    }

    //Initialize values
    pkcs10.version = 0;
    pkcs10.subject.typesAndValues.push(new AttributeTypeAndValue({
        type: "2.5.4.6",
        value: new asn1.PrintableString({value: "UK"})
    }));
    pkcs10.subject.typesAndValues.push(new AttributeTypeAndValue({
        type: "2.5.4.3",
        value: new asn1.Utf8String({value: "Simple Test"})
    }));

    const altNames = new GeneralNames({
       names: [
           //RFC822
           new GeneralName({
               type: 1,
               value: "email@address.com"
           }),
           //DNS Name
           new GeneralName({
               type: 2,
               value: "www.domain.com"
           }),
           //Another DNS Name
           new GeneralName({
               type: 2,
               value: "www.anotherdomain.com"
           }),
           //IP Address
           new GeneralName({
               type: 7,
               value: new asn1.OctetString({valueHex: (new Uint8Array([0xC0, 0xA8, 0x00, 0x01])).buffer})
           })
       ]
    });

    pkcs10.attributes = [];

    //Creates the new Key pair
    sequence = sequence.then(() => {
        //Get default algorithm parameters for key generation
        const algorithm = getAlgorithmParameters(signAlgorithm, "generateKey");
        if("hash" in algorithm.algorithm){
            algorithm.algorithm.hash.name = hashAlgorithm;
        }
         return crypto.generateKey(algorithm.algorithm, true, algorithm.usages);
    });

    //Store in temporary variable
    sequence = sequence.then(keyPair => {
        publicKey = keyPair.publicKey;
        privateKey = keyPair.privateKey;
    },
        error => Promise.reject((`Error during key generation: ${error}`))
    );

    //Exports public key into subjectPublicKeyInfo value of PKCS#10
    sequence = sequence.then(() => pkcs10.subjectPublicKeyInfo.importKey(publicKey));

    //Identifies the SubjectKeyIdentifier
    sequence = sequence.then(() => crypto.digest({name: "SHA-1"}, pcks10.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex))
                       .then(result => {
                          pkcs10.attributes.push(new Attribute({
                              type: "1.2.840.113549.1.9.14",
                              values:[(new Extensions({
                                      extensions: [
                                          new Extension({
                                              extnID: "2.5.29.14",
                                              critical: false,
                                              extnValue: (new asn1.OctetString({valueHex: result})).toBER(false)
                                          }),
                                          new Extension({
                                              extnID: "2.5.29.17",
                                              critical: false,
                                              extnValue: altNames.toSchema().toBER(false)
                                          }),
                                          new Extension({
                                              extnID: "1.2.840.113549.1.9.7",
                                              critical: false,
                                              extnValue: (new asn1.PrintableString({valueHex: "passwordChallenge"})).toBER(false)
                                          })
                                      ]})
                              ).toSchema()]
                          }));
                       });

    //Signs final PKCS#10 request
    sequence = sequence.then(() => pkcs10.sign(privateKey, hashAlgorithm), error =>
                            Promise.reject(`Error during exporting public key: ${error}`));

    return sequence.then(() => {
        pcks10Buffer = pkcs10.toSchema().toBER(false)
    }, error => Promise.reject(`Error signing PKCS#10: ${error}`));
}

//Create PKCS#10
function createPKCS10() {
    return Promise.resolve().then(() => createPKCS10Internal()).then(() => {
        let resultString = "----------BEGIN CERTIFICATE REQUEST----------\r\n";
        resultString = `${resultString}${formatPEM(toBase64(arrayBufferToString(pcks10Buffer)))}`;
        resultString = `${resultString}\r\n---------END CERTIFICATE REQUEST--------`;

        document.getElementById("pem-text-block").value = resultString;
    })
}

function verifyPKCS10Internal() {
    //region Decode existing PKCS#10
    const asn1 = asn1js.fromBER(pkcs10Buffer);
    const pkcs10 = new CertificationRequest({ schema: asn1.result });

    //region Verify PKCS#10
    return pkcs10.verify();
}

function verifyPKCS10() {
    return Promise.resolve().then(() => {
        pcks10Buffer = stringToArrayBuffer(fromBase64(document.getElementById("pem-text-block").value
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
            hashAlgorithm = "sha-1";
            break;
        case "alg_SHA256":
            hashAlgorithm = "sha-256";
            break;
        case "alg_SHA384":
            hashAlgorithm = "sha-384";
            break;
        case "alg_SHA512":
            hashAlgorithm = "sha-512";
            break;
        default:
    }
}

function handleSignAlgOnChange() {
    const signOption = document.getElementById("signAlgorithm").value;
    switch(signOption) {
        case "alg_RSA15":
            signAlgorithm = "RSASSA-PKCS1-V1_5";
            break;
        case "alg_RSA2":
            signAlgorithm = "RSA-PSS";
            break;
        case "alg_ECDSA":
            signAlgorithm = "ECDSA";
            break;
        default:
    }
}

/*context("Hack for Rollup.js", () => {
    return;

    // noinspection UnreachableCodeJS
    createPKCS10();
    //parsePKCS10();
    verifyPKCS10();
    handleHashAlgOnChange();
    handleSignAlgOnChange();
    setEngine();
});*/

/*
context("PKCS#10 Complex Example", () => {
    //region Initial variables
    const hashAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
    const signAlgorithms = ["RSASSA-PKCS1-V1_5", "ECDSA", "RSA-PSS"];

    const algorithmsMap = new Map([
                                      ["SHA-1 + RSASSA-PKCS1-V1_5", "1.2.840.113549.1.1.5"],
                                      ["SHA-256 + RSASSA-PKCS1-V1_5", "1.2.840.113549.1.1.11"],
                                      ["SHA-384 + RSASSA-PKCS1-V1_5", "1.2.840.113549.1.1.12"],
                                      ["SHA-512 + RSASSA-PKCS1-V1_5", "1.2.840.113549.1.1.13"],

                                      ["SHA-1 + ECDSA", "1.2.840.10045.4.1"],
                                      ["SHA-256 + ECDSA", "1.2.840.10045.4.3.2"],
                                      ["SHA-384 + ECDSA", "1.2.840.10045.4.3.3"],
                                      ["SHA-512 + ECDSA", "1.2.840.10045.4.3.4"],

                                      ["SHA-1 + RSA-PSS", "1.2.840.113549.1.1.10"],
                                      ["SHA-256 + RSA-PSS", "1.2.840.113549.1.1.10"],
                                      ["SHA-384 + RSA-PSS", "1.2.840.113549.1.1.10"],
                                      ["SHA-512 + RSA-PSS", "1.2.840.113549.1.1.10"]
                                  ]);

    signAlgorithms.forEach(_signAlg => {
        hashAlgorithms.forEach(_hashAlg => {
            const testName = `${_hashAlg} + ${_signAlg}`;

            it(testName, () => {
                hashAlgorithm = _hashAlg;
                signAlgorithm = _signAlg;

                return createPKCS10Internal().then(() => {
                    const asn1 = asn1js.fromBER(pkcs10Buffer);
                    const pkcs10 = new CertificationRequest({ schema: asn1.result });

                    assert.equal(pkcs10.signatureAlgorithm.algorithmId, algorithmsMap.get(testName), `Signature algorithm must be ${testName}`);

                    return verifyPKCS10Internal().then(result => {
                        assert.equal(result, true, "PKCS#10 must be verified successfully");
                    });
                });
            });
        });
    });
});*/
