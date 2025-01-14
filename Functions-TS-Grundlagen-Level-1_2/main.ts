// * "Hallo" und im HTML ausgeben
const outputBox = document.querySelector<HTMLDivElement>("#output-box");

const output = () => {
    if (outputBox)
        outputBox.innerText = "Hallo\n";
}

output();
//****************************************************** */
// * 2 Zahlen addieren und im HTML ausgeben
const summe = (zahl1: number, zahl2: number) => {
    return zahl1 + zahl2;
}

if (outputBox)
    outputBox.innerText += summe(3, 4);

//****************************************************** */
// * 2 Zahlen miteinander multiplizieren und über "window.alert" ausgeben
const multiplikation = (num1: number, num2: number) => {
    // window.alert(num1 * num2);
}

multiplikation(2, 5);

//****************************************************** */
const objekt = {
    name: "Peter",
    alter: 48,
}

const readObjekt = (objekt: Object) => {
    console.log(Object.keys(objekt));
}

readObjekt(objekt);