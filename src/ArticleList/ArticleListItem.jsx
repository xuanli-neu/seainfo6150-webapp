import React from "react";

const ArticleListItem = props =>{
	return (
		<div>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Assignment 4</title>
            </head>
            <article>
     	<li key={props.article.slug}>
		<strong>{props.article.title}</strong>
        <p>{props.article.shortText}</p>
        <p><time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
        <button onClick = {() => alert(props.article.slug)}>
                          {"show article slug"}</button></p>                                         
        </li>
           </article>
          </html>
        </div> 
    );

};



export default ArticleListItem;