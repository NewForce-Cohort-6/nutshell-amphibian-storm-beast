import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ArticleEdit = () => {
    const [article, assignArticle] = useState({
        articleName: "",
        synopsis: "",
        URL: ""
    })

    const {articleId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/articles/${articleId}`)
            .then(response => response.json())
            .then((data) => {
                assignArticle(data)
            })
    }, [articleId])

    const editButtonClick = (clickEvent) => {
        clickEvent.preventDefault()

        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/")
        })
    }
    return (
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
                            assignArticle(copy)
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
                            assignArticle(copy)
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
                            assignArticle(copy)
                        }
                    } />
                    </div>
            </fieldset>
            <button 
                onClick={(clickEvent)=> editButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edits
            </button>
        </form>
    )
}