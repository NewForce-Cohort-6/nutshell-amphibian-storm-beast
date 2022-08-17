import { Outlet, Route, Routes } from "react-router-dom"
import { ChatList } from "../chat/ChatList"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleList } from "../articles/ArticleList"


export const ApplicationViews = () => {

    return <Routes>
                <Route path="/" element={
                    <>
                        <h1>Nutshell</h1>

                        <section className="mainContainer">
                            <div className ="news">
                                <h2>News</h2>
                                <ArticleList />
                            </div>
                            <div>
                                <h2>Tasks</h2>

                            </div>
                            <div>
                                <h2>Events</h2>

                            </div>
                            <div>
                                <h2>Messages</h2>
                                <ChatList />
                            </div>
                            
                
                        </section>


                        <Outlet />
                    </>
                }/>
                <Route path = "article/create" element={<ArticleForm />} />
                 
                
               
    </Routes>
        

}