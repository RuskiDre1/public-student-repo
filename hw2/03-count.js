const inputElement = document.querySelector('input');
const paragraphElement = document.getElementById('paragraph');

const handleKeyDown = (event) => {
    const { value } = event.target;

    if (!value) {
        paragraphElement.textContent = paragraphElement.textContent;
        return;
    }

    const wordsArray = paragraphElement.textContent.split(/\b/);
    const highlightedTextArray = wordsArray.map((word) => {
        if (word.toLowerCase() === value.toLowerCase()) {
            return `<span class="bg-warning">${word}</span>`;
        }
        return word;
    });

    paragraphElement.innerHTML = highlightedTextArray.join('');
};

inputElement.addEventListener('keydown', handleKeyDown);
