const getArtifactsFromParams = (params) => {
    const artifacts = {};

    for(let i=1; i<6; i++) {
        const a = params[i].split("=");
        const type = a[0];
        const data = a[1].split(",");

        artifacts[type] = {
            set: data[0],
            level: parseInt(data[1]),
            stars: parseInt(data[2]),
            main: data[3].split("+"),
            sub: data.slice(4).map(x => x.split("+"))
        }
    }

    return new Promise((resolve, reject) => {
        resolve(artifacts);
    })
    
}

export default getArtifactsFromParams;