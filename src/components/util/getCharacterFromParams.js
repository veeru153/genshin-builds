import { characters, elements } from '../store/validationData';

const isInvalid = (c) => {
    if(c.name.length === 0 || !characters.includes(c.name)) return true;
    if(isNaN(c.ascension) || isNaN(c.level)) return true;

    if(c.name === "Traveler" && 
        (c.element === null || 
            c.element === undefined || 
            c.element.length === 0)
    ) return true;

    if(c.name === "Traveler" && !elements.includes(c.element)) return true;

    return false;
}

const getCharacterFromParams = (params) => {
    const data = params[0].split("=")[1].split(",");

    const character = {
        name: data[0].trim(),
        ascension: parseInt(data[1]),
        level: parseInt(data[2]),
    }

    if(character.name == "Traveler") {
        character.element = data[3].trim();
    }

    if(isInvalid(character)) {
        throw new Error("Incomplete or Invalid Character Information.\nCheck the URL and try again or create your own build.")
    }

    return new Promise((resolve, reject) => {
        resolve(character);
    })
}

export default getCharacterFromParams;