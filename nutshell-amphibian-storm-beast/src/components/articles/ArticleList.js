import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article } from "./Article";
import "./Articles.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [filteredArticles, setFiltered] = useState([])
    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const getArticles =() => {
        fetch(`http://localhost:8088/articles`)
            .then(response => response.json())
            .then((articleArray)=> {
                setArticles(articleArray)
            })
    }
    
    useEffect(
        () => {
        fetch(`http://localhost:8088/articles`)
            .then(response => response.json())
            .then((articleArray)=> {
                setArticles(articleArray)
            })
        },[]
    )

    useEffect(
        ()=> {
            const myArticles = articles.filter(article => article.userId === nutshellUserObject.id)
                setFiltered(myArticles)
        },
        [articles]
    )

    return <>
    {
        <button onClick={() => navigate("/article/create")}>New Article</button>
            

    }
    <article className="articles">
        {
            filteredArticles.map(
                (article) => <Article key={article.id}
                getArticles={getArticles}
                currentUser= {nutshellUserObject}
                articleObject = {article} />
            )
        }
    </article>
    </>
}