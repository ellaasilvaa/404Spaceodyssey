# 🚀 404s to Mars - Página de Error 404 con Estética Noventera

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Una experiencia inmersiva de error 404 inspirada en la estética retro-futurista de los años 90, con temática espacial reminiscente de películas clásicas de ciencia ficción.

## 🎨 Características Principales

### Estética Visual
- **Tema Retro-Futurista**: Inspirado en la estética de los 90s con colores neón vibrantes
- **Efectos CRT**: Simulación de monitores antiguos con scanlines y parpadeo
- **Paleta de Colores Neón**: Cyan, magenta, verde fosforescente y púrpura
- **Campo de Estrellas Animado**: Múltiples capas de estrellas en movimiento

### Efectos Interactivos
- **Texto con Efecto Glitch**: El número "404" cuenta con animación de distorsión digital
- **Terminal Retro**: Interfaz estilo MS-DOS/terminal de los 90
- **ASCII Art**: Nave espacial en arte ASCII animado
- **Elementos Flotantes Arrastrables**: Astronauta y satélite que puedes mover
- **Efectos de Typing**: Texto que simula ser escrito en tiempo real

### Funcionalidades JavaScript
- **Reloj en Tiempo Real**: Muestra la hora actual en formato 24h
- **Navegación Interactiva**: Botones con efectos de brillo y hover
- **Sistema de Partículas**: Partículas aleatorias que aparecen ocasionalmente
- **Easter Egg - Código Konami**: ↑↑↓↓←→←→BA activa un modo secreto
- **Atajos de Teclado**:
  - `H` - Regresar al inicio
  - `R` - Coordenadas aleatorias
  - `ESC` - Mostrar ayuda
- **Elementos Arrastrables**: Puedes mover el astronauta y el satélite

### Diseño Responsive
- Totalmente adaptable a dispositivos móviles
- Optimizado para tablets y pantallas grandes
- Breakpoints bien definidos para todas las resoluciones

## 📁 Estructura del Proyecto

```
404-to-mars/
├── 404.html              # Página principal de error
├── css/
│   └── styles.css        # Estilos con efectos retro y animaciones
├── js/
│   └── script.js         # Interactividad y efectos JavaScript
├── README.md             # Documentación del proyecto
└── LICENSE               # Licencia MIT
```

## 🚀 Instalación y Uso

### Opción 1: Uso Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/404-to-mars.git
cd 404-to-mars
```

2. **Abrir en el navegador**
```bash
# Simplemente abre el archivo 404.html en tu navegador
open 404.html  # macOS
start 404.html # Windows
xdg-open 404.html # Linux
```

### Opción 2: Servidor Local

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (requiere npx)
npx http-server

# Luego visita: http://localhost:8000/404.html
```

### Opción 3: GitHub Pages

1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main y carpeta root
4. Tu página estará en: `https://tu-usuario.github.io/404-to-mars/404.html`

## 🎮 Funcionalidades Interactivas

### Código Konami (Easter Egg)
Presiona la siguiente secuencia en tu teclado:
```
↑ ↑ ↓ ↓ ← → ← → B A
```
Esto activará un modo secreto con colores invertidos y animación especial.

### Atajos de Teclado
- **H**: Navegar al inicio
- **R**: Generar coordenadas aleatorias
- **ESC**: Mostrar ayuda en consola

### Elementos Arrastrables
Puedes hacer clic y arrastrar:
- 🧑‍🚀 El astronauta
- 🛸 El satélite

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --neon-pink: #ff00ff;      /* Color principal rosa neón */
    --neon-cyan: #00ffff;      /* Color cyan neón */
    --neon-green: #39ff14;     /* Verde terminal */
    --neon-purple: #bf00ff;    /* Púrpura neón */
    --deep-space: #0a0a1a;     /* Fondo espacio profundo */
}
```

### Modificar Texto
Edita directamente en `404.html`:

```html
<div class="error-message">
    <p class="typing-text">Tu mensaje personalizado aquí</p>
</div>
```

### Ajustar Animaciones
Modifica las duraciones en `css/styles.css`:

```css
@keyframes glitch-1 {
    /* Cambia la velocidad del efecto glitch */
}
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Animaciones y transiciones
  - Gradientes y efectos de neón
  - Flexbox para layout responsive
  - Variables CSS para tematización
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - Event listeners
  - Animaciones dinámicas
  - Local storage (opcional)

## 📊 Criterios del Hackathon

Este proyecto fue diseñado considerando los siguientes criterios de evaluación:

| Criterio | Peso | Implementación |
|----------|------|----------------|
| **Innovación** | 30% | ✅ Easter eggs, código Konami, elementos arrastrables |
| **Calidad de Diseño** | 40% | ✅ Estética retro cohesiva, UI/UX pulida, responsive |
| **Calidad de Código** | 30% | ✅ Código limpio, comentado, estructura modular |

## 🌟 Características Destacadas

### Innovación
- ✨ Efecto CRT auténtico de los 90s
- 🎮 Easter egg con código Konami
- 🖱️ Elementos interactivos arrastrables
- ⌨️ Atajos de teclado intuitivos
- 💫 Sistema de partículas dinámico

### Diseño
- 🎨 Paleta de colores neón coherente
- 📱 100% responsive
- ✏️ Tipografía monoespaciada retro
- 🌌 Fondo de estrellas en múltiples capas
- 💡 Efectos de brillo y sombras neón

### Código
- 📝 Comentarios descriptivos
- 🏗️ Estructura modular y clara
- ♻️ Código reutilizable
- ⚡ Optimizado para rendimiento
- 🔧 Fácil de personalizar

## 📝 Mejoras Futuras

- [ ] Agregar sonidos retro (opcional con toggle)
- [ ] Modo oscuro/claro alternativo
- [ ] Más easter eggs ocultos
- [ ] Integración con Web Audio API
- [ ] Efectos de partículas más complejos
- [ ] Animaciones 3D con CSS
- [ ] PWA (Progressive Web App)
- [ ] Soporte para múltiples idiomas

## 🐛 Problemas Conocidos

Ninguno actualmente. Si encuentras algún bug, por favor abre un issue en GitHub.

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **[Tu Nombre]** - Desarrollo Full Stack
- **[Nombre del Compañero]** - Diseño UI/UX
- **[Nombre del Compañero]** - JavaScript/Interactividad

## 🙏 Agradecimientos

- Inspirado en la estética de películas como 2001: A Space Odyssey
- Colores neón inspirados en Synthwave y Vaporwave
- Efectos CRT basados en monitores CRT reales de los 90s
- Comunidad de desarrolladores por recursos y tutoriales

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarnos:

- Email: tu-email@ejemplo.com
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

<div align="center">

**Hecho con 💜 para el Hackathon 404s to Mars**

[⬆ Volver arriba](#-404s-to-mars---página-de-error-404-con-estética-noventera)

</div>
