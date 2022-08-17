import { Outlet, Route, Routes } from "react-router-dom"
import { EventList } from "../events/EventList"
import { EventForm } from "../events/EventForm"

export const ApplicationViews = () => {

    return <Routes>
                <Route path="/" element={
                    <>
                        <h1>Nutshell</h1>

                        <section className="mainContainer">
                            {/* <ArticleList />
                            <TaskList />
                            <Chat /> */}
                            <EventList />
                        </section>

                        <Outlet />
                    </>
                }/>
                <Route path="event/create" element={ <EventForm /> } />  
            </Routes>
        
}