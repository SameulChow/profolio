'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import useScrollPosition from '../hooks/useScrollPosition';

export default function Nav() {
  const { isScrolling } = useScrollPosition();
  return (
    <nav className={isScrolling ? 'navBar scrolling' : 'navBar'}>
      <Box
        component='nav'
        display={'flex'}
        justifyContent={'right'}
        borderBottom={'1px solid #fff'}
      >
        <Link
          href='#'
          underline='none'
          className='navLink'
          color={isScrolling ? '#506690' : '#fff'}
        >
          About Me
        </Link>
        <Link
          href='#'
          underline='none'
          className='navLink'
          color={isScrolling ? '#506690' : '#fff'}
        >
          Education
        </Link>
        <Link
          href='#'
          underline='none'
          className='navLink'
          color={isScrolling ? '#506690' : '#fff'}
        >
          Experiences
        </Link>
      </Box>
    </nav>
  );
}
