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
//let s = document.querySelector('#bracket')
let t = document.querySelector('#percent')
let u = document.querySelector('#delete')



b.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 7 
    } 
    
})
c.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 6  
    } 
    
       
})
d.addEventListener('click', () => {
    if (a.innerHTML.length <= 14){
        a.innerHTML += 8;  
    }   
        
})
e.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 9  
    } 
    
       
})
f.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 4  
    } 
    
       
})
g.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 5  
    } 
    
       
})
h.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 1  
    } 
    
       
})
i.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 2  
    } 
    
       
})
j.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 3  
    } 
    
       
})
k.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += 0; 
    } 
    
       
})
m.addEventListener('click', () => {
    a.innerHTML = '';
    operation = false;
})
l.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += '/';  
    } 
    
       
})
n.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += '*';  
    } 
    
       
})
o.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += '-';  
    } 
    
       
})
p.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += '+';  
    } 
    
       
})
r.addEventListener('click', () => {
    if (a.innerHTML.length <= 14) {
        a.innerHTML += '.';  
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
t.addEventListener('click', () => {
    let equation = a.innerHTML;
  console.log(equation);
  let result = eval(equation) / 100;
  console.log(result);
  if (result%1 === 0){
    a.innerHTML = result
  } else
  a.innerHTML = result.toFixed(5);
})
u.addEventListener('click', () => {

a.innerHTML = a.innerHTML.slice(0, -1)
})
