//Importamos el arreglo de los productos (pedidos);
import { products } from "./arreglo_productos.js";

//Creacion de contenedor para la tabla con su respectivo titulo:
let contenedor = document.createElement('div');
let card = document.createElement('div');
let titulo = document.createElement('h3');
titulo.innerHTML = "My car";

//Creacion de tabla
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
card.appendChild(titulo);
card.appendChild(table);
let body = document.getElementById('body').appendChild(contenedor).appendChild(card);

//Creacion de encabezado con los keys de un objeto del arrglo
//La lógica funciona de tal forma que los encabezados se ingresen desde las keys un objeto
let row_1 = document.createElement('tr');
let CantidadelementosDeCadaObjeto=Object.keys(products[0]).length;
for (let index = 0; index < CantidadelementosDeCadaObjeto; index++) {
    var valor = Object.keys(products[0])[index];
    var heading = document.createElement('th');
    valor = valor[0].toUpperCase() + valor.slice(1)
    heading.innerHTML = valor;
    row_1.appendChild(heading);
}

//Creacion del encabezado "total", ya que este no es una key del objeto
let heading_total = document.createElement('th');
heading_total.innerHTML = "Total";
row_1.appendChild(heading_total);
thead.appendChild(row_1);


//Llenado de la tabla con los datos del arreglo
//Este for recorrerá cada objeto del arreglo y creará una fila por cada uno.
for (let index = 0; index < products.length; index++) {
    var row = document.createElement('tr');
    let contador = Object.keys(products[index]).length
    //Este for llenará cada fila de la tabla con los datos de cada objeto
    for (let index2 = 0; index2 < contador + 1; index2++) {
        //En esta condicion llenaremos la celda que contiene la imagen, que sería la primer celda
        if (index2 == 0) {
            let rowData = document.createElement('td');
            let img = document.createElement('img');
            var productos = products[Object.keys(products)[index]];
            var valor = productos[Object.keys(products[index2])[index2]];
            img.src = valor;
            img.style.width = '50px';
            rowData.appendChild(img);
            row.appendChild(rowData);
        }
        //En esta condición llenamos el resto de celdas que no contiene la imagen ni el total
        else if (index2 != contador) {
            let rowData = document.createElement('td');
            console.log(index);
            console.log(index2);
            var productos = products[Object.keys(products)[index]];
            console.log(productos);
            var key = Object.keys(products[index])[index2];
            console.log(key);
            var valor = productos[key];
            console.log(valor);
            rowData.innerHTML = valor;
            row.appendChild(rowData);
        }
        //Por último tenemos la lógica para llenar la celda del total con los datos precio y cantidad
        else {
            let rowData = document.createElement('td');
            var productos = products[Object.keys(products)[index]];
            var precio = productos['price'];
            var cantidad = productos['quantity'];
            rowData.innerHTML = precio * cantidad;
            row.appendChild(rowData);
        }}
        //Agregamos cada fila a la tabla
        tbody.appendChild(row);
    }

    //Estilos
    contenedor.style.cssText = 'display: flex; justify-content: center; font-size: 15px;';
    card.style.cssText = 'margin-top: 20px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); background-color: white; width: auto; border-radius: 5px; padding: 10px;';
    titulo.style.cssText = 'font-weight: 100; color: #de1822; padding-left: 30px;';
    table.style.backgroundColor = 'white';

