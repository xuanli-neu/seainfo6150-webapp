import React from "react";
import PropTypes from 'prop-types'
import SlugButton from './SlugButton.jsx'
import './ArticleListItem.module.css'

const ArticleListItem = props =>{
	return (
		<div>
     	<li key={props.article.slug}>
		    <strong>{props.article.title}</strong>
        <p>{props.article.shortText}</p>
        <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
        <SlugButton article = {props.article}/>                                        
        </li>
        </div> 
    );

};


ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleListItem;