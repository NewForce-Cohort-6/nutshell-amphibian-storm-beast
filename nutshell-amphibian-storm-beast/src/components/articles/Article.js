import { useNavigate } from "react-router-dom";

export const Article = ({currentUser, getArticles, articleObject}) => {
    
    const navigate = useNavigate()
    const deleteButton = () => {
        return <button onClick={() => {
            fetch(`http://localhost:8088/articles/${articleObject.id}`, {
                    method: "DELETE"
                })
                .then(() => {
                    getArticles()
                })
        }} className="article__delete">Delete</button>
       
    }

    const editButton = () => {
        return <button onClick={() => {
            navigate(`article/${articleObject.id}/edit`)
         
        }}className = "article__edit">Edit</button>
    }

    return <section className ="article" key={`article--${articleObject.id}`}>
        <header>
            {
                currentUser.userId
                    ?`Article ${articleObject.id}`
                    : <a href={articleObject.URL} target="_blank" > {articleObject.articleName}</a>

            }
        </header>
        <section>{articleObject.synopsis}</section>
        <footer>
            {
            editButton()
            }
            {
            deleteButton()
            }
        </footer>
    </section>

}