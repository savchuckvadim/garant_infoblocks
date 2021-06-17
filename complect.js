
import { errrr } from "./er.js";
import { pak } from "./paketer.js";
import {initPakets} from "/er.js";
import {erClean} from "/er.js";
import {infoblocks} from "/infoblocks.js";
import {profPrices} from "/price.js";

import {ltPaketOdject} from "/lt.js";
import {defineComplect} from "/lt.js";
import { indexOd, optionOd } from "./od.js";
import { ltObjects } from "./lt.js";
import { libraryHide } from "./librarys.js";


import { lib } from "./librarys.js";
import { lib1 } from "./librarys.js";
import { lib2 } from "./librarys.js";
import { lib3 } from "./librarys.js";
//import {erCheckedAll} from "/er.js";

export let complect = '';
export const complectPriceHtml = document.querySelector('#complect__price');

const block = document.getElementsByClassName('block');
const complectFilling0 = [0];
const complectFilling1 = [0, 1, 13, 19, 22, 25, 26, 27, 28];//гарант-бухгалтер - наполнение
const complectFilling2 = [0, 1, 13, 19, 22, 25, 26, 27, 28];

const complectFilling3 = [0, 1, 2, 7, 8, 9, 10, 11, 12, 19, 22, 25, 26, 27, 28]; // гарант-юрист


const complectFilling4 = [0, 1, 7, 8, 13, 18, 19, 22, 24, 25, 26, 27, 28];
const complectFilling5 = [0, 1, 2, 7, 8, 13, 18, 19, 22, 24, 25, 26, 27, 28];
const complectFilling6 = [0, 1, 2, 7, 8, 9, 10, 11, 12, 13, 22, 24, 25, 26, 27, 28];

const allComplects = [complectFilling0, complectFilling1, complectFilling2, complectFilling3, complectFilling4, complectFilling5, complectFilling6];
 
const allComplectsdefaultWeight = [0, 3.5, 4, 9, 7, 8, 12.5];
export const option = document.querySelector('#complect');

export let checkBlocksEvent = (encyclopediaPaket) => { //должна создавать событие при нажимании на пакет эр из комплекта програмным способом
  
    var event = new Event('click');
    event.initEvent('click', false, true);
    encyclopediaPaket.dispatchEvent(event);

    



};
function erCheckedAll(){
    for (let i = 0; i < errrr.length; i++){
        checkBlocksEvent(errrr[i].html);
    };
}


