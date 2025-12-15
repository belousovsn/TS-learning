type Language = 
    | "ru"
    | "en"
    | "hy";


interface Word {
    id: string;
    value: string;
    language: Language | null;
    translation_id: string | null;
}

//set the word from the input
function setWord(value: string, language: Language) : Word {
    return {
        id: crypto.randomUUID(),
        value,
        language,
        translation_id: null
    }
}

const input = document.querySelector('#searchInput') as HTMLInputElement;
const button = document.querySelector('#searchBtn');

button?.addEventListener('click', () => {
    console.log(setWord(input.value.trim(), "en"));
});