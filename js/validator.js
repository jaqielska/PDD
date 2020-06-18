let czyEdycja = 0;//1 jesli edycja
let rowDoEdycji = 0;

let id = 1;


function wylaczenieedycji() {
    czyEdycja = 0;
    rowDoEdycji = 0;
    document.querySelector('#btn__submitform').textContent = "Dodaj";

}


var t_name
function sprawdzTowarName() {
    var formularz_obj = document.getElementById("towar_name");
    t_name = formularz_obj.value;
    var blad = document.getElementById("towar_name_blad");
    var objRegExp = /^[a-zA-Z]+$/;
    if (t_name === "") {
        blad.innerHTML = "Podaj nazwe towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (t_name.length > 10) {
        blad.innerHTML = "Zadluga nazwa (max 10 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else if (!objRegExp.test(t_name)) {
        blad.innerHTML = "Wpisz tylko litery";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "Ok";
        return 1;
    }
    return 0;
}
var t_kod
function sprawdzTowarKod() {
    var formularz_obj = document.getElementById("towar_kod");
    t_kod = formularz_obj.value;
    var blad = document.getElementById("towar_kod_blad");
    var objRegExp = /[a-zA-Z0-9]{2}[\-]?[a-zA-Z0-9]{2}/; //litery i cyfry XX-XX
    if (t_kod === "") {
        blad.innerHTML = "Podaj kod produktu";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (!objRegExp.test(t_kod)) {
        blad.innerHTML = "Wpisz tylko litery i cyfry w formacie XX-XX";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "Ok";
        blad_danych = false;
        return 1;
    }
    return 0;
}
var t_cnetto
function sprawdzTowarCnetto() {
    var formularz_obj = document.getElementById("towar_cnetto");
    t_cnetto = formularz_obj.value;
    var blad = document.getElementById("towar_cnetto_blad");
    var objRegExp = /[0-9]+([\.][0-9]+)?/; //litery i cyfry XX-XX
    // var objRegExp = /^[0-9]*$/; // cyfry
    if (t_cnetto === "") {
        blad.innerHTML = "Podaj kod produktu";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (!objRegExp.test(t_cnetto)) {
        blad.innerHTML = "Wpisz tylko cyfry";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "Ok";
        if (!formularz_obj.value.includes('.')) formularz_obj.value += ".00";
        return 1;
    }
    return 0;
}

var t_vat
function sprawdzTowarVat() {
    var formularz_obj = document.getElementById("towar_vat");
    t_vat = formularz_obj.value;
    var blad = document.getElementById("towar_vat_blad");
    var objRegExp = /^[0-9]*$/; // cyfry
    if (t_vat === "") {
        blad.innerHTML = "Podaj stawke VAT ";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (!objRegExp.test(t_vat)) {
        blad.innerHTML = "Wpisz tylko cyfry";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "Ok";
        blad_danych = false;
        return 1;
    }
    return 0;
}
var t_cbrutto;
function ustawCennaBrutto() {
    let bruttoInput = document.querySelector('#towar_cbrutto');
    bruttoInput.value = parseFloat(cnettoinput.value) * (1 + (parseFloat(vatinput.value) / 100));
    t_cbrutto = bruttoInput.value;
}
let cnettoinput = document.querySelector('#towar_cnetto');
let vatinput = document.querySelector('#towar_vat');
cnettoinput.addEventListener('change', ustawCennaBrutto);
vatinput.addEventListener('change', ustawCennaBrutto);


var t_kat
function sprawdzTowarKat() {
    var formularz_obj = document.getElementById("towar_kat");
    t_kat = formularz_obj.value;
    var blad = document.getElementById("towar_kat_blad");
    if (t_kat == '') {
        blad.innerHTML = "Podaj kategorię";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "Ok";
        blad_danych = false;
        return 1;
    }
    return 0;
}

let t_opcje = [];
function sprawdzTowarOpcje() {
    var opcjeForm = document.querySelector(".opcjeForm");
    var blad = document.getElementById("towar_opcje_blad");
    let numberChecked = 0;
    let opcjeinputs = document.querySelectorAll(".towar_opcje");
    t_opcje = [];
    for (let i = 0; opcjeinputs.length > i; i++) {
        if (opcjeinputs[i].checked) {
            t_opcje.push(opcjeinputs[i].id);
            numberChecked++;
        }
    }

    if (numberChecked < 2) {
        blad.innerHTML = "Podaj przynajmniej 2 opcje";
        blad.classList.add("invalid-feedback");
        blad.classList.remove("valid-feedback");
        blad.classList.add("d-block");
    } else {
        blad.classList.remove("invalid-feedback");
        blad.classList.add("valid-feedback");
        blad.classList.add("d-block");
        blad.innerHTML = "Ok";
        return 1;
    }

    return 0;
}

let t_ocena;
function sprawdzTowarOcena() {
    var blad = document.getElementById("towar_ocena_blad");
    let ocenyIle = 0;
    let ocenyradio = document.querySelectorAll('.ocenaRadio');
    for (let i = 0; i < ocenyradio.length; i++) {
        if (ocenyradio[i].checked) {
            ocenyIle++;
            t_ocena = ocenyradio[i];
        }
    }

    console.log(blad);
    if (ocenyIle < 1) {
        console.log(blad);
        blad.innerHTML = "Dodaj ocenę";
        blad.classList.add("invalid-feedback");
        blad.classList.remove("valid-feedback");
        blad.classList.add("d-block");
        console.log(ocenyIle);

    } else {
        blad.classList.remove("invalid-feedback");
        blad.classList.add("valid-feedback");
        blad.classList.add("d-block");
        blad.innerHTML = "Ok";
        return 1;
    }
    return 0;

}


function dodajProdukt() {

    const juzdodaneprodukty = document.querySelectorAll('.tabela_produktNazwa');
    let juzdodany = 0;
    juzdodaneprodukty.forEach((nazwa) => {
        console.log(nazwa.textContent);
        if (t_name == nazwa.textContent) {
            alert("Produkt o takiej nazwi jest już dodany!");
            juzdodany = 1;
            return;
        }
    })
    if (juzdodany) {
        return;
    }

    let t_opcjeString = '';

    t_opcje.map((opcja) => { t_opcjeString += ` ${opcja}, ` });


    var row = `<tr role="row">
    //             <td class="tabela_produktNazwa">${t_name}</td>
    //             <td>${t_kod}</td>
    //             <td>${t_cnetto}</td>
    //             <td>${t_vat}</td>
    //             <td>${t_cbrutto}</td>
    //             <td>${t_kat}</td>
    //             <td>${t_opcjeString}</td>
    //             <td>${t_ocena.value}</td>
    //             <td> <img src="https://static1.redcart.pl/templates/images/thumb/19402/1500/1500/pl/0/templates/images/products/19402/036286faeba242b087198ece13dda804.jpg"></td>
    //             <td>  
      <button id=${id} onclick="usunWierszZtabeli(this)">Usuń</button>
      <button id=${id} onclick="edytujWierszZtabeli(this)">Edytuj</button>
      <button id=${id} onclick="dodajDoKoszyka(this)">Do koszyka</button>
      </td>
    // </tr > `,
        $row = $(row),
        resort = true;
    $('#myTable')
        .find('tbody').append($row)
        .trigger('addRows', [$row, resort]);

    id++;
    renderGalleryFromTable();


}


function edytujProdukt() {

    let table = document.querySelector('#myTableTbody');
    rowDoEdycji = rowDoEdycji - 1;
    table.rows[rowDoEdycji].cells[0].textContent = document.getElementById("towar_name").value;
    table.rows[rowDoEdycji].cells[1].textContent = document.getElementById("towar_kod").value;
    table.rows[rowDoEdycji].cells[2].textContent = document.getElementById("towar_cnetto").value;
    table.rows[rowDoEdycji].cells[3].textContent = document.getElementById("towar_vat").value;
    table.rows[rowDoEdycji].cells[4].textContent = document.getElementById("towar_kat").value;
    let t_opcjeString = '';
    t_opcje.map((opcja) => { t_opcjeString += ` ${opcja}, ` });
    table.rows[rowDoEdycji].cells[6].textContent = t_opcjeString;
    console.log('edytowanoo🖖');
    wylaczenieedycji();
    renderGalleryFromTable();

}

let form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    sprawdzTowarName();
    sprawdzTowarKod();
    sprawdzTowarCnetto();
    sprawdzTowarKat();
    sprawdzTowarOpcje();
    sprawdzTowarOcena();
    sprawdzTowarVat();

    if (sprawdzTowarName() && sprawdzTowarKod() && sprawdzTowarCnetto() && sprawdzTowarVat() && sprawdzTowarOpcje() && sprawdzTowarOcena()) {

        if (czyEdycja) {
            console.log('edycjaa');
            edytujProdukt();

        } else {
            dodajProdukt();
        }
    }
});


$(function () {
    $("#myTable").tablesorter({
        theme: 'blue', sortList: [[3, 1], [0, 0]]
    });
});



//sortowanie on selecet clikc
const selectTypSortowania = document.querySelector('.wybierzTypSortowaniaSelect');
selectTypSortowania.addEventListener('change', () => {

    switch (selectTypSortowania.selectedIndex) {
        case 1: {
            $("#myTable").trigger("sorton", [
                [
                    [2, 0]
                ]
            ]);
            console.log('1111');
            break;
        }
        case 2: {
            $("#myTable").trigger("sorton", [
                [
                    [2, 1]
                ]
            ]);
            // console.log('22');
            break;
        }

        case 3: {
            $("#myTable").trigger("sorton", [
                [
                    [7, 0]
                ]
            ]);

            break;
        }

        case 4: {
            $("#myTable").trigger("sorton", [
                [
                    [7, 1]
                ]
            ]);
            break;
        }

        case 5: {
            $("#myTable").trigger("sorton", [
                [
                    [0, 0]
                ]
            ]);
            break;
        }
        case 6: {
            $("#myTable").trigger("sorton", [
                [
                    [0, 1]
                ]
            ]);
            break;
        }

    }
    renderGalleryFromTable();



})




//usuanie z talbei 
function usunWierszZtabeli(btn) {
    document.querySelector('#myTable').deleteRow(btn.parentNode.parentNode.rowIndex);
    renderGalleryFromTable();
}




//edytuj wiersz  z edytujWierszZtabeli 
function edytujWierszZtabeli(btn) {
    // dodanie do fomrularza danych
    document.getElementById("towar_name").value = btn.parentNode.parentNode.cells[0].textContent;
    document.getElementById("towar_kod").value = btn.parentNode.parentNode.cells[1].textContent;
    document.getElementById("towar_cnetto").value = btn.parentNode.parentNode.cells[2].textContent;
    document.getElementById("towar_vat").value = btn.parentNode.parentNode.cells[3].textContent;
    document.getElementById("towar_cbrutto").value = btn.parentNode.parentNode.cells[4].textContent;
    document.getElementById("towar_kat").value = btn.parentNode.parentNode.cells[5].textContent;


    //dokonczyc opcje
    let opcje = document.querySelectorAll('.towar_opcje');
    opcje[1].checked = true;
    opcje[3].checked = true;
    opcje.forEach((opcja) => {
     
    });

    let oceny = document.querySelectorAll('.ocenaRadio');
    oceny.forEach((ocena) => {
        if (ocena.value == btn.parentNode.parentNode.cells[7].textContent) {
            ocena.checked = true;

        }
    });
    rowDoEdycji = btn.parentNode.parentNode.rowIndex;
    czyEdycja = 1;
    document.querySelector('#btn__submitform').textContent = "Edytuj";


};



//dodanie do koszyka LS
function dodajDoKoszyka(btn) {
    let arrayToKoszyk = [];
    let oldkoszyk = localStorage.getItem("koszyk");
    var oldkoszykObject = JSON.parse(oldkoszyk);
    if (oldkoszykObject) {
        arrayToKoszyk = oldkoszykObject;
    }
    let jsonToKoszyk = {
        nazawa: btn.parentNode.parentNode.cells[0].textContent,
        cena_brutto: btn.parentNode.parentNode.cells[4].textContent,
        ilosc: 1
    }
    arrayToKoszyk.push(jsonToKoszyk);
    localStorage.setItem("koszyk", JSON.stringify(arrayToKoszyk));
    updateCart();

}


function updateCart() {
    let koszyk = localStorage.getItem("koszyk");
    let koszyktable = document.querySelector(".koszykTable");
    let koszykObject = JSON.parse(koszyk);
    if (!koszykObject) return;
    let cenaKoncowa = 0;
    koszyktable.innerHTML = `
    <tr>
    <th>Nazwa</th>
    <th>Cena brutto</th>
    <th>Ile sztuk</th>
    <th>Ilosc</th>
</tr>
    `
    koszykObject.forEach((produkt) => {
        cenaKoncowa += parseFloat(produkt.cena_brutto) * parseFloat(produkt.ilosc);
        koszyktable.innerHTML += `
        <tr>
                      <td>${produkt.nazawa}</td>
                      <td>${produkt.cena_brutto}</td>
                      <td>${produkt.ilosc}</td>
                      <td>  <button onClick="odejmjiIlosc(this)"> -</button>  <button onClick="dodajIlosc(this)"> +</button></td>     
                     </tr>
        `
    });

    cenaKoncowa += parseFloat(document.querySelector('.dostawKoszykSelect').value);
    document.querySelector('.koszykCenaSuma').textContent = `Cena końcowa to ${cenaKoncowa}  zl`;
}
updateCart();

document.querySelector('.dostawKoszykSelect').addEventListener('change', updateCart);




function odejmjiIlosc(btn) {
    let arrayToKoszyk = [];
    let oldkoszyk = localStorage.getItem("koszyk");
    let oldkoszykObject = JSON.parse(oldkoszyk);
    if (oldkoszykObject[btn.parentNode.parentNode.rowIndex - 1].ilosc == 1) return;
    oldkoszykObject[btn.parentNode.parentNode.rowIndex - 1].ilosc -= 1;
    arrayToKoszyk = oldkoszykObject;
    localStorage.setItem("koszyk", JSON.stringify(arrayToKoszyk));
    updateCart();

}
function dodajIlosc(btn) {
    let arrayToKoszyk = [];
    let oldkoszyk = localStorage.getItem("koszyk");
    let oldkoszykObject = JSON.parse(oldkoszyk);
    oldkoszykObject[btn.parentNode.parentNode.rowIndex - 1].ilosc += 1;
    arrayToKoszyk = oldkoszykObject;
    localStorage.setItem("koszyk", JSON.stringify(arrayToKoszyk));
    updateCart();
}




document.querySelector('#koszyKUP').addEventListener('click', () => {
    alert('kupiono');
    localStorage.clear();
    document.querySelector(".koszykTable").innerHTML = '';
});







let juzzaladowano;
document.querySelector('.wczytajDane-button').addEventListener('click', () => {
    if (juzzaladowano) return;
    fetch('mydata.json')
        .then(data => data.json())
        .then(json => {
            dodajWczytaneProdukty(json)
        });

});

function dodajWczytaneProdukty(produkty) {

    produkty.forEach((produkt) => {
        console.log(produkt);
        console.log(produkt.nazwa);

        var row = `<tr role="row">
        //             <td class="tabela_produktNazwa">${produkt.nazwa}</td>
        //             <td>${produkt.kod}</td>
        //             <td>${produkt.cenanetto}</td>
        //             <td>${produkt.vat}</td>
        //             <td>${produkt.cenabrutto}</td>
        //             <td>${produkt.kategoria}</td>
        //             <td>${produkt.opcja}</td>
        //             <td>${produkt.ocena}</td>
        //             <td> <img src="${produkt.img}"></td>
        //             <td>  
          <button id=${id} onclick="usunWierszZtabeli(this)">Usuń</button>
          <button id=${id} onclick="edytujWierszZtabeli(this)">Edytuj</button>
          <button id=${id} onclick="dodajDoKoszyka(this)">Do koszyka</button>
          </td>
        // </tr > `,
            $row = $(row),
            resort = true;
        $('#myTable')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);

        id++;

    })
    juzzaladowano = 1;
    renderGalleryFromTable();
}




