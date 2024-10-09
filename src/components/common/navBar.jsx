import React from 'react';
import { FloatingNav } from '../ui/floating-navbar';

import './styles/navBar.css';
import { IconFileText, IconFolder, IconHome, IconInfoSquareRounded, IconMail } from '@tabler/icons-react';

const NavBar = (props) => {
   //    const { active } = props;

   const navItems = [
      {
         name: 'Home',
         link: '/',
         icon: <IconHome />,
      },
      {
         name: 'About',
         link: '/about',
         icon: <IconInfoSquareRounded />,
      },
      {
         name: 'Projects',
         link: '/projects',
         icon: <IconFolder />,
      },
      {
         name: 'Contact',
         link: '/contact',
         icon: <IconMail />,
      },
      {
         name: 'Articles',
         link: '/articles',
         icon: <IconFileText />,
      },
   ];

   return (
      <div className=''>
         <FloatingNav navItems={navItems} />
      </div>
   );
};

export default NavBar;
