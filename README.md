# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### starting

### 1. `npx create-react-app name-app`

### 2. `cd name-app`

### 3. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Instalar o SERVE 
npm install -g serve
serve -s build

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### information React

Todo o HTML da página será inserida no id="root" da ./public/index.html através do arquivo ./src/index.js que renderiza o app através do root


Os códigos JS são colocados dentro de {} nos componentes
    EX: ...const message = "Hollo world!"
            return <h1>{message}</h1>

STATE => o State é uma variável onde se guarda um valor, que quando alterado e atualizado os componentes são renderizados, diferentemente de uma variável normal.

    EX: NÃO RENDERIZA AO SER ATUALIZADO...
  const App = () => {
  let message = "Hello world!";

  return (
    <>
      <div className='container'>{message}</div>;
      <button onClick={ () => (message = 'Hi')}>
        Mudar Mendagem
      </button>
    </>
  )
};


    EX: RENDERIZA AO SER ATUALIZADO...
    const App = () => {
  const [message, setMessage] = useState('Hello World')

  return (
    <>
      <div className='container'>{message}</div>;
      <button onClick={ () => setMessage('Hi')}>
        Mudar Mendagem
      </button>
    </>
  )
};

export default App; 

-----
### PROPs
São dados passados de um componente pai para um componente filho. 

O componente filho é renderizado pelo componente pai

As PROPS, assim como o STATE, atualizam e renderizam o elemento quando alterados


**setTasks** vai adicionar uma tarefa ao STATE quando clicar no botão adicionar

### informations CSS

### Overflow  
cria uma barra de rolagem quando o conteúdo ficar grande demais em um container de tamanho determinado.


# BIBLIOTECAS E APIs

## uuid - para gerar ID aleatórios
npm install uuid

### Create uuii
import { v4 as uuidv4 } from 'uuid';
uuidv4();

## React Icons - para popular icones no React
npm install react-icons --save 

** ver na documentação
https://react-icons.github.io/react-icons/


## React Router Dom - simula um sistema de páginas 
npm add react-router-dom (versão desatualizada)

*******
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

### AXIOS
npm install axios 

### API
https://jsonplaceholder.cypress.io/todos?_limit=10
