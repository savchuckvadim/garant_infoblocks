
import {pak} from "/paketer.js";
import { totalWeightEr } from "/totalweight.js";
export var errrr = [];




const initEr = [
    {
        name: 'Энциклопедия решений. Проверки организаций и предпринимателей',
        html: document.getElementById('encyclopedia_1')
    },
    {
        name: 'Энциклопедия решений. Госсектор: учет, отчетность, финконтроль',
        html: document.getElementById('encyclopedia_2')
    },
    {
        name: 'Энциклопедия решений. Хозяйственные ситуации',
        html: document.getElementById('encyclopedia_3')
    },
    {
        name: 'Энциклопедия решений. Госзакупки',
        html: document.getElementById('encyclopedia_4')
    },
    {
        name: 'Энциклопедия решений. Трудовые отношения. Кадры',
        html: document.getElementById('encyclopedia_5')
    },
    {
        name: 'Энциклопедия решений. Налоги и взносы',
        html: document.getElementById('encyclopedia_6')
    },
    {
        name: 'Энциклопедия решений. Договоры и иные сделки',
        html: document.getElementById('encyclopedia_7')
    },
    {
        name: 'Энциклопедия решений. Корпоративное право',
        html: document.getElementById('encyclopedia_8')
    },
];




class Er {
    constructor(name, html){
    this.name = name;
    this.included = false;
    this.flag = false;
    
    this.weight = 0;   
    this.html = html;
    this.pak = pak;

    

    this.on = function(){ // считается вес 
        //console.log('ЭР on()');
        if(this.included == false) {
            
            this.weight = 0.5;
            this.html.checked = true;
            
        }else{
            
            this.weight = 0;
            this.html.checked = true; //отмечает чекбокс с энциклопедией
        } 
       // console.log(errrr);
    };
    this.off = function(){
        //console.log('ЭР off()');
        this.weight = 0; 
        this.html.checked = false;    //TODO 
       // console.log(errrr);
    };

    this.conditionallyOff = function(){
       // console.log('ЭР conditionallyOff()');
        this.weight = 0; 
        this.flag = false;
        pak.click();
        

    };

    this.click = function(){
       // console.log('ЭР click()');
        if(this.flag == false){
            
            this.on();

            this.flag = true;
            
        }else{
            if(this.included == true){
                this.included = false;
                this.conditionallyOff();
                
            }else{
                 // при нажатом пакете сюда не попадает !!!!
            this.off();
            this.flag = false;

            }
            

        }
    }

    }
    
};


function createer(){
    for( let i = 0; i < initEr.length; i++){
        
        errrr[i] = new Er(initEr[i].name, initEr[i].html)
        
       
        
    }
    
    return  (errrr);
    };
createer();



//console.log(errrr);



encyclopedia_1.addEventListener('click', function(){  //здесь получается, что при отжимании вес становится 0.5 а не 0 а флаги метки наоборот
   
    errrr[0].click();
    totalWeightEr();
       
})
encyclopedia_2.addEventListener('click', function(){
   
    errrr[1].click();
    totalWeightEr();
})
encyclopedia_3.addEventListener('click', function(){
   
    errrr[2].click();
    totalWeightEr();
})
encyclopedia_4.addEventListener('click', function(){
    
    errrr[3].click();
    totalWeightEr();
})
encyclopedia_5.addEventListener('click', function(){
    errrr[4].click();
    totalWeightEr();    
})
encyclopedia_6.addEventListener('click', function(){
    errrr[5].click();
    totalWeightEr();    
})
encyclopedia_7.addEventListener('click', function(){
    errrr[6].click();
    totalWeightEr();    
})
encyclopedia_8.addEventListener('click', function(){
    errrr[7].click();
    totalWeightEr();    
})



export function erClean (){
    for (let j = 0; j < errrr.length; j++){
        if(errrr[j].flag == true){
            errrr[j].click();
        }
    }
};




export const initPakets = [
    {
        name: 'Пакет Энциклопедий решений для бухгалтера',
        html: document.getElementById('encyclopedia_paket_1'),
        filling: [errrr[0], errrr[2], errrr[4], errrr[5], errrr[6]],
    },
    {
        name: 'Пакет Энциклопедий решений для бухгалтера госсектора',
        html: document.getElementById('encyclopedia_paket_2'),
        filling: [errrr[1], errrr[3], errrr[4], errrr[5], errrr[6]],
    },
    {
        name: 'Пакет Энциклопедийрешений для юриста',
        html: document.getElementById('encyclopedia_paket_3'),
        filling: [errrr[0], errrr[3], errrr[4], errrr[6], errrr[7]],
    },
];