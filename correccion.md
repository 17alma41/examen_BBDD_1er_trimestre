# Corrección

## Teoria:
9/12, está **genial**, tienes muy claros muchos conceptos importantes sobre javascript, en respuestas más abiertas te expresas bien, sigue asi!

## Práctica:
Se te ha pasado recuperar los datos del localStorage! :( hay varios cambios corregidos en tu codigo para lograrlo:

- Cuando creas la lista, no necesitas envolverla en un array, JSON.parse ya te devuelve un array. De esta forma acabarás con un array de dos dimensiones.
- Al añadir los elementos recuperados del localStorage al DOM, debes añadirlos a tu contenedor `results` y no a `resultado`.
- En la función `añadir()` se te pasó añadir la lista al localStorage!

Por otro lado la web esta muy bien presentada, y me gusta que hayas añadido un link para la referencia, aunque los navegadores no saben leer archivos .md (ojalá!) y se podría haber hecho un apaño desde stackedit o haciendo un html separado añadiendo el texto del README.md así:

```html
<pre>
# Mi texto en markdown
## Deja de renderizarse pero se lee en el navegador!
</pre>
```

## Documentación:
Concisa y clara, ayudaría añadir algo de código relativo a algunas de las funcionalidades, recuerda usar

```js
function añadir(){
    let valor = document.getElementById("valor").value;
    let elemento = document.createElement("p");
    elemento.innerHTML = valor;
    document.getElementById("resultado").appendChild(elemento);
    document.getElementById("valor").value = "";
    lista.push(valor);
    localStorage.setItem("lista", JSON.stringify(lista));
}
```

```html
<div class="container">
    <input type="text" id="valor" placeholder="Introduce un nombre">
    <button onclick="añadir()">Añadir</button>
    <button onclick="sorteo()">Sortear</button>
    <button onclick="borrar()">Borrar</button>
</div>
```

```css
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}
```

Para compartir código de forma más rápida y eficiente.

## Nota: 8/10
