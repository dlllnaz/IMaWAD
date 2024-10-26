// Загрузка аудиофайлов для каждой ноты
const notes = {
    C: new Audio("C.mp3"),
    D: new Audio("D.mp3"),
    E: new Audio("E.mp3"),
    F: new Audio("F.mp3"),
    G: new Audio("G.mp3"),
    A: new Audio("A.mp3"),
    B: new Audio("B.mp3")
};

// Воспроизведение ноты при клике на клавишу
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playNote(note);
    });
});

// Воспроизведение ноты при нажатии клавиши на клавиатуре
document.addEventListener('keydown', event => {
    const keyMap = { 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'a': 'A', 'b': 'B' };
    const note = keyMap[event.key.toLowerCase()];
    if (note) {
        playNote(note);
    }
});

// Функция для воспроизведения аудиофайла
function playNote(note) {
    const audio = notes[note];
    if (audio) {
        audio.currentTime = 0; // Перемотка звука, чтобы можно было играть несколько раз подряд
        audio.play();
    }
}
