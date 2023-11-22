document.addEventListener('DOMContentLoaded', function () {
    var lecteurAudio = document.querySelector('audio');

    lecteurAudio.addEventListener('play', function () {
        console.log('Lecture en cours : ' + lecteurAudio.src);
    });

    lecteurAudio.addEventListener('pause', function () {
        console.log('Lecture en pause : ' + lecteurAudio.src);
    });
});