let tabelaproduktow = document.querySelector('#myTable');
let galeriaproduktow = document.querySelector('.gallery');

function renderGalleryFromTable() {
    let allRow = document.querySelectorAll('#myTable #myTableTbody tr')
    console.log(allRow);
    galeriaproduktow.innerHTML = '';
    allRow.forEach((row) => {
        galeriaproduktow.innerHTML += `
        <div class="gallery_element">
                    <img src="${row.cells[8].children[0].src}">
                    <span class="gallery_element--name">${row.cells[0].textContent}</span>
                    <span class="gallery_element--cena">
                    ${row.cells[2].textContent} ( ${row.cells[4].textContent}) zł
                    </span>              
                </div>             
        `

    });
}

function ustawWidokGalerii() {
    tabelaproduktow.classList.add('off');
    galeriaproduktow.classList.remove('off');
    renderGalleryFromTable();
}
function ustawWidokTabeli() {
    console.log("12");
    tabelaproduktow.classList.remove('off');
    galeriaproduktow.classList.add('off');

}

//zmiana widoku

let selectZmainaWidoku = document.querySelector('.wybierzWidok');
function zmianaWidoku(e) {
    if (selectZmainaWidoku.value == 1) {
        ustawWidokGalerii();
    } else {
        ustawWidokTabeli();
    }
}

renderGalleryFromTable();
selectZmainaWidoku.addEventListener('change', zmianaWidoku, true)
