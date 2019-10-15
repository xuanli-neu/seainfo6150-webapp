import React from "react";
import PropTypes from 'prop-types'
import SlugButton from './SlugButton.jsx'
import ArticleImage from './ArticleImage.jsx'
import './ArticleListItem.module.css'

const ArticleListItem = props =>{
	return (
		<div>
     	<ArticleImage article = {props.article}/>
		<strong><b>{props.article.title}</b></strong>
        <p>{props.article.shortText}</p>
        <b><time dateTime = {props.article.pubYear}>{props.article.pubDate}</time></b>
        <SlugButton article = {props.article}/>                                        
        </div> 
    );

};


ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleListItem;