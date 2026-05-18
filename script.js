
function lutar(){ 


const classes = getElementby.id('classes').value;
const arma = getElementby.id('arma').value.trim();
const log = getElementby.id('log');

if(!arma){
    log.innerhtml="Para de graça filha da puta"
    return;
//voce esqueceu de equipar uma arma
    const dado = Math.floor(Math.random()*20)+1;
    let resultado = `Dado: ${dado} | <strong>${classes}</strong> com <strong>${arma}</strong>`
}
}
