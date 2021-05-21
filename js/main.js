document.querySelector('button').onclick = function dane() {
    let imie = prompt('Podaj imię:');
    let nazwisko = prompt('Podaj nazwisko:');
    let telefon = prompt('Podaj telefon:');
    
    let first = document.getElementById('name');
    first.textContent = imie.valueOf(0);
    
    let second = document.getElementById('surname');
    second.textContent = nazwisko.valueOf(0);
    
    let third = document.getElementById('phone');
    third.textContent = telefon.valueOf(0);
}



