const cardsShop : Array<string> = [
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
]
//pick random card from the card shop
function pickRandomCard(source: Array<String>) {
    let randomIndex : number = Math.floor(Math.random() * source.length)
    return source[randomIndex]
}
//making a deck of cards from the shop
function makeDeck(size: number, source: Array<String>) {
    let deck : Array<String> = [];
    const maxDuplicates : number = 2; //TBD
    while (deck.length < size) {
        deck.push(pickRandomCard(source))
    }
    return deck
}

console.log(makeDeck(10, cardsShop))
//function to shuffle the deck
//function to pick a card from the deck
//function to check the chance of picking two cards of the same value one after another