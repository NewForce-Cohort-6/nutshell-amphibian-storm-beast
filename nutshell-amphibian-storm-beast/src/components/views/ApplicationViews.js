import { Outlet, Route, Routes } from "react-router-dom"
// import { EventList } from "EventList.js"
// import { ArticleList } from "ArticleList.js"
// import { Chat } from "Chat.js"
import { TaskList } from "../tasks/TaskList.js"

export const ApplicationViews = () => {

    return <>
        <Routes>
            {<Route path="/" element={
                <>
                    <h1>Nutshell</h1>

                    {/* <section className="mainContainer">
                        <ArticleList />
                        <TaskList />
                        <Chat />
                        <EventList />
                    </section> */}


                    <Outlet />
                </>
            }>
                { <Route path="tasks" element={ <TaskList /> } /> }
            </Route>}
        </Routes>
    </>
}