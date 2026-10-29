# Portafolio Interactivo

Landing page de "Mapas de Barrio", un estudio ficticio que crea mapas ilustrados de barrios de Lima.
Proyecto académico que usa **Bootstrap 5**, **transformaciones CSS** y **animaciones CSS**.

## Estructura

```
portafolio-interactivo/
├── index.html
├── css/styles.css
├── js/main.js
└── README.md
```

## Bootstrap 5 (CDN)

- **Navbar** `bg-dark` con logo, menú (Inicio, Proyectos, Contacto) y botón hamburguesa en móviles (`navbar-expand-lg`).
- **Grid**: `container`, `row` y columnas `col-sm-12 col-md-6`, `col-md-4`.
- **Formulario**: `form-control`, `form-label`, `mb-3` (Nombre, Email, Mensaje).
- **Botones**: `btn btn-primary` (Enviar) y `btn btn-secondary` (Limpiar) dentro de `d-grid gap-2`.

## Transformaciones 2D con `transition` (sección Proyectos)

| Caja | Transformación en `:hover` |
|------|----------------------------|
| Barranco a pie | `rotate(-6deg)` |
| Mercado de Surquillo | `scale(1.08)` |
| Rímac, ruta de tranvías | `translateY(-14px) skewX(-6deg)` |

Todas usan `transition: transform 0.4s ease-in-out` para que el cambio sea suave.

## Transformación 3D (tarjeta del inicio)

- Contenedor `.escena-3d` con `perspective: 1000px`.
- Tarjeta `.tarjeta-3d` con `transform-style: preserve-3d` y `rotateX(8deg) rotateY(-12deg)` en reposo.
- En `:hover` gira con `rotateX(0deg) rotateY(180deg)` y muestra el reverso (`backface-visibility: hidden`).

## Animaciones (`@keyframes`)

- **`deslizar-color`**: el texto "Próximo mapa: Pueblo Libre" se desliza, aparece y cambia de color.
  `animation-duration: 4s`, `animation-timing-function: ease-in-out`,
  `animation-iteration-count: infinite`, `animation-direction: alternate`.
- **`girar`**: spinner circular que gira sin parar, usado en:
  - el loader de pantalla completa al abrir la página,
  - el botón "Cargar novedades".
  `animation-duration: 0.9s`, `animation-timing-function: linear`, `animation-iteration-count: infinite`.
- Se respeta `prefers-reduced-motion`.

## Responsividad

Sin desbordamiento horizontal; las columnas se apilan en móviles (`col-sm-12`) y se reparten en escritorio (`col-md-*`).

## Cómo ejecutarlo

Abre `index.html` en el navegador (requiere internet para cargar el CDN de Bootstrap).
