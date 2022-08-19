import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TaskForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [task, updateTask] = useState({
        taskName: "",
        dueDate: "",
        completed: false
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        const taskToSendToAPI = {
            userId: nutshellUserObject.id,
            taskName: task.taskName,
            dueDate: task.dueDate,
            completed: false
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="task_name">Task Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Task"
                        value={task.taskName}
                        onChange={
                            (evt) => {
                                const copy = { ...task }
                                copy.taskName = evt.target.value
                                updateTask(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="due_date">Date Expected To Be Completed:</label>
                    <input
                        type="task"
                        className="form-control"
                        placeholder="Enter Date"
                        value={task.dueDate}
                        onChange={
                            (evt) => {
                                const copy = { ...task }
                                copy.dueDate = evt.target.value
                                updateTask(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Task
            </button>
        </form>
    )
}