import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'


import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';





const Contact = () => {
  const formRef = useRef();
  const [ form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
   const { name, value } = e.target;

   setForm({ ...form, [name]:value })
  }
  
//
//
//

  const handlesubmit =(e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
     'service_uaokgcf',
     'template_itzuwnh',
     {
       from_name: form.name,
       to_name: 'Thimesh',
       from_email: form.email,
       to_email: 'thimeshdilshan70@.gmail.com',
       message: form.message

    },
    'T53kc1OkaQZiavWdh'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get to you as soon as possible.');

      setForm({
        name:'',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);
      alert('Somethong went wrong')
    
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hiden"
    >
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}
          >Get In touch</p>
          <h3 className={styles.sectionHeadText}
          >Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handlesubmit}
            className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="what's your name?"
                  className="bg-tertiary py-4 px-6
                  placeholer:text-secondary
                  text-white rounde-lg outline-none borer-none font-medium"
                 ></input>

              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="what's your email?"
                  className="bg-tertiary py-4 px-6
                  placeholer:text-secondary
                  text-white rounde-lg outline-none borer-none font-medium"
                 ></input>

              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your message</span>

                <textarea
                  type="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="what'o you want to say?"
                  className="bg-tertiary py-4 px-6
                  placeholer:text-secondary
                  text-white rounde-lg outline-none borer-none font-medium"
                 />

              </label>
              <button type="submit"
                className="bg-tertiary py-3 px-8
                outline-none w-fit text-white
                font-bold shadow-md shadow-primary
                rounded-xl">
                Send
              </button>

          </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
         
          <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")