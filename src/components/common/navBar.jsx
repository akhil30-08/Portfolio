import React from 'react';
import { FloatingNav } from '../ui/floating-navbar';

import './styles/navBar.css';

const NavBar = (props) => {
   //    const { active } = props;

   const navItems = [
      {
         name: 'Home',
         link: '/',
      },
      {
         name: 'About',
         link: '/about',
      },
      {
         name: 'Projects',
         link: '/projects',
      },
      {
         name: 'Contact',
         link: '/contact',
      },
      {
         name: 'Articles',
         link: '/articles',
      },
   ];

   return (
      <div className=''>
         <FloatingNav navItems={navItems} />
      </div>
   );
};

export default NavBar;
