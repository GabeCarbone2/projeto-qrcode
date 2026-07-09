import permittedCharacters from "./utils/permitted-characters.js";
import { randomInt } from "node:crypto";

async function handle (){
    let characters = [];
    let password = "";
    characters = await permittedCharacters();

    for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
        const randomIndex = randomInt(characters.length);
        const randomCharIndex = randomInt(characters[randomIndex].length);
        password += characters[randomIndex][randomCharIndex];
    }

    return password;
}

export default handle;
