const getCharacterFromParams = (params) => {
    const data = params[0].split("=")[1].split(",");

    const character = {
        name: data[0],
        ascension: parseInt(data[1]),
        level: parseInt(data[2]),
    }

    return new Promise((resolve, reject) => {
        resolve(character);
    })
}

export default getCharacterFromParams;