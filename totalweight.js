import {errrr} from "/er.js"
import {pak} from "/paketer.js"
import {weight} from "/infoblocks.js"

let sum = 0;
export function totalWeightEr(){
    sum = 0;
    for(let i = 0; i < errrr.length; i++){
        
        sum += errrr[i].weight;
    };
    if( pak){
        sum += pak.weight;

    }    
    

  
   // console.log(`ёу вес всех энциклопедий ${sum}`)
    return(sum);
} ;

export var allBlocksWeight = 0;
const blocksWeight = document.getElementById('blocksWeight'); // Результат вес
export function allBlocksTotalWeight(){
    return(allBlocksWeight)
}
document.addEventListener('change', function(){
    allBlocksWeight = 0;
    allBlocksWeight = sum + weight;

    blocksWeight.innerText = `Вес комплекта:  ${allBlocksWeight}`;
    allBlocksTotalWeight();


})



