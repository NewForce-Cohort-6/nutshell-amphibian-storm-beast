import { Outlet, Route, Routes } from "react-router-dom"
// import { EventList } from "../event/EventList"
// import { ArticleList } from "../article/ArticleList"
import { Chat } from "../chat/Chat"
import { ChatList } from "../chat/ChatList"
//import { Chat } from "Chat.js"
//import { TaskList } from "../task/TaskList"

export const ApplicationViews = () => {

    return <>
            <Routes>
                {<Route path="/" element={
                    <>
                        <h1>Nutshell</h1>
                        

                        <section className="mainContainer">
                            {/* <ArticleList /> */}
                            {/* <TaskList /> */}
                            <ChatList />
                            {/* <EventList /> */}
                        </section>

                        <Outlet />
                    </>
                }>
                    {/* <Route path="locations" element={ <Locations /> } /> */}          
                </Route>}
            </Routes>
        </>
}