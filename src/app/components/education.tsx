import Box from '@mui/material/Box';
import Image from 'next/image';

export default function Education() {
  return (
    <>
      <Box className='education'>
        <section className='education_intro'>
          <h3 className='education_intro_header'>EDUCATION</h3>
          <h2 className='education_intro_title'>
            The pursuit of true <span>Knowledge</span>.
          </h2>
          <p className='education_intro_description'>
            It's my honor to attend one of the best universities in the field of
            engineering. <br />
            It have turned mirrors into windows, limits into freedom.
          </p>
        </section>
      </Box>
      <Box>
        <section className='education_school'>
          <div className='education_school_left'>
            <div className='education_school_left_img'></div>
            <div className='education_school_left_border'>
              <svg
                viewBox='0 0 100 1544'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 386V0h100v1544H50v-386L0 386z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
          </div>
          <div className='education_school_right'>
            <label className='education_school_right_label'>
              UNDERGRADUATE
            </label>
            <div>
              <h3 className='education_school_right_title'>
                University of California, San Diego
              </h3>
              <p className='education_school_right_desc'>Bachelor of Science</p>
            </div>
            <div>
              <h3 className='education_school_right_title'>
                Major and Concentration
              </h3>
              <p className='education_school_right_desc'>
                Computer Science and Engineering
              </p>
            </div>
            <div>
              <h3 className='education_school_right_title'>
                Achievement and Honors
              </h3>
              <p className='education_school_right_desc'>
                GPA: 3.89 / 4.0, ranked top 10%,GPA: 3.89 / 4.0, ranked top 10%,
                <br />
                member of Tau Beta Pi.
              </p>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}
