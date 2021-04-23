
const law = document.querySelector(".law");
const law2 = document.querySelector(".law2");
const big = document.getElementsByClassName('big');
const small = document.getElementsByClassName('small');
const region = document.getElementById('region');
let reg = 0;
let bigSum = 0;
let smallSum = 0.5;
let block = document.getElementsByTagName('checkbox');
let weight = 0;
let blocksWeight = document.querySelector('.blocks-weight');

/*Библиотека бухгалтера*/
const lib = document.getElementById('lib');
const lib1 = document.getElementById('lib1');
const lib2 = document.getElementById('lib2');
const lib3 = document.getElementById('lib3');
let lib_ch = 0;

const lib__change = document.getElementById('lib__change');
const lib__change1 = document.getElementById('lib__change1');
const lib__change2 = document.getElementById('lib__change2');
const lib__change3 = document.getElementById('lib__change3');

/*Энциклопедии решений*/
let encyclopedia1 = document.getElementById('encyclopedia_1');
let encyclopedia2 = document.getElementById('encyclopedia_2');
let encyclopedia3 = document.getElementById('encyclopedia_3');
let encyclopedia4 = document.getElementById('encyclopedia_4');
let encyclopedia5 = document.getElementById('encyclopedia_5');
let encyclopedia6 = document.getElementById('encyclopedia_6');
let encyclopedia7 = document.getElementById('encyclopedia_7');
let encyclopedia8 = document.getElementById('encyclopedia_8');

let enPaket1 = document.getElementById('encyclopedia_paket_1');
let enPaket2 = document.getElementById('encyclopedia_paket_2');
let enPaket3 = document.getElementById('encyclopedia_paket_3');
let encyc1 = 0;
let encyc2 = 0;
let encyc3 = 0;
let paket1 = document.getElementsByClassName('paket1');
let paket2 = document.getElementsByClassName('paket2');
let paket3 = document.getElementsByClassName('paket3');

//Комплекты

let gb = document.getElementsByClassName('gb'); //гарант-бухгалтер-госсектора
let gbg = document.getElementsByClassName('gbg');  //гарант-бухгалтер-госсектора
let gu = document.getElementsByClassName('gu');  //  гарант-юрист
let ggb = document.getElementsByClassName('ggb');  //  гарант-главный-бухгалтер 
let ggbg = document.getElementsByClassName('ggbg');  //гарант-главный-бухгалтер-госсектора
let gp = document.getElementsByClassName('gp');       //гарант-предприятие

let complect = document.getElementById('exampleRadios1');
// Законодательство России - обязательный блок
const l = () => {
    law.addEventListener('change',(event) =>  {
        law.checked = true;
       alert('Идите!');
    
})
}

l(law);


/**Большие блоки  - вес */

for(let i=0; i<big.length; i++) {
    
    big[i].onclick = function() {
        if (big[i].checked == true){
            bigSum += 1;
        }else{
            bigSum -= 1;
        }
        console.log(`${bigSum}bigSum`);
        weight = bigSum + smallSum;
        console.log(`${weight} weight`);
        blocksWeight.innerText = `Вес:  ${weight}`;
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
        console.log(`${weight} weight`);
        blocksWeight.innerText = `Вес:  ${weight}`;
    }
 }

 /** Вес всех блоков подставляем значение  */
 blocksWeight.addEventListener('click',(event) =>  {
    blocksWeight.innerText =`Вес:  ${weight}`;

})
  //blocksWeight.value = weight.innerText;
 



law.onclick = function(){
    console.log('law');
}  
//big.addEventListener('click', function () {
  //  console.log('BIG');    
//})

region.addEventListener('click', function(){
    if(reg == 0){
    this.textContent = "Законодательство Владикавказа";
    reg = 1;    
    }
    else{
        this.textContent = "Законодательство Ставропольского края";
        reg = 0
    }
     
})
lib.addEventListener('click', function(){
    
    if(lib_ch == 0){
        console.log('я тут')
        this.style.color="rgb(107, 61, 61)";
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
        this.style.color="rgb(107, 61, 61)";
        lib1.style.display="inline";
        lib2.style.display="inline";
        lib3.style.display="inline";
        lib__change1.style.display="inline";
        lib__change2.style.display="inline";
        lib__change3.style.display="inline";
            
        lib_ch = 0;
    }

})

/*Энциклопедии решений Для бухгалтера*/
/*enPaket1.addEventListener('change', function(){
    if(enPaket1.checked){
        
        encyclopedia1.checked = true;
        encyclopedia3.checked = true;
        encyclopedia4.checked = true;
        encyclopedia5.checked = true;
        encyclopedia6.checked = true;
        encyclopedia6.checked = true;
       console.log('эр')
    }
    else{
        if(enPaket1.checked){
        
            encyclopedia1.checked = false;
            encyclopedia3.checked = false;
            encyclopedia4.checked = false;
            encyclopedia5.checked = false;
            encyclopedia6.checked = false;
            encyclopedia6.checked = false;
           console.log('эр')
        }
    }

})*/

/*<fieldset id="shest">
<legend><input type="checkbox"> Check all</legend>
<input type="checkbox">
<input type="checkbox">
<input type="checkbox">
</fieldset>


var main = document.querySelector('#shest legend [type="checkbox"]'),
    all = document.querySelectorAll('#shest > [type="checkbox"]');
    */
/**
 * let enPaket1 = document.getElementById('encyclopedia_paket_1');
let enPaket2 = document.getElementById('encyclopedia_paket_2');
let enPaket3 = document.getElementById('encyclopedia_paket_3');
let encyc1 = 0;
let encyc2 = 0;
let encyc3 = 0;
let paket1 = document.getElementsByClassName('paket1');
let paket2 = document.getElementsByClassName('paket2');
let paket3 = document.getElementsByClassName('paket3');
 */
    
/**Энциклопедии решений - по пакетам */
for(let i=0; i<paket1.length; i++) {
    //console.log(paket1);
     // 1 и 2 пункт задачи
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
/*Гарант-бухгалтер

let gb = document.getElementsByClassName('gb'); //гарант-бухгалтер-госсектора
let gbg = document.getElementsByClassName('gbg');  //гарант-бухгалтер-госсектора
let gu = document.getElementsByClassName('gu');  //  гарант-юрист
let ggb = document.getElementsByClassName('ggb');  //  гарант-главный-бухгалтер 
let ggbg = document.getElementsByClassName('ggbg');  //гарант-главный-бухгалтер-госсектора
let gp = document.getElementsByClassName('gp');       //гарант-предприятие
*/
for(let i=0; i<gb.length; i++) {
    //console.log(paket1);
     // 1 и 2 пункт задачи
     gb[i].onclick = function() {
         console.log('788888');
        let gbChecked = document.getElementsByClassName('gb > [type="checkbox"]:checked').length;
        console.log(gbChecked);
        complect.checked = gbChecked == gb.length;
        complect.indeterminate = gbChecked > 0 && gbChecked < gb.length;
    }
}

complect.onclick = function() {  // 3
    for(var i=0; i<gb.length; i++) {
        gb[i].checked = this.checked;
    }
    
    
}

function check()
{
    var inp = document.querySelector('.form-check-input');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            console.log(inp[i].value);
        }
    }
    inp.addEventListener('click', function() {
        check();
    })
    
}


/*http://jsfiddle.net/leaverou/ASPUA/
http://shpargalkablog.ru/2013/08/checked.html*/