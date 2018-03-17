import * as meowCss from './meow.css';
import apple from './apple.js';

const root = document.getElementById('root');
root.innerHTML = "Hello World.";

import * as meowPng from './placebear-example.jpg';

const img = document.createElement('img')
img.src = meowPng;
root.appendChild(img);


const x = x => x * x;

root.innerHTML += x(252);