import React, { useState } from "react";

export const TodoList=()=>{
    const [task, setTask]=useState("");
    const [list, setList]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setList([...list, {label:task, id:0}]);
        setTask("");
    }
    const handleDeleteTask=(index)=>{
        let aux=list.filter((el,i)=>i!=index)
        setList(aux);
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
            <input type="text" className="form-control fs-4" placeholder="Escribe una tarea..." value={task} onChange={e=>setTask(e.target.value)}/>
            <input type="submit" hidden/>
            </form>
            <ul className="list-unstyled">
                {list.length===0?(<li className="fs-4 text-muted">No hay tareas, ¿Deseas añadir una?</li>):(list.map((el,index)=> <li className="d-flex justify-content-between fs-4 todo-item" key={index}>{el.label}<span className="delete-btn" onClick={e=>handleDeleteTask(index)}><i className="fa-solid fa-delete-left"></i></span></li>))}
            </ul>
        </div>
    )
}