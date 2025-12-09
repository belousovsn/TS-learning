//Having a list of cards available in cardsShop we create a deck with needed parameters

const cardsShop : string[] = [
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
function pickRandomCard(source: string[]) {
    let randomIndex : number = Math.floor(Math.random() * source.length)
    return source[randomIndex]
}
//validate no more than certain amount of same cards in the deck
function isWithinCountLimit (sourceArray: string [], value: string, limitCount: number): boolean {
    let matchesCount : number = sourceArray.reduce((acc: number, curr: string) => acc + (curr === value ? 1 : 0), 0)
    return matchesCount >= limitCount ? false : true
}

//making a deck of cards from the shop
function makeDeck(size: number, source: string[]) {
    let deck : string[] = [];
    const maxDuplicates : number = 2;
    while (deck.length < size) {
        let pickedCard : string = pickRandomCard(source)
        if (isWithinCountLimit(deck, pickedCard, maxDuplicates)) {
            deck.push(pickedCard)
        }
    }
    return deck
}

console.log(makeDeck(10, cardsShop))
//function to shuffle the deck
//function to pick a card from the deck
//function to check the chance of picking two cards of the same value one after another