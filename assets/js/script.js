const checkNoturno = document.getElementById('check-noturno');

checkNoturno.addEventListener('change', function(){
    if(checkNoturno.checked === true){
        document.body.classList.add('modo-noturno');
    } else {
        document.body.classList.remove('modo-noturno');
    }
})