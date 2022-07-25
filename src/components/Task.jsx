import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'; //Biblioteca
import { useHistory } from 'react-router-dom'; //leva para a tela de informações

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory(); //leva para a tela de informações

    const handleTaskDetailsClick = () => {//leva para a tela de informações e muda o nome da URL
        history.push(`/${task.title}`)
    }

    return (
        <div //Criar marcação esquerda da task que será acionado pela função onClick={() => handleTaskClick(task.id)
            className='task-container'
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
        > 
        <div className='task-title' onClick={() => handleTaskClick(task.id)}>
            {task.title} 
        </div> 

        <div>
            <button 
                className='info-task-button' onClick={handleTaskDetailsClick}
                >
                <CgInfo /> 
            </button>
            <button 
                className='remove-task-button'
                onClick={() => handleTaskDeletion(task.id)} >
                <CgClose /> 
            </button>
        </div>
        </div>//{task.title} coloca o texto dentro da task        
    );
    //return <div className='task-container'>{task.title}</div> //renderiza o Texto dentro da Task.css
};

export default Task;