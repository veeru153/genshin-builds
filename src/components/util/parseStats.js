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

const parseStat = (pair, classes) => {
    let name = statPairs[pair[0]];
    let val = pair[1];

    if (val.endsWith('p')) {
        val = val.replace('p', '%');
    }

    return (
        <div key={name} className={classes}>
            <div>{name}</div>
            <div>+{val}</div>
        </div>
    )
}

export default parseStat;