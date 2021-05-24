document.querySelector('button').onclick = function dane() {
    let imie = document.getElementById('input-name');
    let nazwisko = document.getElementById('input-surname');
    let telefon = document.getElementById('input-phone');
    
    let first = document.getElementById('name');
    first.textContent = imie.value;
    
    let second = document.getElementById('surname');
    second.textContent = nazwisko.value;
    
    let third = document.getElementById('phone');
    third.textContent = telefon.value;
}



