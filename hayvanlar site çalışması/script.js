function setupAnimalSound(animal) {
  const image = document.getElementById(animal);
  const sound = document.getElementById(`${animal}-sound`);
  let timeoutId; // Gecikmeyi kontrol etmek için değişken

  image.addEventListener('mouseover', () => {
    timeoutId = setTimeout(() => { // 1 saniye sonra çalışacak
      sound.currentTime = 0;
      sound.play();
    }, 500); // 1000 milisaniye = 1 saniye
  });

  image.addEventListener('mouseout', () => {
    clearTimeout(timeoutId); // Fare çıkarsa sesi çalmadan iptal ediyoruz
  });
}
  
const animals = ['tiger', 'horse', 'monkey', 'baykus', 'frog', 'cat', 'dog', 'hyena', 'chick', 'cow', 'fox', 'panda'];

animals.forEach(animal => setupAnimalSound(animal));
