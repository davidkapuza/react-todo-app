import random from './random.js'

const userIcons = [
  "https://img.icons8.com/bubbles/100/000000/walter-white.png",
  "https://img.icons8.com/bubbles/100/000000/stormtrooper.png",
  "https://img.icons8.com/bubbles/100/000000/homer-simpson.png",
  "https://img.icons8.com/bubbles/100/000000/jake.png",
  "https://img.icons8.com/bubbles/100/000000/saitama.png",
  "https://img.icons8.com/bubbles/100/000000/bt21-chimmy.png",
  "https://img.icons8.com/bubbles/100/000000/bt21-cooky.png",
  "https://img.icons8.com/bubbles/100/000000/bt21-mang.png",
  "https://img.icons8.com/bubbles/100/000000/bt21-rj.png",
  "https://img.icons8.com/bubbles/100/000000/bt21-shooky.png",
  "https://img.icons8.com/bubbles/100/000000/futurama-bender.png",
  "https://img.icons8.com/bubbles/100/000000/super-mario.png",
]

const randomUserIcon = (arr) => arr[random(0, arr.length - 1)]

export default randomUserIcon(userIcons)