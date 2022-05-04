const numbersOfProductsArray = Array.from(document.querySelectorAll(".infa-block-1"))
const summa = document.querySelector(".money")
const collor = document.querySelector(".collor")


const min = 0
const max = 99

numbersOfProductsArray.forEach(e => {
  e.children[1].children[1].children[0].children[2].addEventListener('click', () => {
    if (e.children[1].children[1].children[0].children[1].value < max) {
      e.children[1].children[1].children[0].children[1].value = +e.children[1].children[1].children[0].children[1].value + 1;
      summa.innerText = `${(parseFloat(e.children[2].innerText) + parseFloat(summa.innerText)).toFixed(2)} руб`
      collor.innerText = `${(parseFloat(e.children[0].children[1].innerText) + parseFloat(collor.innerText)).toFixed(2)} ккал`
    }
  })

  e.children[1].children[1].children[0].children[0].addEventListener('click', () => {
    if (e.children[1].children[1].children[0].children[1].value > min) {
      e.children[1].children[1].children[0].children[1].value = +e.children[1].children[1].children[0].children[1].value - 1;
      summa.innerText = `${(parseFloat(summa.innerText) - parseFloat(e.children[2].innerText)).toFixed(2)} руб`
      collor.innerText = `${(parseFloat(collor.innerText) - parseFloat(e.children[0].children[1].innerText)).toFixed(2)} ккал`
    }
  })
})

