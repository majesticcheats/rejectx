const canvas = document.createElement('canvas')

document.body.appendChild(canvas)

canvas.style.position = 'fixed'
canvas.style.top = '0'
canvas.style.left = '0'
canvas.style.zIndex = '-1'
canvas.style.pointerEvents = 'none'

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i = 0; i < 80; i++){

  particles.push({

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    size: Math.random() * 3,

    speedY: Math.random() * 1 + 0.2

  })

}

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height)

  ctx.fillStyle = 'red'

  particles.forEach(p => {

    ctx.beginPath()

    ctx.arc(
      p.x,
      p.y,
      p.size,
      0,
      Math.PI * 2
    )

    ctx.fill()

    p.y += p.speedY

    if(p.y > canvas.height){

      p.y = 0

      p.x = Math.random() * canvas.width

    }

  })

  requestAnimationFrame(animate)

}

animate()

window.addEventListener('resize', () => {

  canvas.width = window.innerWidth

  canvas.height = window.innerHeight

})