import Box from '@mui/material/Box';
import * as React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <Box
        className='header_content'
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <section className='header_intro'>
          <h1 className='header_title'>I'm Jinhao Zhou.</h1>
          <p className='header_description'>
            I'm a professionally trained software developer and an
            interdisciplinary explorer. I believe the power of computer science
            in solving challenges across disciplines.
          </p>
        </section>
      </Box>
    </header>
  );
}
