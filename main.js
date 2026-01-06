// Pequeñas interacciones: placeholder para futuras mejoras
document.addEventListener('click', e=>{
  if(e.target.matches('.btn.secondary')){
    e.preventDefault();
    alert('Reemplaza "Ver más" con una página de detalles o una URL pública.');
  }
});