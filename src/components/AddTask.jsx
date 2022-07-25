import React, { useState } from "react";

import './AddTask.css'
import Button from "./Button";


const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('') //adicionar e guardar inf do input usando o STATE/ONCHANGE sera execultada sempre que for adicionado inf ao input/ TUDO O QUE O USUARIO DIGITAR VAI ESTÁ NO INPUT InputData

    const handleInputChange = (e) => { 
        setInputData(e.target.value) //target.value são componentes do e
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData(''); //limpa o input 
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>

        </div>
     );
};

export default AddTask;