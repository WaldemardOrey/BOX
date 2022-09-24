const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))



const boxEl = document.querySelector('.dead')
const boxWidth = getComputedStyle(boxEl).getPropertyValue('width')
const width = +boxWidth.substring(0,boxWidth.length - 2)
console.log(width)




function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')

      box.style.backgroundPosition = `${-j * width}px ${-i * width}px`
      boxesContainer.appendChild(box)

    }
  }
}

createBoxes()
