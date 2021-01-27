'use strict';
window.onresize = function () {
  document.body.height = window.innerHeight;
};
window.onresize(); // called to initially set the height.

const audio = document.getElementById('audio');
const vinyl = document.querySelector('.art');
const text1 = document.querySelector('.click1');
const text2 = document.querySelector('.click2');

vinyl.addEventListener('click', function () {
  vinyl.classList.add('playing');
  const play = function () {
    audio.play();
    vinyl.classList.remove('paused');
    text1.classList.add('hidden');
    text2.classList.remove('hidden');
  };
  const pause = function () {
    audio.pause();
    vinyl.classList.add('paused');
    text2.classList.add('hidden');
    text1.classList.remove('hidden');
  };
  audio.paused ? play() : pause();
});
