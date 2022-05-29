import vplayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const videoplayerCurrentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

// Сохранить текущее время плеера
saveCurrentTime();

// Восстановить текущее время плеера
setPlayerCurrentTime();

// Записывать текущее время в локар стор с частотой раз в 1 сек
function saveCurrentTime() {
  player.on('timeupdate', throttle(putTimeToLocalStorage, 1000));
}

// Добавить в локал стор текущее время
function putTimeToLocalStorage(event) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(event));
}

// Установить время плеера из локал стора
function setPlayerCurrentTime() {
  if (videoplayerCurrentTime) {
    player
      .setCurrentTime(videoplayerCurrentTime.seconds)
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            console.log(
              'Error: the time was less than 0 or greater than the video’s duration'
            );
            break;

          default:
            console.log('Unknown error');
            break;
        }
      });
  }
}
