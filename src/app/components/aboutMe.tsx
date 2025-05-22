import Box from '@mui/material/Box';
import Image from 'next/image';
import * as React from 'react';
import desktopImg from '../../../public/originals-desktop.webp';
import cambridgeImg from '../../../public/originals-cambridge.webp';
import carImg from '../../../public/originals-car.webp';
import flightImg from '../../../public/originals-flight.webp';
import friendsImg from '../../../public/originals-friends.webp';

export default function AboutMe() {
  return (
    <>
      <Box className='aboutMe'>
        <section className='aboutMe_container'>
          <h3 className='aboutMe_header'>ABOUT ME</h3>
          <h2 className='aboutMe_title'>
            The pursuit of true <span>self</span>.
          </h2>
          <p className='aboutMe_description'>
            Once I had wished I could find "the one" calling or "the true"
            passion, but I failed devastatingly. My exploration only pushes me
            further down the uncertainty. Yet even worse, I genuinely enjoy it.
          </p>
        </section>
      </Box>
      <Box className='intro'>
        <section className='intro_left'>
          <h3 className='intro_left_title'>SOFTWARE ENGINEER</h3>
          <h2 className='intro_left_keyword'>
            I apply computer science to
            <br />
            <span style={{ color: '#6c8aec' }}>solve real-world problems.</span>
          </h2>
          <p>
            Computer science empowers me to turn my ideas into a positive
            impact. <br />
            As a full-stack web developer, I collaborated Whova to build an
            All-In-One Event Management Software.
            <br />
            Computer science empowers me to turn my ideas into a positive
            impact. As a full-stack web developer, I collaborated Whova to build
            an All-In-One Event Management Software.
          </p>
        </section>
        <section className='intro_right'>
          <Image src={desktopImg} alt='desktop image' />
        </section>
      </Box>
      <Box className='explorer'>
        <section className='explorer_left'>
          <div className='explorer_left_p1'>
            <Image src={cambridgeImg} alt='cambridge image' />
            <Image src={friendsImg} alt='friends image' />
          </div>
          <div className='explorer_left_p2'>
            <Image src={carImg} alt='cars image' />
            <Image src={flightImg} alt='flight image' />
          </div>
        </section>
        <section className='explorer_right'>
          <h3 className='explorer_right_title'>EXPLORER</h3>
          <h2 className='explorer_right_keyword'>
            I enjoy exploring
            <br />
            <span style={{ color: '#42ba96' }}>the boundless world.</span>
          </h2>
          <p className='explorer_right_content'>
            I have traveled to 5 different countries, almost 30 different cities
            across three continents. <br />
            I have practiced swimming and played table tennis for over ten
            years. <br />
            I have learned Chinese calligraphy and played chess since childhood.
            <br />
            Cars, entrepreneurship, photography, skydiving, philosophy...my
            tried and to-try list is always expanding.
          </p>
        </section>
      </Box>
      <Box position={'relative'} margin={'100px 0px'} className='poem'>
        <div className='poem_wrapper_top'>
          <svg
            viewBox='0 0 2880 250'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 0h2880v125h-720L720 250H0V0z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        <div className='poem_content'>
          <div className='overlay'></div>
          <div className='poem_content_info'>
            <p>"竹杖芒鞋轻胜马，谁怕，一蓑烟雨任平生。"</p>
            <p>苏轼，《定风波》</p>
          </div>
        </div>
        <div className='poem_wrapper_bottom'>
          <svg
            viewBox='0 0 2880 250'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M720 125L2160 0h720v250H0V125h720z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
      </Box>
    </>
  );
}
