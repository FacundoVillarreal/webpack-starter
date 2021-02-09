import '../css/componentes.css'

export const  saludar = (nombre) => {
  const h1 = document.createElement("h1");
  console.log('HTML');
  h1.innerText = `Hola ${nombre} `;
  document.body.append(h1);
}