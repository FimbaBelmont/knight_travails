function knightMoves(curLocation, dest){
    // Adjacent list for all possible moves
    let adjList = [];
    for(let x = 0; x<8;x++){
        for (let y=0; y<8;y++){
            adjList.push(possibleMove([x,y]))
        }
    }
    let prevQ = [];
    let q = [[curLocation]];
    let moves = 0;
    let found = 0;
    let result;
    while (found ===0){
        let prevQ = q;
        q = [];
        prevQ.forEach(element=>{
            let num = (element[moves][0]*8)+(element[moves][1]);
            adjList[num].forEach(node=>{
                q.push([...element, node]);
                if(node[0] === dest[0]&&node[1]===dest[1]) {
                    result = element.concat([dest]);
                    found = 1;
                }
            })
        })
        moves++
    }
    console.log(`You made it in ${moves} moves! Here's your path:`);
    result.forEach(element=>{
        console.log(element)
    })
    return (result)
}

// Function to determinde possible moves of a knight in a given location
function possibleMove(curLocation){
    let result = [];
    function boardCheck(loc){
        return ((loc[0]<8)&&(loc[0]>=0)&&(loc[1]>=0)&&(loc[1]<8))
    }
    const moves = [[1,2],[2,1],[1,-2],[2,-1],[-1,2],[-2,1],[-2,-1],[-1,-2]];
    moves.forEach(element => {
        if(boardCheck([(element[0]+curLocation[0]),(element[1]+curLocation[1])])){
            result.push([(element[0]+curLocation[0]),(element[1]+curLocation[1])])
        }
    });
    return result
}

console.log(knightMoves([3,3],[4,3]))