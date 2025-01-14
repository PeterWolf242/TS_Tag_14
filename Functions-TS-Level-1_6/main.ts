type Monster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number,
}

function createmonster(
    name: string,
    type: string,
    health: number = 100,
    strength: number = 50,
    speed: number = 25): Monster {
    return {
        name, type, health, strength, speed
    };
}

const monster1 = createmonster("Beast", "Black Beast");
console.log("Monster mit 2 Parametern: ", monster1);

const monster2 = createmonster("Kobold", "Goblin", 400);
console.log("Monster mit 3 Parametern: ", monster2);

const monster3 = createmonster("Hydra", "Schlangenwesen", 950, 130);
console.log("Monster mit 4 Parametern: ", monster3);

const monster4 = createmonster("Chimäre", "Fabelwesen", 1200, 160, 70);
console.log("Monster mit 5 Parametern: ", monster4);
