import React from "react";      
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();//volta para a tela principal

    const handleTaskButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleTaskButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus unde, reprehenderit, fugit sed quas voluptates molestias veniam obcaecati veritatis omnis itaque dignissimos fugiat quia nobis expedita exercitationem officia at.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;