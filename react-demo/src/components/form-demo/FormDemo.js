import React from 'react'
import './FormDemo.css'
import {useForm} from 'react-hook-form' //returns as object

function FormDemo() {

        let {register,handleSubmit} = useForm() //both register and handleSubmit are functions


function onFormSubmit(userObj){
    console.log(userObj)
}


  return (
    <div>
        <p className='display-1 test test-info text-center'>Form Demo</p>
        {/* user signup form*/}
        <form className='w-50 mx-auto text-info text-center' onSubmit={handleSubmit(onFormSubmit)}>
            {/*username*/}
            <div className='mb-3'>
                <label htmlFor='' className='form-label'>Username</label>
                <input type='text' id='username' className='form-control' {...register('username')}></input>
            </div>
            {/*email*/}
            <div className='mb-3'>
                <label htmlFor='' className='form-label'>Email</label>
                <input type='email'  id='email' className='form-control' {...register('email')}></input>
            </div>
            <button type='submit' className='btn btn-success'>SignUp</button>
        </form>
    </div>
  )
}

export default FormDemo