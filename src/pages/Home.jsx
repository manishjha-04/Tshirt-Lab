import {motion,AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation


} from '../config/motion';



const Home = () => {
  const snap =  useSnapshot(state);
  return (
    <div>
      <AnimatePresence>
        {
          snap.intro &&(
            //here below motion.div is being replaced by motion.section because it has semantic meaning and importance
            <motion.section className="home"{...slideAnimation('left')}>
               <motion.header {...slideAnimation("down")}>
                <img 
                  src ='./threejs.png'
                  alt = "logo"
                  className='w-8 h-8 object-contain'
                />
               </motion.header>
               <motion.div className='home-content' {...headContainerAnimation}>
               <motion.div {...headTextAnimation}>
               <h1 className='head-text'>
                LET'S <br className="xl:block hidden"/> DO IT.
               </h1>

               </motion.div>
               <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                <p className='max-w-md font-normal text-gray-600 text-base'>
                  Create your own custom t-shirt design 
                  with our brand-new 3D Ai-based customization tool. <strong>
                    Unleash your imagination
                  </strong> and define your own custom styles.
                </p>

                <CustomButton 
                  type = "filled"
                  title = "Customize It"
                  handleClick={()=> state.intro = false}
                  customStyles = 'w-fit px-4 py-2.5 font-bold text-sm'
                />
               </motion.div>

               </motion.div>
            </motion.section>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default Home
