
const d = document;
const result = d.getElementById('result'); //кнопка результата
const blocksWeight = d.getElementsByClassName('blocksWeight'); // Результат вес

const menu = d.getElementById('menu'); // все чекбоксы в гридах
const menuD = d.getElementById('menuDescript'); // ВСЁ Описание
let flagMenu = false; //Флаг для результирующей кнопки

const check = d.querySelectorAll('checkbox');
var checkSum = 0;


//Большие-маленькие информационные блоки

const big = document.getElementsByClassName('big');
const small = document.getElementsByClassName('small');
var bigSum = 0;
var smallSum = 0.5;
var weight = 0;

// Блоки-Описание
//НПА
const law = d.getElementById('1'); //Законодательство России чекбокс
const lawD = d.getElementById('one'); //Законодательство России Описание
const stav = d.getElementById('2'); //Законодательство Ставропольского края и КМВ или Законодательство РСО Алания чекбокс
const stavD = d.getElementById('two'); //Законодательство Ставропольского края и КМВ или Законодательство РСО Алания Описание
const branch = d.getElementById('3'); //  Отраслевое законодательство
const branchD = d.getElementById('three'); //Отраслевое законодательство
const draft = d.getElementById('4'); //  Проекты законов
const draftD = d.getElementById('four'); //Проекты законов
const international = d.getElementById('5'); //  Международное право
const internationalD = d.getElementById('five'); //Международное право
const gost = d.getElementById('6'); //  ГОСТы Росии
const gostD = d.getElementById('six'); //ГОСТы Росии
const fas = d.getElementById('7'); //  Решения Федеральной антимонопольной службы
const fasD = d.getElementById('seven'); //Решения Федеральной антимонопольной службы

/**СУДЕБНАЯ ПРАКТИКА */

const higher = d.getElementById('8');  // Практика высших судебных органов
const higherD = d.getElementById('eight'); //Практика высших судебных органов
const arbitration = d.getElementById('9');  //Практика арбитражных судов округов
const arbitrationD = d.getElementById('nine'); //Практика арбитражных судов округов
const appeal = d.getElementById('10');  //Практика арбитражных апелляционных судов округов
const appealD = d.getElementById('ten'); //Практика арбитражных апелляционных судов округов
const general = d.getElementById('11'); //Практика судов общей юрисдикции
const generalD = d.getElementById('eleven');  //Практика судов общей юрисдикции
const enpractice = d.getElementById('12');   //Энциклопедия судебной практики. Правовые позиции судов
const enpracticeD = d.getElementById('twelve');  //Энциклопедия судебной практики. Правовые позиции судов


/*Библиотека ЮРИСТА и Бухгалтера*/
const liblawyer = document.getElementById('13'); // Большая библиотека юриста
const liblawyerD = document.getElementById('thirteen'); // Большая библиотека юриста

const lib = document.getElementById('14'); //Большая библиотека бухгалтера и кадрового работника
const libD = document.getElementById('fourteen'); //Большая библиотека бухгалтера и кадрового работника

const lib1 = document.getElementById('15'); 
const lib1D = document.getElementById('fifteen'); 
const lib2 = document.getElementById('16');
const lib2D = document.getElementById('sixteen');
const lib3 = document.getElementById('17'); //Библиотека консультаций. Кадры
const lib3D = document.getElementById('seventeen'); //Библиотека консультаций. Кадры

let lib_ch = 0;

const lib__change = document.getElementById('lib__change');
const lib__change1 = document.getElementById('lib__change1');
const lib__change2 = document.getElementById('lib__change2');
const lib__change3 = document.getElementById('lib__change3');

/*Энциклопедии решений*/
let encyclopedia1 = document.getElementById('encyclopedia_1'); //Энциклопедия решений. Проверки организаций и предпринимателей
let encyclopedia1D = document.getElementById('eighteen');  //Энциклопедия решений. Проверки организаций и предпринимателей
let encyclopedia2 = document.getElementById('encyclopedia_2'); //Энциклопедия решений. Госсектор: учет, отчетность, финконтроль
let encyclopedia2D = document.getElementById('nineteen'); //Энциклопедия решений. Госсектор: учет, отчетность, финконтроль
let encyclopedia3 = document.getElementById('encyclopedia_3');  //Энциклопедия решений. Хозяйственные ситуации
let encyclopedia3D = document.getElementById('twenty');     // Энциклопедия решений. Хозяйственные ситуации
let encyclopedia4 = document.getElementById('encyclopedia_4');    //Энциклопедия решений. Госзакупки
let encyclopedia4D = document.getElementById('twentyone');    //Энциклопедия решений. Госзакупки
let encyclopedia5 = document.getElementById('encyclopedia_5');   //Энциклопедия решений. Трудовые отношения, кадры
let encyclopedia5D = document.getElementById('twentytwo');         //Энциклопедия решений. Трудовые отношения, кадры
let encyclopedia6 = document.getElementById('encyclopedia_6');  //Энциклопедия решений. Налоги и взносы
let encyclopedia6D = document.getElementById('twentythree');  //Энциклопедия решений. Налоги и взносы
let encyclopedia7 = document.getElementById('encyclopedia_7');  //Энциклопедия решений. Договоры и иные сделки
let encyclopedia7D = document.getElementById('twentyfour');   //Энциклопедия решений. Договоры и иные сделки
let encyclopedia8 = document.getElementById('encyclopedia_8');   //>Энциклопедия решений. Корпоративное право
let encyclopedia8D = document.getElementById('twentyfive');      //>Энциклопедия решений. Корпоративное право

