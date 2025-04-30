/**
 * 
 * @param {Array<string>} deck 
 * @returns {Number} Retorna el valor de la carta
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}