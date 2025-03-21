# Template inicial de Chatbot de WhatsApp

## 📋 Descripción del Sistema

Este proyecto implementa un chatbot para WhatsApp utilizando la biblioteca `@builderbot/bot`. El sistema está estructurado como una aplicación Node.js con TypeScript que permite crear flujos de conversación interactivos.

### Estructura del Proyecto
- **src/**: Contiene todo el código fuente del chatbot
  - **app.ts**: Punto de entrada principal que inicializa el bot y el servidor HTTP
  - **config/**: Configuraciones del sistema (variables de entorno)
  - **provider/**: Implementación del proveedor de Meta para WhatsApp
  - **services/**: Servicios adicionales para el funcionamiento del bot
  - **templates/**: Definición de los flujos de conversación
  - **utils/**: Utilidades y funciones auxiliares
- **public/**: Recursos estáticos como imágenes y archivos multimedia

### Funcionalidades Principales
- **Flujo Principal**: Maneja eventos de bienvenida y redirige al menú principal
- **Menú Interactivo**: Presenta opciones al usuario mediante listas interactivas
- **Envío de Multimedia**: Capacidad para enviar imágenes, archivos PDF y notas de voz

### Tecnologías Utilizadas
- Node.js y TypeScript
- @builderbot/bot para la lógica del chatbot
- @builderbot/provider-meta para la integración con WhatsApp
- Sistema de base de datos en memoria para almacenamiento de sesiones