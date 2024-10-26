const tracks = [
    {
        name: "Believer",
        artist: "Imagine Dragons",
        url: "track1.mp3", 
        cover: "cover1.jpg" 
    },
    {
        name: "Sun Don't Shine",
        artist: "Faydee",
        url: "track2.mp3", 
        cover: "cover3.jpg" 
    },
    {
        name: "Nentori",
        artist: "Arilena Ara",
        url: "track3.mp3",
        cover: "cover2.jpg" 
    },
];

let currentTrackIndex = 0; // Первый трек в массиве
const audioPlayer = document.getElementById("audio-player"); // Воспроизведение
const playPauseBtn = document.getElementById("play-pause-btn"); // Пауза
const nextBtn = document.getElementById("next-btn"); // Следующий
const trackList = document.getElementById("track-list"); // Ссылка на список треков
const trackCover = document.getElementById("track-cover"); // Обложка
const trackInfo = document.getElementById("track-info"); // Артист и название
const volumeControl = document.getElementById("volume-control"); // Ползунок громкости

// Загрузить этот трек
function loadTrack(index) {
    const track = tracks[index]; // Индекс трека
    audioPlayer.src = track.url; // Адрес
    trackCover.src = track.cover; // Обложка
    trackInfo.textContent = `${track.name} - ${track.artist}`; // Инфа
}

// Плей или пауза трека
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
}

// Следующий трек
function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Келесы трек косу
    loadTrack(currentTrackIndex); // Загрузить
    audioPlayer.play(); // Воспроизведение
    playPauseBtn.textContent = "Pause";
}

// Заполнение списка треков
tracks.forEach((track, index) => {
    const li = document.createElement("li"); // Новый элемент списка
    li.textContent = track.name;
    li.addEventListener("click", () => { // Текст содержание названия
        currentTrackIndex = index;
        loadTrack(currentTrackIndex); // Загрузить трек
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    });
    trackList.appendChild(li); // Полный список песен
});

// Обработчики событий для кнопок
playPauseBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", playNext);

// Обработчик события для ползунка громкости
volumeControl.addEventListener("input", (event) => {
    audioPlayer.volume = event.target.value; // Установка громкости
});

// Загрузить первый трек при загрузке страницы
loadTrack(currentTrackIndex);
