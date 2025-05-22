import Box from '@mui/material/Box';
import Image from 'next/image';
import workImg1 from '../../../public/work_experience_img1.png';
import workImg2 from '../../../public/whova.webp';

export default function Experience() {
  const techstakcs = ['GraphQL', 'React', 'Redux', 'Express.js'];

  return (
    <>
      <Box className='experience'>
        <section className='experience_intro'>
          <h3 className='experience_intro_header'>EXPERIENCES</h3>
          <h2 className='experience_intro_title'>
            The pursuit of positive <span>impact</span>.
          </h2>
          <p className='experience_intro_description'>
            I am privileged by the social lottery to have my knowledge,
            resource, and ability. <br />
            It is my responsibility to create and innovate for those who aren't.
          </p>
        </section>
      </Box>
      <Box className='work'>
        <section className='work_experience_1'>
          <div className='work_experience_left'>
            <label className='work_experience_title'>REACT DEVELOPER</label>
            <h2 className='work_experience_keyword'>
              Design and Develop an{' '}
              <span>Online Event Management Platform</span>.
            </h2>
            <p className='work_experience_content'>
              I'm passionate about relationship between the Event and human. The
              goal of this project is to reduce the barrier and inconvenience of
              holding the in-person, hybrid, in-person events. I have worked on
              the agenda feature with responsive design, designed and developed
              reusable components throughtout the entire project as well as
              optimized the Graphql Schema.
            </p>
            <ul className='techstack_list'>
              {techstakcs?.map((item) => (
                <li key={item}>
                  <div className='techstack_row'>
                    <span className='techstack_icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path d='M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z'></path>
                      </svg>
                    </span>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='work_experience_right'>
            <span className='work_experience_right_border_1'></span>
            <span className='work_experience_right_border_2'></span>
            <Image src={workImg2} alt='Centene Coporation Image' />
          </div>
        </section>
      </Box>
    </>
  );
}
