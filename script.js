//alert co ti dá ahoj
let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("Ahoj!")
})

//změna textu v buttonu
let second = document.getElementById('second')

second.addEventListener('click', function(){
    this.textContent = "Změna textu"
})
 
//změna nadpisu o kliknutí na button
const third = document.getElementById('third')

const thirda = document.getElementById('thirda')

third.addEventListener('click', function(){
    thirda.textContent = "Změna nadpisu"
})

//není vidět nadpis a po kliknutí na button se oběví
const fourth = document.getElementById('fourth')

const fourtha = document.getElementById('fourtha')

fourth.addEventListener('click', function(){
    fourtha.textContent = 'Úkol 4'
})

//zadáte jmeno a vyskočí alert s tím co jste tam zadali 
function hellouser(){
    let jmeno = document.getElementById('jmeno').value;
    alert('Vítám tě na webové stránce ' + jmeno);
}

//najedete na button a změní se text v buttonu
const mys = document.getElementById('mys');
        
    mys.addEventListener('mouseenter', () => {
            mys.textContent = 'Text se změnil';
    });

    mys.addEventListener('mouseleave', () => {
         mys.textContent = 'Najed na mě';
    });

//ukaže realný čas a datum
let cas = document.getElementById('cas');
let datum = document.getElementById('datum');

const pcas =  document.getElementById('pcas');

const pdatum = document.getElementById('pdatum');

cas.addEventListener('click', function(){
    const aktualnicas = new Date();
    const skutecnycas = aktualnicas.toLocaleTimeString();
    pcas.textContent = 'Momentální čas je: ' + skutecnycas;
})

datum.addEventListener('click', function(){
    const aktualnidatum = new Date();
    const skutecnedatum = aktualnidatum.toLocaleDateString();
    pdatum.textContent = 'Momentální datum je: ' + skutecnedatum;
})

//k napsanému číslu přičte 3
function secistTri() {  
    let vstup = document.getElementById("cislo").value
    let vysledek = parseFloat(vstup) + 3; document.getElementById("vysledek").innerText = "výsledek = " + vysledek 
    }

//sečte dvě čísla
function sectiCisla() {
    let cislo1 = document.getElementById("cislo1").value; 
    let cislo2 = document.getElementById("cislo2").value;
    let vysledek = parseFloat(cislo1) + parseFloat(cislo2); 
    document.getElementById("vysledek2").innerText = "Výsledek: " + vysledek; 
    }


    //zadáš text,oběví se text,smažeš text pomocí buttonu.
    const addButton = document.getElementById('puff');
        const textInput = document.getElementById('textInput');
        const textList = document.getElementById('text_2');

        addButton.addEventListener('click', function() {
            const text = textInput.value;
            if (text) {
                const textItem = document.createElement('div');
                textItem.className = 'text-item';
                textItem.textContent = text;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Odstranit';
                removeButton.addEventListener('click', function() {
                    textList.removeChild(textItem);
                });

                textItem.appendChild(removeButton);
                textList.appendChild(textItem);
                textInput.value = '';
            }
        });


