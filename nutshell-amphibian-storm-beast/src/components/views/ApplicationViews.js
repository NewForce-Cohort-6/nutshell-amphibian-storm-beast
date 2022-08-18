import { Outlet, Route, Routes } from "react-router-dom"
<<<<<<< HEAD
import { ChatList } from "../chat/ChatList"
=======
import { ArticleEdit } from "../articles/ArticleEdit"
>>>>>>> 00f9e0e94525917c96fb3f2022ee088600fb5476
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleList } from "../articles/ArticleList"


export const ApplicationViews = () => {

    return <Routes>
                <Route path="/" element={
                    <>
<<<<<<< HEAD
                        <h1>Nutshell</h1>

=======
                        <h1 className="mainTitle">Nutshell</h1>
>>>>>>> 00f9e0e94525917c96fb3f2022ee088600fb5476
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
                <Route path = "article/:articleId/edit" element= {<ArticleEdit />} />
                 
                
               
    </Routes>
        

}