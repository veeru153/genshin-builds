const statPairs = {
    hp: "HP",
    atk: "ATK",
    def: "DEF",
    hpp: "HP",
    atkp: "ATK",
    defp: "DEF",
    em: "Elemental Mastery",
    erp: "Elemental Recharge",
    edb: "Elemental DMG Bonus",
    pdb: "Physical DMG Bonus",
    critr: "CRIT Rate",
    critd: "CRIT DMG",
    hb: "Healing Bonus",
    bhp: "Base HP",
    batk: "Base ATK",
    bdef: "Base DEF",
}

const getArtifactsFromParams = (params) => {
    const artifacts = {};

    for(let i=1; i<6; i++) {
        const a = params[i].split("=");
        const type = a[0];
        const data = a[1].split(",");

        artifacts[type] = {
            set: data[0],
            level: data[1],
            main: data[2].split("+"),
            sub: data.slice(3).map(x => x.split("+"))
        }
    }
    
    return new Promise((resolve, reject) => {
        resolve(artifacts);
    })
    
}

export default getArtifactsFromParams;