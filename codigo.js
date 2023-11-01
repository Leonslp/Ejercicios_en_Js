//En el siguiente codigo se muestran dos mensajes con la etiqueta alert; esos mensajes se encuentran en un archivo Js que es llamado desde uno HTML con la etiqueta Script

function mensajes() {
    let holaMundo = "Hola Mundo!";
    let primerScript = "Soy el primer script";
    
    return { holaMundo, primerScript };
}

let mensaje = mensajes();
document.write(mensaje.holaMundo);
document.write(mensaje.primerScript);


const mesesDelAnno = [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Agoosto","Septiembre","Octubre","Nomviembre","Diciembre"];

console.log (mesesDelAnno);