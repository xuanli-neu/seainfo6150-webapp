import React from 'react';
import PropTypes from 'prop-types'
import './ArticleImage.module.css'

const ArticleImage = props => (
    <div class="image">
        <img src={props.article.image._url} alt={props.article.title} width="200" height="100" />
    </div>
        
        );

ArticleImage.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleImage;