import { setAbbreviations, statAbbreviations } from '../store/validationData';

const isInvalid = (a) => {
    if(a.set === null || a.set === undefined || !setAbbreviations.includes(a.set)) return true;
    if(isNaN(a.level) || isNaN(a.stars)) return true;
    if(!statAbbreviations.includes(a.main[0])) return true;

    a.sub.forEach(stat => {
        if(!statAbbreviations.includes(stat[0])) return true;
    })

    return false;
}

const initArtifact = {
    set: "none",
    level: 0,
    stars: 0,
    main: ["",""],
    sub: [["",""]],
}

const getArtifactsFromParams = (params) => {
    const artifacts = {
        flower: initArtifact,
        plume: initArtifact,
        sands: initArtifact,
        goblet: initArtifact,
        circlet: initArtifact,
    };

    params = params.slice(1);
    
    for(let i=0; i<params.length; i++) {
        const a = params[i].split("=");
        const type = a[0];
        const data = a[1].split(",");

        artifacts[type] = {
            set: data[0].trim(),
            level: parseInt(data[1]),
            stars: parseInt(data[2]),
            main: data[3].split("+"),
            sub: data.slice(4).map(x => x.split("+"))
        }

        if(isInvalid(artifacts[type])) {
            throw new Error(`Incomplete or Invalid Artifact (${type}) Data.\nCheck the URL and try again or create your own build.`)
        }
    }

    return new Promise((resolve, reject) => {
        resolve(artifacts);
    })
    
}

export default getArtifactsFromParams;