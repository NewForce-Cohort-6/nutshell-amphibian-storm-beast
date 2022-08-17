import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Tasks.css"


export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/tasks`)
                .then(response => response.json())
                .then((taskArray) => {
                    setTasks(taskArray)
                })
        },
        []
    )

    return <>
        <h2>Task List</h2>

        <button onClick={() => navigate("task/create")}>Add New Task</button>

        <article className="tasks">
            {
                tasks.map(
                    (task) => {
                        return <section className="task">
                            <header>{task.taskName}<br></br>
                                Estimated Completion Date: {task.dueDate}</header>
                            <label htmlFor="name">Completed:</label>
                            <input type="checkbox" value="checked"></input>
                        </section>
                    }
                )
            }
        </article>
    </>

}
