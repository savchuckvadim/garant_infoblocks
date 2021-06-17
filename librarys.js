export const lib = document.getElementById('l14');
export const lib1 = document.getElementById('l15');
export const lib2 = document.getElementById('l16');
export const lib3 = document.getElementById('l17');
let lib_ch = 0;

export function libraryHide(){

    if(lib_ch == 0){
        
        
        lib1.style.display="none";
        lib2.style.display="none";
        lib3.style.display="none";
        lib__change1.style.display="none";
        lib__change2.style.display="none";
        lib__change3.style.display="none";
           
        lib_ch = 1;
    }
    else {
       
        
        lib1.style.display="inline";
        lib2.style.display="inline";
        lib3.style.display="inline";
        lib__change1.style.display="inline";
        lib__change2.style.display="inline";
        lib__change3.style.display="inline";
            
        lib_ch = 0;
    }

}
lib.addEventListener('click', function(){
    
    libraryHide();

})
