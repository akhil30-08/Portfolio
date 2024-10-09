import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './style/article.css';

const Article = (props) => {
   const { date, title, description, link } = props;

   return (
      <React.Fragment>
         <div className='article'>
            <div className='article-left-side'>
               <div className='text-xs sm:text-base'>{date}</div>
            </div>

            <Link to={link}>
               <div className='article-right-side'>
                  <div className=' text-white sm:text-3xl mb-2'>{title}</div>
                  <div className='text-slate-400 text-xs sm:text-base left-2 max-sm:line-clamp-6'>{description}</div>
                  <div className='article-link'>
                     Read Article{' '}
                     <FontAwesomeIcon
                        style={{ fontSize: '10px' }}
                        icon={faChevronRight}
                     />
                  </div>
               </div>
            </Link>
         </div>
      </React.Fragment>
   );
};

export default Article;
