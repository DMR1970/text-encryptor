const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function encryptionBttn(){
    const encryptedText = encryption(textArea.value)
}

function encryption(stringEncrypted){
    let conversions = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncrypted = stringEncrypted.toLowerCase();

    for(let i = 0; i < conversions.length; i++){
        if(stringEncrypted.includes(conversions[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(conversions[i][0], conversions[i][1]);
        }

    }
    return stringEncrypted
}
