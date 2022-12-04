export function roll(sides,dice,rolls){
    let numbers = [];
    let results =[];
    for(let j = 0; j<rolls;j++){
        let sum = 0;
    for(let i = 0;i<dice;i++){
        numbers[i]=Math.floor(Math.random() * sides) + 1;
         sum += numbers[i]
    }
       results.push(sum)
    }
    return {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    }
}