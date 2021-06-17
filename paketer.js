import {errrr} from "/er.js";
import { totalWeightEr } from "/totalweight.js";
import {erClean} from "/er.js";
import { initPakets } from "/er.js";
export var pak = false;



//console.log(initPakets[0].filling);
//constructor(name - paketNames[0-2], filling - filling[0-2], h - allPakets[h], dispaket1 - html другого пакета 1, dispaket2 - html другого пакета 2){
//для того чтобы собрать экземпляр класса Paket необходимы исходные данные
//название пакета
//список объектов ЭР, входящих в Пакет
//ссылка на html элемент связанный с экземпляром класса
//ссылка на html других

class Paket {
    constructor(initIndex, otherIndex1, otherIndex2){
        this.name = initPakets[initIndex].name;
        this.filling = initPakets[initIndex].filling;
        this.html = initPakets[initIndex].html;
        this.otherHtml1 = initPakets[otherIndex1].html;
        this.otherHtml2 = initPakets[otherIndex2].html;

        this.weight = 0;
        this.flag = false;
        this.errrr = errrr;
       


        this.check = function(){
           // console.log('paket check');
            this.flag = true;
            this.html.checked = true;
            erClean();
            for(let i = 0; i < this.filling.length; i++ ){
                
                this.filling[i].included = true;
                this.filling[i].flag = false;
                //this.filling[i].worseInPaket = true;
               // this.filling[i].flag = true;
               // this.filling[i].on();
               this.filling[i].click();
               
                        
            }
           
            this.weight = 1;
            

        },
        this.uncheck =  function(){
           // console.log('paket uncheck');
            this.weight = 0;
            this.html.checked = false;
            this.flag = false;
            for(let i = 0; i < this.filling.length; i++ ){
                this.filling[i].included = false;
                //this.filling[i].worseInPaket = false;
                //this.filling[i].off();
                this.filling[i].click();
            
            
            }
            
            return(this.weight);

        },
        
        this.conditionallyUncheck = function(){
           // console.log('Paket conditionallyUncheck');
            this.weight = 0;
            this.html.checked = false;
            this.flag = false;
            for(let i = 0; i < this.filling.length; i++ ){
                this.filling[i].included = false;
               // this.filling[i].worseInPaket = true;
                
                if(this.filling[i].html.checked == true){
                    this.filling[i].weight = 0.5;
                   // console.log(this.filling[i].name +''+ this.filling[i].weight);
                }else{
                    this.filling[i].weight = 0;
                }
                
               
            }
            
         
           

            
            return(this.weight);
            
            

        },
        
        this.click = function(){
           // console.log('paket click');
            if(this.flag == false){
                this.otherHtml1.checked = false; //TODO
                this.otherHtml2.checked = false;  //TODO
                
                this.check();
                
              //  console.log('this.flag'+ this.flag);
                
            }else{
                let c = [];
                
                  
                for(let i = 0; i < this.filling.length; i++ ){
                    c[i] = this.filling[i].included;
                    //if(this.filling[i].included == false){
                    
                        //console.log('filling[i].included'+this.filling[i].included);
                       // this.conditionallyUncheck();
                       // return (this.filling[i]);
                   // }   
                    
                
                             
                   
                   
                } 
               
               
                if(c.every(elem => elem == true) != true){
                    this.conditionallyUncheck();
                }else{
                    this.uncheck();
                    this.flag = false;

                }
               
               
                
            }
            
        }
    }
};


let paketChecked = function (initIndex, otherIndex1, otherIndex2){
   let checkedPaket = new Paket(initIndex, otherIndex1, otherIndex2);
    
    //console.log(checkedPaket);
   
    return (checkedPaket);
    

};



//TODO прописать условие для создания или корректировки пакета

encyclopedia_paket_1.addEventListener('click', function(){
    if(!pak){
     pak = paketChecked(0, 1, 2);
     pak.click();
       
     totalWeightEr();
    } else{
        if(pak.html != encyclopedia_paket_1){
         pak.uncheck();
         pak = paketChecked(0, 1, 2);
         pak.click();
           
         totalWeightEr();
        }else{
         pak.click();
       
         totalWeightEr();
 
        }
     
    }
  
     
 console.log(pak);
 });
 encyclopedia_paket_2.addEventListener('click', function(){
     if(!pak){
         pak = paketChecked(1, 0, 2);
         pak.click();
           
         totalWeightEr();
        } else{
            if(pak.allPakets != encyclopedia_paket_2){
             pak.uncheck();
             pak = paketChecked(1, 0, 2);
             pak.click();
               
             totalWeightEr();
            }else{
             pak.click();
           
             totalWeightEr();
     
            }
         
        }  
        console.log(pak); 
 })
 
 encyclopedia_paket_3.addEventListener('click', function(){
     if(!pak){
         pak = paketChecked(2, 0, 1);
         pak.click();
           
         totalWeightEr();
        } else{
            if(pak.allPakets != encyclopedia_paket_3){
             pak.uncheck();
             pak = paketChecked(2, 0, 1);
             pak.click();
               
             totalWeightEr();
            }else{
             pak.click();
           
             totalWeightEr();
     
            }
         
        } 
        console.log(pak);
      
 });
