import { useState } from 'react';

const InputEmail = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm(email);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log('Form submitted successfully!');
      console.log(email);
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  }

  const validateForm = (email) => {
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Please provide an email';
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please provide a valid email';
    }

    return errors;
};

  return (
    <form onSubmit={submitForm} noValidate className = 'mx-auto lg:mx-64 relative lg:w-3/4'>
        <input type = 'email' name = "email" value = {email} onChange={(e) => setEmail(e.target.value)} placeholder = 'Email Address' className = {`border border-r-0 placeholder-desRed placeholder-opacity-50 ${errors.email ? 'border-softRed' : 'border-desRed'} rounded-l-full text-darkGrayRed px-6 py-3 lg:w-1/2 lg:py-5 inline focus:outline-none`}></input>
        <button type = 'submit' className = 'px-7 lg:px-12 py-[0.85rem] lg:py-[1.4rem] inline rounded-full bg-gradient-to-br from-grad2Start to-grad2End bg-blend-color-burn hover:bg-grad1End hover:bg-opacity-50 shadow-defBtn hover:shadow-hvrBtn ease-linear duration-75 -translate-x-[33%]'><i className = 'iconArrow align-middle'></i></button>
        {errors.email && (
          <>
            <span className='text-softRed text-xs mt-2 pl-6 block'>
              {errors.email}
              <i className = 'iconError absolute top-[18%] right-[31%] lg:top-[8%] lg:right-[56%]'></i>
            </span>
          </>
          )
        }
    </form>
  )
}

export default InputEmail