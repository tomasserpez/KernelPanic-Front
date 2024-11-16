# SpaceTraders Frontend

Este es el frontend de nuestra aplicación de proyecto, https://github.com/tomasserpez/KernelPanic-Back <- Link del backend

## Requisitos
- Node v22^
- Typescript
- Vite
- Firebase

## Instalacion

1. Clona el repositorio:

Usando SSH
```bash
git clone git@github.com:tomasserpez/KernelPanic-Front.git
cd KernelPanic-Front
```

Usando HTTPS
```bash
git clone https://github.com/tomasserpez/KernelPanic-Front.git
cd KernelPanic-Front
```

2. Configuración de Firebase:

  - Dentro de la carpeta `src`, crea una nueva carpeta llamada `env`.
  - En la consola de Firebase, obtén la configuración del proyecto para la parte de autenticació
  - Crear un archivo en el directorio nuevo llamado `firebaseconfig.ts` y pega el contenido de configuración de firebase.
  Seguramente se vea algo así:
  ```typescript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "tu apikey",
  authDomain: "tu authDomain",
  projectId: "tu projectId",
  storageBucket: "tu storageBucket",
  messagingSenderId: "tu messagingSenderId",
  appId: "tu app id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

Para que nos funcione, tenemos que modificar la linea `const firebaseConfig` y agregarle un `export` delante de este, por lo que quedará `export const firebaseConfig`

3. Instalación de dependencias:
```bash
npm install
```
Esto se ejecuta dentro del directorio raiz del proyecto clonado.

4. Ejecutar la aplicación en modo desarrollador:
```bash
npm run dev
```

Esto iniciará el servidor de vite en modo desarrollador configurado con el puerto por defecto (5173).

## Uso
Accedemos a la aplicación desde el navegador en la dirección `http://localhost:5173`.

---

Muchas gracias por utilizar nuestro software.

