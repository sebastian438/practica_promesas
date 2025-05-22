const button = document.querySelector("#button");
const lista = document.querySelector("#lista");



button.addEventListener("click", (ev) => {

});


const api = () => {
    const isOk = true;
    const promesa = new Promise((resolve, reject) => {
        if (isOk) {
            resolve({
                nombre: "Pepe",
                email: "pepe@gmail.com"
            });
        } else {
            reject("Error");
        }
    });
    return promesa;
}

const getApi = () => {
    api()
        .then((respuesta) => {
            funcionPintar(respuesta);
        })
        .catch((error) => {
            console.log(error);
        })
}

const funcionPintar = () => {

}

getApi();





