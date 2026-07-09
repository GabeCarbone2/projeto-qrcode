import permittedCharacters from "./utils/permitted-characters.js";

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