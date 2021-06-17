
import {ltPrice} from "/price.js"
import {complect} from "/complect.js"
import {option} from "/complect.js"


const ltResullHtml = document.querySelector('#complect__lt');
const ltClassName = document.getElementsByClassName('lt');
const ltNames = [
    'Аналитическая система "Сутяжник',
    'Конструктор правовых документов',
    'Экспресс проверка контрагентов',
    'Экспресс Согласование',
    'Экспресс тендер',
    'Гарант Диск',
    'Гарант Коннект',
    'Гарант Патент',
    'Интернет-Семианры',
    'ЭТАЛОННЫЙ КЛАССИФИКАТОР'

];

const ltPaketNames = [
    'ГАРАНТ-LegalTech. Малый пакет',
    'ГАРАНТ-LegalTech. Средний пакет',
    'ГАРАНТ-LegalTech. Большой пакет',
];

export const ltObjects = [];

export class LtPaket{
    constructor(){

        //TODO - если инклудед, то вес LT блоков в пакете несчитается 
        this.name = 'LT Пакет';
        this.flag = false;
        this.ltPaketWidth = [2, 4, 10];
        this.priceLt = 0;
        this.ltPaketWeight = 0;

        this.totalLtWeight = () => {  // перебирает все ltблоки 
            this.ltPaketWeight = 0;
            for (let i = 0; i < ltObjects.length; i++){
                if (ltObjects[i].flag == true){                     //если flag тру и included false -складывает
                    if (ltObjects[i].included == false){

                        this.ltPaketWeight += ltObjects[i].weight;
                        //console.log(ltObjects);

                    }
                }
            }
        }

        this.price = () => {
            //console.log('LT ПАКЕТ Price');
            //console.log(ltPaketOdject);
            if (this.ltPaketWeight == this.ltPaketWidth[0]){
                this.priceLt = ltPrice[0];
                if(complect != '')complect.price();
                ltResullHtml.innerHTML = `Вес LT ${this.ltPaketWeight} Пакет Legel Tech: ${ltPaketNames[0]} Цена: ${this.priceLt}`;
                this.name = ltPaketNames[0];
            }else if (this.ltPaketWeight == this.ltPaketWidth[1]){
                this.priceLt = ltPrice[1];
                if(complect != '')complect.price();
                ltResullHtml.innerHTML = `Вес LT ${this.ltPaketWeight} Пакет Legel Tech: ${ltPaketNames[1]} Цена: ${this.priceLt}`;
                this.name = ltPaketNames[1];
            }else if (this.ltPaketWeight == this.ltPaketWidth[2]){
                this.priceLt = ltPrice[2];
                
                complect.price();
                if(complect != '')complect.price(); ltResullHtml.innerHTML = `Вес LT ${this.ltPaketWeight} Пакет Legel Tech: ${ltPaketNames[2]} Цена: ${this.priceLt}`;
                this.name = ltPaketNames[2];

                
            }else if (this.ltPaketWeight == 0) {
                this.priceLt = 0;
                if(complect != '') complect.price();
                ltResullHtml.innerHTML = ``;

               

            }else {
                this.priceLt = 0;
                if(complect != '') complect.price();
                ltResullHtml.innerHTML = `Вес LT ${this.ltPaketWeight} выберете или больше или меньше блоков Legel Tech`;

                

            }        
            
            return (this.priceLt);

        }

        this.changeLt = () => {
            this.totalLtWeight();
            this.price();
           // if (complect != '') complect.price();



        }


    }
}
export const ltPaketOdject = new LtPaket();


class LtBlock {
    constructor(name, index){
        this.index = index;
        this.name = name;
        this.flag = false;
        this.included = false;
        this.html = ltClassName[index];

        this.weight = 1;

        this.on = () => {
            ltClassName[index].checked = true;
            this.flag = true;

        }

        this.off = () => {

            ltClassName[index].checked = false;
            this.flag = false;


        }
 
        this.click = () => {
            if (this.flag == false){
                this.on();
                console.log('lt on');
                
            }else{
                this.off();
                console.log('lt off');
            }
            console.log('ltPaketOdject.changeLt();');
            ltPaketOdject.changeLt();
        }

        this.inComplect = () => {
            if (flag == false){
                this.on();
                this.included = true;
            }
        }


    }
}

function createrLt(){
    for( let i = 0; i < ltNames.length; i++){
        ltObjects[i] = new LtBlock(ltNames[i], i);
       // console.log(ltObjects[i]);

    }
}
document.onload = createrLt();

for(let i = 0; i < ltClassName.length; i++){
    //console.log(ltClassName[i]);
    ltClassName[i].addEventListener('change', function(){
        ltObjects[i].click();
        //console.log(ltObjects);
        })
}

// TODO если комплект ->  и включает included в тех в, которых нужно
// 1 определяем комплект
export function defineComplect(){  // в зависимости от выбранного комплекта выбирает блок LT  и проставляет в нем included = true // выполняется функция в файле complect.js 297
    if (complect != ''){
        for(let i = 0; i < ltObjects.length; i++){
            if(ltObjects[i].flag == true){ 
                ltObjects[i].click();     //отжимает нажатые lt блоки
            }
        }
        if(complect.idname > 0 && complect.idname < 2  ){     // если комплект Гарант-Бух и Гарант-бух госсектора
            
            ltObjects[1].included = true; //устанавливает в блоке [1] (кпд) included
            ltObjects[1].click();          // и запускает в нем функцию click()
            
            
            
        }else if(complect.idname >= 2){ // если комплект от Юриста и выше
               
                 
                 
                 ltObjects[1].included = true;
                 ltObjects[8].included = true;
                 ltObjects[1].click();
                 ltObjects[8].click();
        }
    }
    
};


//функция для для LT PAKET - если выбран комплект 0 -ничего  1 2 - отмечаются+included ltObjects
// и т.д - замена ltInComplect (); из Complect 
// при профкомплекте выбранный Большой пакет LT - должен считаться по-другому
//TODO сделать чтобы название пакета высвечивалось рядом с чекбоксами 