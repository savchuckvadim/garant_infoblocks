//import { complect } from "./complect";
//import {optionOd} from "/src/complect.js";
import {complect} from "/complect.js";
export var indexOd = 0;


export const optionOd = document.querySelector('#od');
optionOd.addEventListener('change', function(){

    if(complect != ''){
        
    }

    for (let i = 0; i < optionOd.length; i++){

        if( optionOd[i].selected == true){
            indexOd = i;
            console.log(i);
            if(complect != ''){
                complect.idod = indexOd;
                complect.price();
            }else{
                window.alert('сначала выберите комплект!');
                indexOd = 0;
                optionOd[0].selected = true;
            }
        }
    
    }

})
