/**
 * @type {number}
 */
const szam = 67; //global
valami1();//hoisting
valami2();
valami3();
const ered = valami4(34);
console.log(ered);

/**
 * Ez a függvény kérdez valamit
 * 
 * @returns {void}
 */
function valami1(){
    console.log("Patapim?");
}

/**
 * Ez a függvény egy mát
 * 
 * @returns {void}
 */
function valami2(){
    console.log(szam);
}

/**
 * Ez a függvény deklarál egy lokális változót és log
 * 
 * @returns {void}
 */
function valami3(){
    const szam1 = 69;
    console.log(szam1);
}

/**
 * Ez a függvény egy paraméteres majom
 * 
 * @param {number} para1 
 * @return {number}
 */
function valami4(para1){
    const szam2 = 12;
    const osszeg = szam2 + para1;
    return osszeg;
}
