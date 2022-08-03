//Nombramos todas las variables que usaremos: los inputs para saber si tienen o no algun valor, el formuario
//para añadir el evento, y los span para hacer aparecer o desaparecer las alertas
const name = document.getElementById("name");
const price = document.getElementById("price");
const inventory = document.getElementById("numberOfBooks");
const nameWarning = document.getElementById("nameWarning");
const priceWarning = document.getElementById("priceWarning");
const inventoryWarning = document.getElementById("numberOfBooksWarning");
const form = document.getElementById("newProduct");
//Añadimos el evento
form.addEventListener('submit', formValidate);


//Funcion que contiene la logica del evento
function formValidate(event){
    let flag=false;

    //Por defecto no se va a enviar el formulario
    event.preventDefault();

    //Validamos que si los inputs estan vacios aparezcan las alertas
    if(name.value.length==0){
        flag=true;
        nameWarning.style.display = "contents";//Modificamos el estilo de la alerta para hacerla visible
    }else{nameWarning.style.display = "none";}//Modificamos el estilo de la alerta para hacerla invisible

    if(price.value.length==0){
        flag=true;
        priceWarning.style.display = "contents";
    }else{priceWarning.style.display = "none";}

    if(inventory.value.length==0){
        flag=true;
        inventoryWarning.style.display = "contents";
    }else{inventoryWarning.style.display = "none";}

    if(!flag) {//Si es falso que algun input está vacío, entonces esviamos el formulario y generamos la alerta de producto creado
        this.submit()
        alert("Product created")
    };
};