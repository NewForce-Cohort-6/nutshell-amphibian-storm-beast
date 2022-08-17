import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const ArticleForm = () => {
    const [article, update] = useState({
        articleName: "",
        synopsis: "",
        URL: "",
        userId: 0
    })
    const navigate = useNavigate()
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const saveButtonClick = (event) => {
        event.preventDefault()
        const articleToSendToAPI = {
            userId: nutshellUserObject.id,
            articleName: article.articleName,
            synopsis: article.synopsis,
            URL: article.URL
        }
        return fetch(`http://localhost:8088/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleToSendToAPI)
        })
            .then(response => response.json())
            .then(()=> {
                navigate("/")
            })
    }
    return(
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="">
                <label htmlFor="synopsis">Article Name:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of article"
                    value={article.articleName}
                    onChange={
                        (evt)=> {
                            const copy = {...article}
                            copy.articleName = evt.target.value
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Brief description of article"
                    value={article.synopsis}
                    onChange={
                        (evt)=> {
                            const copy = {...article}
                            copy.synopsis = evt.target.value
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="URL">URL:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter URL"
                    value={article.URL}
                    onChange={
                        (evt)=> {
                            const copy = {...article}
                            copy.URL = evt.target.value
                            update(copy)
                        }
                    } />
                    </div>
            </fieldset>
            <button 
                onClick={(clickEvent)=> saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Article
            </button>
        </form>
    )
}