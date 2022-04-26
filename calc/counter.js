// input type number 
const total = document.querySelector('.input-number__input'),
  min = 1,
  max = 99;

// Уменьшаем на 1 
document.querySelector('.input-number__minus').addEventListener('click', () => {
  if (total.value > min) {
    total.value = +total.value - 1;
  }
});

// Увеличиваем на 1 
document.querySelector('.input-number__plus').addEventListener('click', () => {
if (total.value < max) {
  total.value = +total.value + 1;
  }
});

// Запрещаем ввод текста 
document.querySelectorAll('.input-number__input').forEach(function(el) {
  el.addEventListener('input', function() {
    this.value = this.value.replace(/[^\d]/g, '');
  });
});