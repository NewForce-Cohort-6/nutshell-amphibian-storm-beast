import { Outlet, Route, Routes } from "react-router-dom"
import { TaskList } from "../tasks/TaskList.js"
import { TaskForm } from "../tasks/TaskForm.js"
import { ArticleEdit } from "../articles/ArticleEdit"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleList } from "../articles/ArticleList"


export const ApplicationViews = () => {

    return <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                <section className="mainContainer">
                    <div className="news">
                        <h2>News</h2>
                        <ArticleList />
                    </div>
                    <div className="tasks">
                        <h2>Tasks</h2>
                        <TaskList />
                    </div>
                    <div>
                        <h2>Events</h2>

                    </div>
                    <div>
                        <h2>Messages</h2>

                    </div>
                </section>


                <Outlet />
            </>
        } />
        <Route path="article/create" element={<ArticleForm />} />
        <Route path="task/create" element={<TaskForm />} />
        <Route path="article/:articleId/edit" element={<ArticleEdit />} />
    </Routes >
}