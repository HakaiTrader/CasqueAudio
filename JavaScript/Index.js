////////////////////////////////////////
///// SLIDE IMAGES CLIQUABLES /////
////////////////////////////////////////
const image = document.querySelector('.image img');
const imageSelection =  [...document.querySelectorAll('.slide')];

imageSelection.forEach(el => el.addEventListener('click',pictureChoice))

function pictureChoice(e) {
    if (e.target === imageSelection[0]) {
        image.src = "./Images/Casque1.png"
    }
    else if (e.target === imageSelection[1]) {
        image.src = "./Images/Casque2.png"
    }
}
////////////////////////////////////////
/////////// FENETRES MODALS ////////////
////////////////////////////////////////

const modal = [...document.querySelectorAll('.modal')]
const openModals = [...document.querySelectorAll('.open-modal')];
const quitModals = document.querySelectorAll('.quit-modal');


function showModal(index,validation) {

    if (validation) {
        modal[index].style.display = 'flex';
    }

}
openModals.forEach(el => el.addEventListener('click',open));

function open(e) {
    if (e.target === openModals[0]) {
        modal[0].style.display = "flex";
    }
    else if (e.target === openModals[1]) {
        modal[1].style.display = "block";
    }
    else if (e.target === openModals[2]) {
        modal[2].style.display = "flex";
    }
    else if (e.target === openModals[3]) {
        modal[3].style.display = "flex";
    }
    else if (e.target === openModals[4]) {
        modal[3].style.display = "flex";
    }
}
quitModals.forEach(el => el.addEventListener('click', quit));

function quit(e) {
    if (e.target === quitModals[0]) {
        modal[0].style.display = "none";
    }
    else if (e.target === quitModals[1]) {
        modal[1].style.display = "none";
    }
    else if (e.target === quitModals[2]) {
        modal[2].style.display = "none";
    }
    else if (e.target === quitModals[3]) {
        modal[3].style.display = "none";
    }
}
////////////////////////////////////////
/////////// FOOTER ACHAT ///////////////
////////////////////////////////////////

const footer = document.querySelector('.footer-buy')
const ratio = 0.25

const optionFooterBuy = {

    root: null, // zone d'affichage //
    rootMargin: "0px",
    threshold: ratio // portion visible avant affichage //
}
const footerBuy = new IntersectionObserver(handleObserver, optionFooterBuy) // fonction , options ///

function handleObserver(entries, footerBuy) {
    entries.forEach(function (entry){          // entry = detecter entrée dans la div
        if (entry.intersectionRatio > ratio) { // Dés que ratio entry ===> afficher
            
            footer.classList.add('close')
            
        }else if(entry.intersectionRatio < ratio){
            
            footer.classList.remove('close')
        }
    })
}

footerBuy.observe(document.querySelector('.intersection-footer')) /// Point affichage.

////////////////////////////////////////
/////////// AJOUT AU PANIER ////////////
////////////////////////////////////////

const nombrePanier = document.querySelector('.panier-number')
const appendBasket = document.querySelectorAll('.ajouter-panier')

appendBasket.forEach(el => el.addEventListener('click',addBasket))

let numberPanier = 0;
function addBasket() {
    
    nombrePanier.style.display = "flex"
    numberPanier++;
    nombrePanier.textContent = numberPanier;
}

////////////////////////////////////////////////////////////
/////////// OUVRIR PANIER ET RETIRER UN ARTICLE ////////////
////////////////////////////////////////////////////////////
const basketBuy = document.querySelector('.panier-achat img')
const retirerUn = document.querySelector('.retirer');
const modalBasket = document.querySelector('.modal-panier')

basketBuy.addEventListener('mouseenter',openModalBasket);

function openModalBasket(){
    modalBasket.style.display = "flex";
}

retirerUn.addEventListener('click', removeArticle)

function removeArticle() {
    numberPanier--
    nombrePanier.textContent = numberPanier;

    if (numberPanier === 0) {
        nombrePanier.style.display ="none";
    } else if (numberPanier <= 0) {
        alert('Votre panier est vide')
        numberPanier++
    }
}
/////////////////////////////
//// QUITTER MODAL PANIER ///
/////////////////////////////

modalBasket.addEventListener('mouseleave', closeModalBasket)

function closeModalBasket() {
    modalBasket.style.display = "none";
}

//////// MESSAGE COMMANDER ////////

const command = document.querySelector('.commander')
command.addEventListener('click',msg =>{
    alert('Non, cette page n\'est pas créée')
})







