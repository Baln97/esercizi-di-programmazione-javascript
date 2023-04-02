/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var Gatti = 44;
var GattiInFila = 6;
var totalefile = Math.ceil(Gatti/GattiInFila);
// Expected output: 8
var gattimancanti = (totalefile*GattiInFila)- Gatti;
// Expected output: 4
var restodeigatti = (GattiInFila-gattimancanti);
// Expected output: 2
console.log('$(Gatti) gatti in fila $(GattiInFila) col resto di$(restodeigatti)');
