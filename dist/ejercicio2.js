//No válida: debido a que el string dado sólo tienen caracteres en minúscula y con longitud menor que 6. Ej. “micontraseña”
//Contraseña débil: contiene solamente Mayúsculas, minúsculas y es mayor de 6 caracteres y menor de 12. Ej. “MiContraseña”
//Contraseña media: contiene solamente Mayúsculas, minúsculas, números y es mayor de 8 caracteres y menor de 12. Ej. “M1C0ntr4s3ñ4”
//Contraseña fuerte: contiene solamente Mayúsculas, minúsculas, números, símbolos y es mayor de 8 caracteres y menor de 12. Ej. “M1C0ntr4s3ñ4$$”
function validarContrasena(clave) {
    let respuesta = "";
    if (minusculas(clave) && clave.length <= 6) {
        respuesta = "No Valida";
    }
    else {
        if (clave.length > 6 && clave.length < 12) {
            respuesta = "Contraseña Debil";
        }
        else {
            if (contieneNumeros(clave) && clave.length > 8 && clave.length <= 12) {
                respuesta = "Contrasela Media";
            }
            else {
                if (contieneSimbolos(clave) && clave.length > 12) {
                    respuesta = "contraseña Fuerte";
                }
                else {
                    respuesta = "contraseña Media";
                }
            }
        }
    }
    return respuesta;
}
function minusculas(texto) {
    return (texto == texto.toLowerCase());
}
function contieneNumeros(texto) {
    let respuesta = false;
    if (/.*[0-9]/.test(texto)) {
        respuesta = true;
    }
    return respuesta;
}
function contieneSimbolos(texto) {
    let respuesta = false;
    if (/[!@#$%^&()=[{};':"\|,<>\/-]/.test(texto)) {
        respuesta = true;
    }
    return respuesta;
}
console.log(validarContrasena("micon"));
console.log(validarContrasena("MiContraseñ"));
console.log(validarContrasena("M1C0ntr4s3ñ4"));
console.log(validarContrasena("M1C0ntr4s3ñ4$$"));
