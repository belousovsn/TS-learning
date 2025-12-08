function greeting(msg) {
    console.log(msg);
}
greeting('hi');
var cardsShop = [
    "Carson Sinclair: The Butler",
    "Bestow Resolve",
    "Field Agent",
    "Girish Kadakia: ICPC Punjab Detective",
    "Guard Dog",
    "Handcuffs",
    "Hunter's Armor",
    "Martyr's Vambrace: Remnant of the Unknown",
    "Obsidian Bracelet",
    "Runic Axe",
    "Bolas",
    "Breach the Door",
    "Custom Modifications",
    "Ever Vigilant",
    "Grievous Wound",
    "Motivational Speech",
    "One in the Chamber",
    "Prepared for the Worst",
    "Fighting Lessons",
    "Helping Hand",
    "Locked and Loaded",
    "Sacred Covenant",
    "Stick to the Plan",
    "Wish Eater: Jewel of the Gods",
    "Combat Training",
    "Old Shotgun",
    "Physical Training",
    "Relentless",
    "Rite of Sanctification",
    "Solemn Vow",
    "Blackjack",
    "Combat Training",
    "Empty Vessel: Abandoned by the Gods",
    "Enchanted Armor",
    "Handcuffs",
    "Trench Knife",
    "Wolf Mask: The Moon's Sire",
    ".32 Colt",
];
//функция для выбора случайной карты из набора
function pickRandomCard(source) {
    var randomIndex = Math.floor(Math.random() * source.length);
    return source[randomIndex];
}
//функция для наполнения колоды
function makeDeck(size, source) {
    var deck = [];
    var maxDuplicates = 2;
    while (deck.length < size) {
        deck.push(pickRandomCard(source));
    }
    return deck;
}
console.log(makeDeck(10, cardsShop));
//функция для перемешивания колоды
//функция проверки колоды на то что выбранная карта находится рядом с такой же
//# sourceMappingURL=index.js.map