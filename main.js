/* 
const h1=document.querySelector('h1');
const p=document.querySelector('p');
const pid=document.getElementById('pid');
const imgjs=document.getElementById('imghtml');
const input=document.querySelector('input');
 */
/* console.log(h1.textContent);
console.log(p); */

//h1.innerHTML='Alcyda <br> Tiktok ';
//h1.innerText='Alcyda Colan <br> Tiktok ';

//h1.setAttribute('class', 'blue');
/* h1.classList.add('red');
h1.classList.remove('verde');
input=document.querySelector('input')
input.value ='123'; */

/* const img=document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
pid.replaceWith(img);
imgjs.insertBefore(img); */

const h1=document.createElement('h1');
const input1=document.querySelector('#inputId1');
const input2=document.querySelector('#inputId2');
const input3=document.querySelector('#inputId3');
const btn=document.querySelector('#btnCalc');
const pResult=document.querySelector('#result');
const form=document.querySelector('#form');


//form.addEventListener('submit',sumarInputs);
btn.addEventListener('click',sumarInputs);
btn.addEventListener('mouseup',mouseFocus);


function sumarInputs(event){
/*   console.log('btnOnClick');
  console.log(input1.value+input2.value);
  resultado.value=(input1.value+input2.value); */
  //console.log({event});
  //event.preventDefault();
  //revisar muy bien que es submit para no tener errores

  const sumaInputs=input1.value+input2.value;
  pResult.innerText='Resultado'+sumaInputs;
  //pResult.innerHTML="Resultado"+sumaInputs;
  input3.value=sumaInputs;
}

function mouseFocus(){
 console.log('funciona');
}