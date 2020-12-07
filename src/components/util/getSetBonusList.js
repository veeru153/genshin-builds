import { setInfo } from '../store';

let setCount = { }

const getSetBonusList = (artifacts) => {
    let pieces = Object.values(artifacts);

    for(let i=0; i<pieces.length; i++) {
        let p = pieces[i].set;

        if(p === "none") continue;
        if(setCount.hasOwnProperty(p)) {
            setCount[p] = setCount[p] + 1;
        } else {
            setCount[p] = 1;
        }
    }

    let bonusArr = [];

    console.log(setCount)

    for(let set in setCount) {
        let count = setCount[set];

        if(count >= 4) {
            bonusArr.push({
                setName: setInfo[set].name,
                type: "2-Piece Set",
                bonus: setInfo[set].setBonus2,
                img: setInfo[set].img,
            })
            bonusArr.push({
                setName: setInfo[set].name,
                type: "4-Piece Set",
                bonus: setInfo[set].setBonus4,
                img: setInfo[set].img,
            })
        } else if(count >= 2) {
            bonusArr.push({
                setName: setInfo[set].name,
                type: "2-Piece Set",
                bonus: setInfo[set].setBonus2,
                img: setInfo[set].img,
            })
        } else continue;
    }

    return new Promise((resolve, reject) => {
        resolve(bonusArr);
    })
    
}

export default getSetBonusList;