// Данные о расах и классах
const races = {
    human: { name: "Человек", bonuses: { str: 1, dex: 1, int: 1 } },
    elf: { name: "Эльф", bonuses: { dex: 2, int: 1 } },
    dwarf: { name: "Гном", bonuses: { str: 2, con: 1 } }
};

const classes = {
    warrior: { name: "Воин", hp: 10, stats: { str: 3, con: 2 } },
    mage: { name: "Маг", hp: 6, stats: { int: 3, wis: 2 } },
    rogue: { name: "Плут", hp: 8, stats: { dex: 3, cha: 2 } }
};

document.getElementById("generate-btn").addEventListener("click", generateCharacter);

function generateCharacter() {
    const race = document.getElementById("race-select").value;
    const charClass = document.getElementById("class-select").value;
    
    // Создаём объект персонажа
    const character = {
        race: races[race].name,
        class: classes[charClass].name,
        stats: {
            str: 5 + (races[race].bonuses.str || 0) + (classes[charClass].stats.str || 0),
            dex: 5 + (races[race].bonuses.dex || 0) + (classes[charClass].stats.dex || 0),
            int: 5 + (races[race].bonuses.int || 0) + (classes[charClass].stats.int || 0),
            con: 5 + (races[race].bonuses.con || 0) + (classes[charClass].stats.con || 0),
        },
        hp: classes[charClass].hp + (races[race].bonuses.con || 0)
    };

    // Выводим результат
    const resultDiv = document.getElementById("character-sheet");
    resultDiv.innerHTML = `
        <p>Раса: ${character.race}</p>
        <p>Класс: ${character.class}</p>
        <p>Характеристики:</p>
        <ul>
            <li>Сила: ${character.stats.str}</li>
            <li>Ловкость: ${character.stats.dex}</li>
            <li>Интеллект: ${character.stats.int}</li>
            <li>Телосложение: ${character.stats.con}</li>
        </ul>
        <p>Здоровье: ${character.hp}</p>
    `;
    document.getElementById("result").classList.remove("hidden");
}