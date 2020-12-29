const statPairs = {
    hp: "HP",
    atk: "ATK",
    def: "DEF",
    em: "Elemental Mastery",
    er: "Elemental Recharge",
    edb: "Elemental DMG Bonus",
    pdb: "Physical DMG Bonus",
    critr: "CRIT Rate",
    critd: "CRIT DMG",
    hb: "Healing Bonus",
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