// Inizializzo il contatore

let counter = 0;


// Seleziono il bottone e il paragrafo nel DOM

const button = document.querySelector('.add-to-cart');
const cartPar = document.querySelector('.cart p');



// creo la funzione che farò partire all' onclick del button
 function AggiornaCarrello() {
    // Incrementa il contatore
    counter++;
    // Aggiorno il testo del paragrafo
    cartPar.textContent = `CART (${counter})`;
}






