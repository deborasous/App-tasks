import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';


const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);


  //-----API------
  useEffect(() => {//Será execultado sempre que a task for alterada//O useEffect não pode ser assincrono, para isso criar uma função assincrona dentro do useEffect e coloca a API dentro e chama a função async em baixo
    const fetchTasks = async () => {//dentro do const response tem um arquivo data com as informações de id, title e completed necessarias. Excluir o const response e colocar o const {data}. Para colocar as tarefas dentro das tasks, usar setTasks(data)
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
      setTasks(data);
    };

    fetchTasks();
  }, []);//fica observando as alterações da [task] passado como paramentro ou deixa a [] vazia para que para que a requisição HTTP seja execultada assim que a tela for carregada pela primeira vez

  //MUDANDO O COMPLET DAS TASKS
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed }
      
      return task;
    });

    setTasks(newTasks);
  }; //FUNCIONAMENTO: O App cria a função, que passa a função para o Tas


  //ADICIONAR O TEXTO ÀS TASKS
  const handleTaskAddition = (taskTitle) => {//altera somente os textos da task
    const newTasks = [  //a newTaskes é igual a tudo o que está em tasks + uma nova <Tasks tasks={tasks} handleTaskClick={handleTaskClick}, o Tasks recebe a função dentro do arquivo Tasks   const Tasks = ({ tasks, handleTaskClick }), que passa para o Task <Task task={task} handleTaskClick={handleTaskClick} />, que envia para a função do arquivo Task  const Task = ({ task, handleTaskClick })
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(), //biblioteca que cria ID aleatório
        complited: false,
      },
    ];

    setTasks(newTasks);
  };

  //BUTTON REMOVER
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId )

    setTasks(newTasks)
  }


  
  return (
    <Router>
      <div className='container'>
        <Header />
        <Route //CRIA PAGINAS
          path='/' //PEGA TODO ENDEREÇO COM A /
          exact  //FAZ UM FILTRO, TRAZENDO SOMENTE O PATH DESEJADO, NO CASO A PAGINA INICIAL
          render={() => (
            <>
              <AddTask 
                handleTaskAddition={handleTaskAddition} 
              />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />  
            </> 
          )}   
        />

        <Route 
          path='/:taskTitle'//pega path pelo parametro passado, no caso pela o titulo da task pelo taskTitle
          exact
          component={TaskDetails} /*só renderiza quando for para a path estabelecida. Usa o COMPONENT porque está sendo rendereizado o componente e não a função como no Route acima*/
        />
      </div>
    </Router>
  );
};

export default App; 