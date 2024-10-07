import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './styles/article.css';

const Article = (props) => {
   const { title, description, date, link } = props;

   return (
      <React.Fragment>
         <div className='homepage-article bg-stone-900'>
            <div className='homepage-article-content hover:bg-slate-700'>
               <Link to={link}>
                  <div className='homepage-article-date text-stone-50'>|&nbsp;&nbsp;&nbsp;{date}</div>
                  <div className='homepage-article-title text-white'>{title}</div>
                  <div className='homepage-article-description text-white'>{description}</div>
                  <div className='homepage-article-link text-green-400'>
                     Read article{' '}
                     <FontAwesomeIcon
                        style={{ fontSize: '10px' }}
                        icon={faChevronRight}
                     />
                  </div>
               </Link>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Article;
