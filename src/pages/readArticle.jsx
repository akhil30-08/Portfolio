import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';

import INFO from '../data/user';
import myArticles from '../data/articles';

import './styles/readArticle.css';
import { IconArrowNarrowLeftDashed } from '@tabler/icons-react';

const ReadArticle = () => {
   const navigate = useNavigate();
   let { slug } = useParams();

   const article = myArticles[slug - 1];

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [article]);
   return (
      <React.Fragment>
         <Helmet>
            <title>{`${article().title} | ${INFO.main.title}`}</title>
            <meta
               name='description'
               content={article().description}
            />
            <meta
               name='keywords'
               content={article().keywords.join(', ')}
            />
         </Helmet>

         <div className='page-content'>
            <NavBar />

            <div className='content-wrapper'>
               <div className='read-article-container'>
                  <div className='read-article-back'>
                     <IconArrowNarrowLeftDashed
                        className='h-6 w-6 cursor-pointer sm:w-10 sm:h-10 text-cyan-500'
                        onClick={() => navigate(-1)}
                     />
                  </div>

                  <div className='read-article-wrapper'>
                     <div className='read-article-date-container'>
                        <div className='read-article-date'>{article().date}</div>
                     </div>

                     <div className='text-white text-xl font-bold sm:text-3xl '>{article().title}</div>

                     <div className='text-slate-400 mt-4 max-sm:text-sm'>{article().content}</div>
                  </div>
               </div>
               <div className='page-footer'>
                  <Footer />
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default ReadArticle;
