//set the word from the input
function setWord(value, language) {
    return {
        id: crypto.randomUUID(),
        value: value,
        language: language,
        translation_id: null
    };
}
var input = document.querySelector('#searchInput');
var button = document.querySelector('#searchBtn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log(setWord(input.value.trim(), "en"));
});
//# sourceMappingURL=index.js.map