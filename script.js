
let btn = document.querySelector("button");
let text = document.querySelector("p");
let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let suffit = []
let Decryption = ""
btn.onclick = () => {
    let input = document.querySelector("input");
    text.innerHTML = ""
    input = input.value.toLowerCase().split("");
    for(let i = 0; i < input.length; i++){
        suffit.push(char.indexOf(input[i]));
    }
    for(let i = 1 ; i <= 25; i++ ){
        for(let j = 0; j < input.length; j++){
            Decryption += char[(suffit[j] - i) < 0 ? ((suffit[j] - i) + 26) % 26 : (suffit[j] - i)];
        }
        text.innerHTML += Decryption + "::::::::::key: " + i + "<br>";
        Decryption = "";
    }
    Decryption = "";
    suffit = [];
}




