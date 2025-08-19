// script.js
document.addEventListener('DOMContentLoaded', () => {
  const overlayObject = document.getElementById('overlayObject');
  const hiddenVideo = document.getElementById('hiddenVideo');

  // При клике на объект
  overlayObject.addEventListener('click', () => {
    // Удаляем объект
    overlayObject.style.display = 'none';

    // Показываем и запускаем видео
    hiddenVideo.style.opacity = 1;
    hiddenVideo.play();
  });
});
