const tracks = [
    { title: "Трек 1", src: "1.mp3" },
    { title: "Трек 2", src: "track2.mp3" },
    { title: "Трек 3", src: "track3.mp3" }
];

let currentTrackIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const playlistElement = document.getElementById('playlist');

function loadTrack(index) {
    audioSource.src = tracks[index].src;
    audioPlayer.load();
    audioPlayer.play();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
}

// Загрузка плейлиста
function loadPlaylist() {
    tracks.forEach((track, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = track.title;
        listItem.onclick = () => selectTrack(index);
        playlistElement.appendChild(listItem);
    });
}

// Инициализация
loadTrack(currentTrackIndex);
loadPlaylist();