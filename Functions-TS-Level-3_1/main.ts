const buttonColors: string[][][] = [
    [
        ["#cbe3ef", "Porter Paints Niagara Falls", "#254e7a", "Cyanblau Mittel"],
        ["#fff5e0", "Leichter Gelbstich", "#ee9e8e", "Rotton Mittel"],
        ["#9ccd62", "Gelb-Grün", "#e0ddca", "Hellbeige"],
        ["#fea837", "Sonnengelb", "#593e67", "Mitternachtslila"]
    ]]

console.log(buttonColors[0][0]);

const body = document.querySelector("body");
const highlight = document.querySelector<HTMLElement>("h1");

const buttons = document.querySelectorAll<HTMLButtonElement>("button");

const output = document.querySelector<HTMLDivElement>(".output");

buttons.forEach((element, index) => {
    element.addEventListener("click", () => {
        const colors = buttonColors[0][index];
        if (body && highlight && colors) {
            body.style.backgroundColor = `${colors[0]}`;
            highlight!.style.color = `${colors[2]}`;
        }
        else {
            if (body != null) {
                body.style.backgroundColor = "#ffffff";
                highlight!.style.color = "#000000";
            }
        }
        if (output != null) {
            output.innerText = `Hintergrundfarbe: ${colors[1]} (${colors[0]})\n\n`;
            output.innerText += `Vordergrundfarbe: ${colors[3]} (${colors[2]})\n`;
        }
    });
});