let enPaket1 = document.getElementById('encyclopedia_paket_1');  
let enPaket2 = document.getElementById('encyclopedia_paket_2');
let enPaket3 = document.getElementById('encyclopedia_paket_3');
let encyc1 = 0;
let encyc2 = 0;
let encyc3 = 0;
let paket1 = document.getElementsByClassName('paket1'); // чекбоксы с классом Пакет1 - входящие в пакет ЭР 1
let paket2 = document.getElementsByClassName('paket2');  // чекбоксы с классом Пакет2 - входящие в пакет ЭР 2
let paket3 = document.getElementsByClassName('paket3');  // чекбоксы с классом Пакет3 - входящие в пакет ЭР 3



function resultList (){
    result.addEventListener('click', function(){ // слушает кнопку результата и убирает или вставляет меню чекбоксов на гридах в зависимости от флага
        if(flagMenu == false){
        menu.style.display = "none";
        menuD.style.display = "grid";
        

        flagMenu = true;
        }else{
            menu.style.display = "grid";
            menuD.style.display = "none";
            
            flagMenu = false;
        }
    })
}
function totalwWight(){ // подставляет сумму веса
    console.log(`${weight} подставляет сумму веса weight`);
        blocksWeight.innerText = `Вес:  ${weight}`;

}



resultList();

/**Большие блоки  - вес */
//Большие-малые инф блоки ВЕС


for(let i=0; i<big.length; i++) {
    
    big[i].onclick = function() {
        if (big[i].checked == true){
            bigSum += 1;
        }else{
            bigSum -= 1;
        }
        console.log(`${bigSum}bigSum`);
        weight = bigSum + smallSum;
        totalwWight()
    }
 }

 /**Малые  блоки  - вес */

for(let i=0; i<small.length; i++) {
    
    small[i].onclick = function() {
        if (small[i].checked == true){
            smallSum = smallSum + 0.5 ;
        }else{
            smallSum = smallSum - 0.5 ;
        }
        console.log(`${smallSum}smallSum`);
        weight = bigSum + smallSum;
        totalwWight()
        
    }
 }







/**Библиотеки */

lib.addEventListener('click', function(){
    
    if(lib_ch == 0){
        console.log('я тут')
        
        lib1.style.display="none";
        lib2.style.display="none";
        lib3.style.display="none";
        lib__change1.style.display="none";
        lib__change2.style.display="none";
        lib__change3.style.display="none";
           
        lib_ch = 1;
    }
    else {
        console.log('я тут')
        
        lib1.style.display="inline";
        lib2.style.display="inline";
        lib3.style.display="inline";
        lib__change1.style.display="inline";
        lib__change2.style.display="inline";
        lib__change3.style.display="inline";
            
        lib_ch = 0;
    }

})



    /**Энциклопедии решений - по пакетам */
for(let i=0; i<paket1.length; i++) {
    
    paket1[i].onclick = function() {
         
        let paket1Checked = document.getElementsByClassName('paket1 > [type="checkbox"]:checked').length;
        enPaket1.checked = paket1Checked == paket1.length;
        enPaket1.indeterminate = paket1Checked > 0 && paket1Checked < paket1.length;
    }
}

enPaket1.onclick = function() {  // 3
    for(var i=0; i<paket1.length; i++) {
        paket1[i].checked = this.checked;
    }
    enPaket2.checked = false; 
    enPaket3.checked = false;
    
}

for(let i=0; i<paket2.length; i++) {  // 1 и 2 пункт задачи
    paket2[i].onclick = function() {
        let paket2Checked = document.getElementsByClassName('paket2 > [type="checkbox"]:checked').length;
        enPaket2.checked = paket2Checked == paket2.length;
        enPaket2.indeterminate = paket2Checked > 0 && paket2Checked < paket2.length;
    }
}

enPaket2.onclick = function() {  // 3
    for(var i=0; i<paket2.length; i++) {
        paket2[i].checked = this.checked;
    }
    enPaket1.checked = false; 
    enPaket3.checked = false;
}

for(let i=0; i<paket3.length; i++) {  // 1 и 2 пункт задачи
    paket3[i].onclick = function() {
        let paket3Checked = document.getElementsByClassName('paket3 > [type="checkbox"]:checked').length;
        enPaket3.checked = paket3Checked == paket3.length;
        enPaket3.indeterminate = paket3Checked > 0 && paket3Checked < paket3.length;
    }
}

enPaket3.onclick = function() {  // 3
    for(var i=0; i<paket3.length; i++) {
        
        paket3[i].checked = this.checked;
    }
    enPaket2.checked = false; 
    enPaket1.checked = false;
}













/*НАПОЛНЕНИЕ */
law.onchange = function(){
    if(law.checked == true){
        lawD.style.display = "block";
    console.log('hallou');
    }else{
        lawD.style.display = "none";
        console.log('ou');
    }
}


 
    function descri(a, b){ // Включает и выключает блок в описании в зависимости от нажатых чекбоксов. подставляемые значения а - чекбокс b - тот же блок описание
        
        if(a.checked == true){
        b.style.display = "block";
        console.log(a);
    console.log('hallou');
    }else{
        b.style.display = "none";
        console.log('ou');
        console.log(a);
    }}
//НПА
    stav.onchange = function(){
        descri(stav, stavD);
    }
    branch.onchange = function(){
        descri(branch, branchD);
    }
    draft.onchange = function(){
        descri(draft, draftD);
    }
    international.onchange = function(){
        descri(international, internationalD);
    }
    gost.onchange = function(){
        descri(gost, gostD);
    }
    fas.onchange = function(){
        descri(fas, fasD);
    }

    //Судебная практика

    higher.onchange = function(){
        descri(higher, higherD);

    }
    arbitration.onchange = function(){
        descri(arbitration, arbitrationD);
    }
    appeal.onchange = function(){
        descri(appeal, appealD);
    }
    general.onchange = function(){
        descri(general, generalD);
    }
    enpractice.onchange = function(){
        descri(enpractice, enpracticeD);
    }


        //Консультационные материалы

    liblawyer.onchange = function(){
        descri(liblawyer, liblawyerD);

    }
    lib.onchange = function(){
        descri(lib, libD);
    }
    lib1.onchange = function(){
        descri(lib1, lib1D);
    }
    lib2.onchange = function(){
        descri(lib2, lib2D);
    }
    lib3.onchange = function(){
        descri(lib3, lib3D);
    }


   //Энциклопедии решений - если по ним кликали

   encyclopedia1.onchange = function(){
    descri(encyclopedia1, encyclopedia1D);

}
encyclopedia2.onchange = function(){
    descri(encyclopedia2, encyclopedia2D);

}
encyclopedia3.onchange = function(){
    descri(encyclopedia3, encyclopedia3D);

}
encyclopedia4.onchange = function(){
    descri(encyclopedia4, encyclopedia4D);

}
encyclopedia5.onchange = function(){
    descri(encyclopedia5, encyclopedia5D);

}
encyclopedia6.onchange = function(){
    descri(encyclopedia6, encyclopedia6D);

}
encyclopedia7.onchange = function(){
    descri(encyclopedia7, encyclopedia7D);

}
encyclopedia8.onchange = function(){
    descri(encyclopedia8, encyclopedia8D);

}


enPaket1.onchange = function(){
    descri(encyclopedia1, encyclopedia1D);
    descri(encyclopedia3, encyclopedia3D);
    descri(encyclopedia5, encyclopedia5D);
    descri(encyclopedia6, encyclopedia6D);
    descri(encyclopedia7, encyclopedia7D);

}

enPaket2.onchange = function(){
    descri(encyclopedia2, encyclopedia2D);
    descri(encyclopedia4, encyclopedia4D);
    descri(encyclopedia5, encyclopedia5D);
    descri(encyclopedia6, encyclopedia6D);
    descri(encyclopedia7, encyclopedia7D);

}

enPaket3.onchange = function(){
    descri(encyclopedia1, encyclopedia1D);
    descri(encyclopedia4, encyclopedia4D);
    descri(encyclopedia5, encyclopedia5D);
    descri(encyclopedia7, encyclopedia7D);
    descri(encyclopedia8, encyclopedia8D);
}





    
    
