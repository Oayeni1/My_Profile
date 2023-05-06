const doc1 = document.getElementById('flexSwitchCheckChecked');
const doc2 = document.querySelector('body');
doc1.addEventListener('change', function(){
    if (doc1.checked){
        doc2.classList.add('active')
    } 
    else {
        doc2.classList.remove('active')
    }
    
});