import React from 'react'
import './App.css'
import { useForm } from "react-hook-form";

const App = () => {

  const { 
      register, 
      handleSubmit, 
      watch, 
      formState: { errors } 
    } = useForm();

    function onSubmit(data) {
      console.log(data);
      alert(`First Name: ${data.FirstName}, Middle Name: ${data.MiddleName}, Last Name: ${data.LastName}`);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name : </label>
        <input type="text" {...register("FirstName", { required: true, maxLength: 20, minLength: 5, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.FirstName ? "true" : "false"}  />
        {errors.FirstName?.type === 'required' && <p className='error-msg' role="alert">First name is required</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">Middle Name : </label>
        <input type="text" {...register("MiddleName", { required: true, maxLength: 20, minLength: 5, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.MiddleName ? "true" : "false"} />
        {errors.MiddleName?.type === 'required' && <p className='error-msg' role="alert">Middle name is required</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">Last Name : </label>
        <input type="text" {...register("LastName", { required: true, maxLength: 20, minLength: 5, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.LastName ? "true" : "false"} />
         {errors.LastName?.type === 'required' && <p className='error-msg' role="alert">Last name is required</p>}
      </div>
      <br />
      <input type="submit" />
    </form>
  )
}

export default App
