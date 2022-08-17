// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// export const TaskForm = () => {
//     /*
//         TODO: Add the correct default properties to the
//         initial state object
//     */
//     const [task, update] = useState({

//     })
//     /*
//         TODO: Use the useNavigation() hook so you can redirect
//         the user to the ticket list
//     */

//     const localNutshellUser = localStorage.getItem("nutshell_user")
//     const nutshellUserObject = JSON.parse(localNutshellUser)

//     const handleSaveButtonClick = (event) => {
//         event.preventDefault()

//         // TODO: Create the object to be saved to the API


//         // TODO: Perform the fetch() to POST the object to the API
//     }

//     return (
//         <form className="taskForm">
//             <h2 className="taskForm__title">New Task</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="task_name">Task Name</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         placeholder="Task name"
//                         value={task.taskName}
//                         onChange={} />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Date Expected To Be Completed:</label>
//                     <input type="checkbox"
//                         value={task.dueDate}
//                         onChange={} />
//                 </div>
//             </fieldset>
//             <button className="btn btn-primary">
//                 Submit Task
//             </button>
//         </form>
//     )
// }