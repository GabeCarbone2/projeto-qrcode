async function permittedCharacters(){
    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === "true")
        permitted.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    if(process.env.LOWERCASE_LETTERS === "true")
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    
    if(process.env.NUMBERS === "true")
        permitted.push(..."0123456789");
    
    if(process.env.SPECIAL_CHARACTERS === "true")
        permitted.push(..."!@#$%^&*()_+~`|}{[]:;?><,./-=");
    
    return permitted;
}

async function handle (){
    let characters = [];
    let password = "";
    characters = await permittedCharacters();

    for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharIndex = Math.floor(Math.random() * characters[randomIndex].length);
        password += characters[randomIndex][randomCharIndex];
    }

    console.log("Generated password:", password);
}

export default handle;