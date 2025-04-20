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
            <ul>
                {list.map((el,index)=> <li className="d-flex justify-content-between fs-4" key={index}>{el.label}<span onClick={e=>handleDeleteTask(index)}><i class="fa-solid fa-delete-left"></i></span></li>)}
            </ul>
        </div>
    )
}