function paketInComplect (){ //в зависимости от комплекта выбирает определенный пакет и создаёт событие нажатия

    for(let i = 0; i < option.length; i++){
        
        if(option[i].selected == true){
            if (i == 1){
                checkBlocksEvent(initPakets[0].html);


            }else if (i == 2){
                checkBlocksEvent(initPakets[1].html);
                checkBlocksEvent(errrr[0].html);


            }else if (i == 3){
                checkBlocksEvent(initPakets[2].html);


            }else if (i == 4){
                checkBlocksEvent(initPakets[0].html);
                checkBlocksEvent(errrr[3].html);
                checkBlocksEvent(errrr[7].html);


            }else if (i == 5){
                checkBlocksEvent(initPakets[1].html);
                checkBlocksEvent(errrr[0].html);
                checkBlocksEvent(errrr[7].html);


            }else if (i == 6){
                checkBlocksEvent(initPakets[0].html);
                checkBlocksEvent(initPakets[0].html);
                erClean();
                erCheckedAll();
               // checkBlocksEvent(initPakets[2].html);


            }
           

        }
        
    }

}
/*

function ltInComplect (){ //в зависимости от комплекта выбирает определенный lt и ставит в нём included = true

    for(let i = 0; i < option.length; i++){
        
        if(option[i].selected == true){
            if (i == 1){
                ltObjects[1].included = true;
                ltObjects[1].on();


            }else if (i == 2){
                ltObjects[1].included = true;
                ltObjects[1].on();


            }else if (i == 3){
                ltObjects[1].included = true;
                ltObjects[8].included = true;
                ltObjects[1].on();
                ltObjects[8].on();


            }else if (i == 4){
                ltObjects[1].included = true;
                ltObjects[8].included = true;
                ltObjects[1].on();
                ltObjects[8].on();


            }else if (i == 5){
                ltObjects[1].included = true;
                ltObjects[8].included = true;
                ltObjects[1].on();
                ltObjects[8].on();


            }else if (i == 6){
                ltObjects[1].included = true;
                ltObjects[8].included = true;
                ltObjects[1].on();
                ltObjects[8].on();
               // checkBlocksEvent(initPakets[2].html);


            }
           

        }
        
    }

}

*/
class Complect{ //заходит в каждый филинг и ставит там included
    constructor(name, filling, defaultWeight, idname){
        this.name = name;
        this.totalName = this.name;
        this.filling = filling;
        this.defaultWeight = defaultWeight; 
       // this.erPaketFilling =  erPaketFilling; 
       // this.allComplectEr = allComplectEr; 
        this.idname = idname;
    
        this.idod = indexOd;
        this.flag = false;

        this.on = () => {
            defineComplect();
            console.log(ltObjects);
            for (let i = 0; i < infoblocks.length; i++){  //перебирает все блоки
               
                if (infoblocks[i].flag == true){
                    infoblocks[i].click();           //чистит - отжимает все нажатые инфоблоки
                                       
                }
                                
            }
            
            for (let j = 0; j < this.filling.length; j++){ // Проходится по массиву блоков - в индекс всех блоков вставляет значение филлинг и нажимает на них
                let k = this.filling[j];
                
                infoblocks[k].click();
               
            }
           
            this.price();                  
            this.flag = true;

        }

        this.price = function(){
            //for (let i = 0; i < optionOd.length; i++){
              //  if(optionOd[i].selected = true){
               //     this.idod = i;
               // }
//}
            

            let complectPrice = profPrices[this.idod][this.idname] + ltPaketOdject.priceLt;

            
            complectPriceHtml.innerText = `цена комплекта: ${complectPrice}`;
            return (complectPrice);

        };

        this.immutability = () => {
            if (this.idname < 2){
                
                for(let i = 0; i < infoblocks.length; i++){
                    //for(let j = 0; j < this.filling.length; j++){
                        if(this.filling.some(elem => elem == i) == true){

                            
                            //menu.style.display = "none";
                            //menuD.style.display = "grid";

                        }else{
                            //infoblocks[i].htmlLabel.style.value = 'none';
                            //infoblocks[i].html.style.innerText = '';
                            
                            //infoblocks[i].htmlLabel.style.display = 'none';
                        }
                    //}
                }

            }
           
           
        }
        this.library = () => {
            if (this.idname == 1 || this.idname == 2 || this.idname == 4 || this.idname == 5){

                lib1.style.display="none";
                lib2.style.display="none";
                lib3.style.display="none";


            }else{
                lib1.style.display="inline";
                lib2.style.display="inline";
                lib3.style.display="inline";

            }
        }


    }
};


//конструктор

/*option.addEventListener('change', function(){
    //cleanER();
    paketInComplect();
   
})
*/
function stopDefAction(evt) {
    evt.preventDefault();
}

option.addEventListener('change', function(){
    //cleanER();
    paketInComplect();
    for(let i = 0; i < option.length; i++){
        
        if(option[i].selected == true){

            complect = new Complect(option[i], allComplects[i], allComplectsdefaultWeight[i], i);
            //checkBlocks(complect.erPaketFilling);
            //optionOd[0].selected = true;
            complect.on();
            complect.immutability();
            complect.library();
            if (i == 1 || i == 2){
                for (let j = 0; j < block.length; j++){
                    block[j].addEventListener('click', stopDefAction, false);      
                    //console.log(block[j]);
                };
                
            }

        }
        
    }
    console.log (complect);
    //defineComplect();
    
    

   // 

})









