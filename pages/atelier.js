
var block = document.querySelector("#wrap");
var element = document.querySelector("#jury");
element.addEventListener("click", function(event){

    if(block.classList.contains('none'))
    {
        block.classList.remove('none');
    }else{

        block.classList.add('none');
    }
    


})


var rubrique = document.querySelectorAll(".composant-competence")

for(i= 0; i< rubrique.length; i++){
rubrique[i].childNodes[1].addEventListener("click", function(event){

    if(event.currentTarget.parentNode.childNodes[3].classList.contains('competencehide')){
        event.currentTarget.parentNode.childNodes[3].classList.remove('competencehide');
    

    }else{
        event.currentTarget.parentNode.childNodes[3].classList.add('competencehide');
    }
})

}