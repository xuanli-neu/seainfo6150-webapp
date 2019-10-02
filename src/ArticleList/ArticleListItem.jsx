import React from "react";

const ArticleListItem = props =>{
	return (
		<div>
     	<li key={props.article.slug}>
		    <strong>{props.article.title}</strong>
        <p>{props.article.shortText}</p>
        <p><time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
        <button onClick = {() => alert(props.article.slug)}>
                          {"show article slug"}</button></p>                                         
        </li>
        </div> 
    );

};



export default ArticleListItem;