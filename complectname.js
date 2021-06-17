import { complect } from "./complect.js";
import { optionOd } from "./od.js";
import { allBlocksWeight } from "./totalweight.js";
import {option} from "/complect.js";

const complectNameHtml = document.getElementById('complect__name');

document.addEventListener('change', function(){

    if (complect != ''){

        for (let i = 0; i < option.length; i++){
            if(option[i].selected == true){
                if(allBlocksWeight == complect.defaultWeight){
                    for(let j = 0; j < optionOd.length; j++){
                        if(optionOd[j].selected == true){

                            complectNameHtml.innerText = `${option[i].value} Количество ОД: ${optionOd[j].value}`;

                        }
                    }
                    
                }else if (allBlocksWeight > complect.defaultWeight){
            
                    complectNameHtml.innerText = 'комплект подобран неправильно - превышен вес комплекта';
            
                }else if (allBlocksWeight < complect.defaultWeight){
            
                    complectNameHtml.innerText = 'комплект подобран неправильно - вес комплекта слишком маленький';
            
                }
            }
        }
    
    
        
    }

   
    

})


