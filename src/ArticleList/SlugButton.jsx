import React from 'react';
import PropTypes from 'prop-types'
import './SlugButton.module.css'

const SlugButton = props => (

        <button onClick={() => alert(props.article.slug)}>{props.article.author}
        </button>
            
);


SlugButton.propTypes = {
    articles: PropTypes.object.isRequired
};
export default SlugButton;