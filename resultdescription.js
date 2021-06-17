import { errrr } from "./er.js";
import { infoblocks } from "./infoblocks.js";
import { ltObjects } from "./lt.js";

const d = document;
const result = d.getElementById('result'); //кнопка результата

let flagMenu = false;

const menu = d.getElementById('menu'); // все чекбоксы в гридах
const menuD = d.getElementById('menuDescript'); // ВСЁ Описание

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


/*
const lib__change = document.getElementById('lib__change');
const lib__change1 = document.getElementById('lib__change1');
const lib__change2 = document.getElementById('lib__change2');
const lib__change3 = document.getElementById('lib__change3');
*/
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
/*let encyc1 = 0;
let encyc2 = 0;
let encyc3 = 0;
let paket1 = document.getElementsByClassName('paket1'); // чекбоксы с классом Пакет1 - входящие в пакет ЭР 1
let paket2 = document.getElementsByClassName('paket2');  // чекбоксы с классом Пакет2 - входящие в пакет ЭР 2
let paket3 = document.getElementsByClassName('paket3');  // чекбоксы с классом Пакет3 - входящие в пакет ЭР 3
*/



//Дополнительно
let archive = d.getElementById('26');   //Архивы ГАРАНТа
let archiveD = d.getElementById('twentysix');    //Архивы ГАРАНТа
let prime = d.getElementById('27');                 //ПРАЙМ
let primeD = d.getElementById('twentyseven');        //ПРАЙМ
let litigation = d.getElementById('28');              //Судебная практика: приложение кконсультационным блокам
let litigationD = d.getElementById('twentyeight');      //Судебная практика: приложение кконсультационным блокам
let home = d.getElementById('29');                      //Большая домашняя правовая энциклопедия
let homeD = d.getElementById('twentynine');             //Большая домашняя правовая энциклопедия

//Специализированные блоки
let vocabulary = d.getElementById('18');           //Толковый словарь «Бизнес и право»
let vocabularyD = d.getElementById('thirty');          //Толковый словарь «Бизнес и право»
let schemes = d.getElementById('19');                 //Энциклопедия. Законодательство в схемах
let schemesD = d.getElementById('thirtyone');   //Энциклопедия. Законодательство в схемах
let forms = d.getElementById('20');            //Энциклопедия. Формы правовых документов
let formsD = d.getElementById('thirtytwo');     //Энциклопедия. Формы правовых документов     
let infarm = d.getElementById('21');            // ГАРАНТ-Инфарм
let infarmD = d.getElementById('thirtythree');   // ГАРАНТ-Инфарм
let technic = d.getElementById('22');           //Справочник нормативно-технической документации по строительству
let technicD = d.getElementById('thirtyfour');   //Справочник нормативно-технической документации по строительству



//Пакет услуг правового консалтинга

let hot = d.getElementById('23');  //Горячая Линия
let hotD = d.getElementById('thirtyfive');   //Горячая Линия
let expert = d.getElementById('24');   //Советы Экспертов
let expertD = d.getElementById('thirtysix');   //Советы Экспертов
let consalt = d.getElementById('25');   //Правовой консалтинг. Премиум
let consaltD = d.getElementById('thirtyseven');   //Правовой консалтинг. Премиум

//Сервисный пакет Legal Tech

let legal1 = d.getElementById('30'); //Аналитическая система "Сутяжник"
let legal1D = d.getElementById('thirtyeight');  //Аналитическая система "Сутяжник"

let legal2 = d.getElementById('31');   //Конструктор правовых документов
let legal2D = d.getElementById('thirtynine');   //Конструктор правовых документов

let legal3 = d.getElementById('32');   //Экспресс проверка контрагентов
let legal3D = d.getElementById('forty');   //Экспресс проверка контрагентов

let legal4 = d.getElementById('33');   //Экспресс Согласование
let legal4D = d.getElementById('fortyone');   //Экспресс Согласование

let legal5 = d.getElementById('34');   // Экспресс тендер
let legal5D = d.getElementById('fortytwo');   // Экспресс тендер

let legal6 = d.getElementById('35');   //Гарант Диск
let legal6D = d.getElementById('fortythree');   //Гарант Диск

let legal7 = d.getElementById('36');   //Гарант Коннект
let legal7D = d.getElementById('fortyfour');   //Гарант Коннект

let legal8 = d.getElementById('37');   // Гарант Патент
let legal8D = d.getElementById('fortyfive');   //Гарант Патент


let legal9 = d.getElementById('38');   //Интернет-Семианры
let legal9D = d.getElementById('fortysix');   //Интернет-Семианры

let legal10 = d.getElementById('39');   //ЭТАЛОННЫЙ КЛАССИФИКАТОР
let legal10D = d.getElementById('fortyseven');   //ЭТАЛОННЫЙ КЛАССИФИКАТОР



const legalDescription = [
    legal1D, legal2D, legal3D, legal4D, legal5D, legal6D, legal7D, legal8D, legal9D, legal10D
];


const infoblocksDescription = [
    lawD, stavD, branchD,  draftD, internationalD, gostD, fasD, 
    higherD, arbitrationD, appealD, generalD, enpracticeD, 
    liblawyerD, libD, lib1D, lib2D, lib3D,
    vocabularyD, schemesD, formsD, infarmD, technicD,
    hotD, expertD, consaltD,
    archiveD, primeD, litigationD, homeD
];
const erDescription = [
    encyclopedia1D, encyclopedia2D, encyclopedia3D, encyclopedia4D, encyclopedia5D, encyclopedia6D, encyclopedia7D, encyclopedia8D
];

const descriptionAnalysis = (blocksarray, descriptionarray) => {

    for (let i = 0; i < blocksarray.length; i++){

        if(blocksarray[i].html.checked == true){
           
            descriptionarray[i].style.display = "block";
            
    
        }else{
            descriptionarray[i].style.display = "none";

        }

}
};
result.addEventListener('click', function(){
    descriptionAnalysis(infoblocks, infoblocksDescription);
    descriptionAnalysis(errrr, erDescription);
    descriptionAnalysis(ltObjects, legalDescription);
//window.alert('result!');
if(flagMenu == false){
    menu.style.display = "none";
    menuD.style.display = "grid";
    

    flagMenu = true;
    }else{
        menu.style.display = "grid";
        menuD.style.display = "none";
        
        flagMenu = false;
    }


}) ;
