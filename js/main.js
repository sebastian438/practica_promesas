const button = document.querySelector("#button");
const lista = document.querySelector("#lista");
const parrafo = document.querySelector("#parrafo");
const fragment = document.createDocumentFragment();

/**
 * Evento que pone a la escucha el botón 'usuario'. El evento ejecuta la función getApi.
 */

button.addEventListener("click", (ev) => {
    getApi();
});

/**
 * La función api recibe un variable iniciadora 'isOk', una clase 'Promesa'. Después de 2 seg. se ejecuta el bloque de código que se encuentra en 'Promise'
 * @returns Devuelve una promesa.
 */

const api = () => {
    const isOk = true;
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve({
                    nombre: "Pepe",
                    email: "pepe@gmail.com"
                });
            } else {
                reject("Error");
            }
        }, 2000);
    });
    return promesa;
}

/**
 * Resuelve la promesa.
 */

const getApi = () => {
    api()
        .then((respuesta) => {
            funcionPintar(respuesta);
        })
        .catch((error) => {
            parrafo.textContent = error;
        })
}

/**
 * 
 * @param {object} usuario 
 */

const funcionPintar = (usuario) => {
    lista.innerHTML = "";
    const li00 = document.createElement("LI");
    const li01 = document.createElement("LI");

    li00.textContent = usuario.nombre;
    li01.textContent = usuario.email;

    fragment.append(li00);
    fragment.append(li01);

    lista.append(fragment);
}







