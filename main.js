let a = document.querySelector('#result') 
let b = document.querySelector('#seven')
let c = document.querySelector('#six')
let d = document.querySelector('#eight')
let e = document.querySelector('#nine')
let f = document.querySelector('#four')
let g = document.querySelector('#five')
let h = document.querySelector('#one')
let i = document.querySelector('#two')
let j = document.querySelector('#three')
let k = document.querySelector('#zero')
let l = document.querySelector('#divide')
let m = document.querySelector('#clear')
let n = document.querySelector('#multiply')
let o = document.querySelector('#subtract')
let p = document.querySelector('#add')
let q = document.querySelector('#equals')
let r = document.querySelector('#decimal')
let gameOver = false;


b.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 7  
    }   if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }
})
c.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 6  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
d.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 8;  
    }   if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }
})
e.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 9  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
f.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 4  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
g.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 5  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
h.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 1  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
i.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 2  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
j.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 3  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
k.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += 0  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
m.addEventListener('click', () => {
    a.innerHTML = '';
    gameOver = false;
})
l.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += '/';  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
n.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += '*';  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
o.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += '-';  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
p.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += '+';  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
r.addEventListener('click', () => {
    if (!gameOver) {
        a.innerHTML += '.';  
    } if(a.innerHTML.length === 12){
        console.log('mummy')
        gameOver = true;
    }   
})
q.addEventListener('click', () => {
    let equation = a.innerHTML;
  console.log(equation);
  let result = eval(equation);
  console.log(result);
  if (result%1 === 0){
    a.innerHTML = result
  } else
  a.innerHTML = result.toFixed(5);
})