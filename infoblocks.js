
/**Большие блоки  - вес */
//Большие-малые инф блоки ВЕС
//Большие-маленькие информационные блоки


//TODO считает большие и малые блоки в итоге выдаёт переменную - результат



const big = document.getElementsByClassName('big');
const small = document.getElementsByClassName('small');
//const lib = document.getElementById('lib__change');
const lib1Content = document.getElementById('lib__change1');
const lib2Content = document.getElementById('lib__change2');
const lib3Content = document.getElementById('lib__change3');



let libChange = 0;


export var weight = 0;

export const infoblocksNames = [
    'Законодательство России',
    'Законодательство Ставропольского края и КМВ или Законодательство РСО Алания',
    'Отраслевое законодательство',
    'Проекты законов',
    'Международное право',
    'ГОСТы Росии',
    'Решения Федеральной антимонопольной службы',

    'Практика высших судебных органов',
    'Практика арбитражных судов округов',
    'Практика апелляционных судов округов',
    'Практика судов общей юрисдикции',
    'Энциклопедия судебной практики. Правовые позиции судов',

    'Большая библиотека юриста',
    'Большая библиотека бухгалтера и кадрового работника',
    'Библиотека консультаций. Бухгалтерия предприятия',
    'Библиотека консультаций. Бюджетные организации',
    'Библиотека консультаций. Кадры',
    
    'Толковый словарь «Бизнес и право»',
    'Энциклопедия. Законодательство в схемах',
    'Энциклопедия. Формы правовых документов',
    'ГАРАНТ-Инфарм',
    'Справочник нормативно-технической документации по строительству',

    'Горячая Линия',
    'Советы Экспертов',
    'Правовой консалтинг. Премиум',

    'Архивы ГАРАНТа',
    'ПРАЙМ',
    'Судебная практика: приложение кконсультационным блокам',
    'Большая домашняя правовая энциклопедия',

];
const smallBlocks = [0, 1, 3, 4, 11, 14, 15, 16, 17, 18, 19];
const bigBlocks = [2, 5, 6, 7, 8, 9, 10, 12, 13, 20, 21];
//const freeBlocks = [22, 25, 26, 27, 28];
//const consultBlocks = [23, 24]



class Infoblock { 
    
    constructor(name, i, size){
    this.id = i + 1;
    this.weight = 0;
    this.size = size;
    this.name = name;
    this.included = false;
    this.flag = false;
    
    this.section = '';

    this.html = document.getElementById(this.id);
    this.htmlLabel = document.getElementById(`l${this.id}`);
    
   
    

    this.on = () => {
        this.html.checked = true;
        this.weight = size;
        this.flag = true;
    };
    this.off = () => {
        this.html.checked = false;
        this.weight = 0;
        this.flag = false;
    };
    this.click = () => {  // включает он или офф в зависимости от события и флага другие объекты обращаясь к этой функции должны имитировать событие
        if (this.flag == false){
            
            this.on();
             
        }else{
            
            this.off();
            
        }
    };

  };   

   



};

export var infoblocks = [];


export function createerInfoblocks(){  //создает массив инфоблоков - infoblocks, определяет большие, малые, нулевые и проставляет в соответствии с этим их size


for( let i = 0; i < infoblocksNames.length; i++){


    if (smallBlocks.some(elem => elem == i) == true){
        infoblocks[i] = new Infoblock(infoblocksNames[i], i, 0.5);      
       


    } else if (bigBlocks.some(elem => elem == i) == true){
        infoblocks[i] = new Infoblock(infoblocksNames[i], i, 1);
       
    } 
    else{
        infoblocks[i] = new Infoblock(infoblocksNames[i], i, 0);  
        
        
    }
    
        
  
}

checkedBlocks();
return  (infoblocks);
};



createerInfoblocks();




//конструктор должен создать массив объектов инфоблоки
// если отмечен - если большой/малый - устанавливается вес
function checkedBlocks(){  //просматривает созданный массив объектов инфоблоки находит отмеченные и запускает в них click() => on()
    for( let i = 0; i < infoblocks.length; i++){
        
        
           
            if (infoblocks[i].html.checked == true){
                infoblocks[i].click();

            };        
       

}
};


document.addEventListener('click', function(){
    for(let i = 0; i < infoblocks.length; i++){
        infoblocks[i].html.onchange = function(){
            infoblocks[i].click();
            
            
            
        }
    }
   
});

document.addEventListener('change', function(){
    weight = 0;
    for(let j = 0; j < infoblocks.length; j++){
        weight +=  infoblocks[j].weight;
        
    
    }
   

});


/*

lib.addEventListener('click', function(){
    
    if(libChange == 0){
        
     
        lib1Content.style.display="none";
        lib2Content.style.display="none";
        lib3Content.style.display="none";
           
        libChange = 1;
    }
    else {
       
        
      
        lib1Content.style.display="inline";
        lib2Content.style.display="inline";
       lib3Content.style.display="inline";
            
        libChange = 0;
    }

})*/