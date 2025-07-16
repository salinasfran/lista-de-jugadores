# 🦅 Ejercicio: Lista dinámica de jugadores

## 🎯 **Objetivo:**
Crear una página web responsiva donde el usuario pueda:
- Escribir el nombre de un jugador en un campo de texto.
- Agregar el nombre a una lista que aparece debajo.
- Eliminar jugadores de la lista con un botón.
- Usar **Bootstrap 5** para el diseño.
- Manipular el DOM con **JavaScript puro**.

---

## 🧰 **Lo que vas a practicar:**
✅ Estructura básica de HTML.  
✅ Clases de Bootstrap para diseño rápido y limpio.  
✅ Manipulación dinámica del DOM.  
✅ Eventos de clic y creación/eliminación de elementos.  

---

## 📄 **Pasos a seguir:**

### 📍 1. Estructura básica de la página
- Creá un archivo `index.html`.
- Agregá la estructura básica de HTML.
- Enlazá Bootstrap 5 usando su CDN.
- Poné un `container` centrado y un título llamativo, por ejemplo:  
  > Lista de Jugadores - Olimpia 🦅

---

### 📍 2. Campo de entrada y botón
- Dentro del `container`, agregá un bloque central con:
  - Un `input` de texto para escribir el nombre del jugador.
  - Un botón al lado que diga «Agregar».
- Usá clases de Bootstrap como `input-group` para alinear ambos elementos.

---

### 📍 3. Lista vacía
- Abajo del campo, agregá un elemento `ul` con clases de Bootstrap (`list-group`).
- Este `ul` empieza vacío y servirá para mostrar los jugadores agregados dinámicamente.

---

### 📍 4. Lógica en JavaScript
- Creá un archivo `script.js` y enlazalo al HTML.
- Al hacer clic en el botón «Agregar»:
  - Obtené el valor del `input`.
  - Si el campo no está vacío, creá un nuevo `li` con ese nombre.
  - Cada `li` debe tener también un pequeño botón «Eliminar» al lado.
  - Insertá el `li` dentro del `ul`.
  - Limpiá el `input` después de agregar.

---

### 📍 5. Botón para eliminar
- Cada elemento de la lista debe tener un botón «Eliminar».
- Al hacer clic en ese botón, el `li` correspondiente debe desaparecer del DOM.

---

### 📍 6. Extras opcionales
- Validá que el campo no esté vacío antes de agregar.
- Mostrá un pequeño mensaje de error si está vacío.
- Mostrá un contador con la cantidad total de jugadores en la lista.
- Asegurate de que la página se vea bien en dispositivos móviles.

---

## 📝 **Entrega:**
- Archivos mínimos: `index.html` y `script.js`.
- Opcional: un archivo `styles.css` si querés personalizar algo más.

---

> 📣 ¡Éxitos, campeón! Practicá con garra y categoría, como buen Decano tricampeón del mundo.  
> Cuando termines, podés desafiarte agregando nuevas funcionalidades. 🔥🏆

