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

    const saveButtonClick = (clickEvent) => {
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
            navigate("/articles")
        })
    }
}