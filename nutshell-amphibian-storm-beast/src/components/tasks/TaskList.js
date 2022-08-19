import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Tasks.css"


export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    const getAllTasks = () => {
        fetch('http://localhost:8088/tasks')
            .then(response => response.json())
            .then((taskArray) => {
                setTasks(taskArray)
            })
    }

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

    const markTaskComplete = (task) => {
        fetch(`http://localhost:8088/tasks/${task}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: true
            }),
        })
            .then(response => response.json())
            .then(() => {
                getAllTasks()
            })

    }

    return <>

        <button onClick={() => navigate("task/create")}>New Task</button>

        <article className="tasks">
            {
                tasks.filter(task => task.completed === false).map(
                    (task) => {
                        return <section className="task">
                            <header>{task.taskName}<br></br>
                                Estimated Completion Date: {task.dueDate}</header>
                            <label htmlFor="name">Completed:</label>
                            <input onChange={() => markTaskComplete(task.id)} type="checkbox" checked={task.completed}></input>
                        </section>
                    }
                )
            }
        </article>
    </>

}
