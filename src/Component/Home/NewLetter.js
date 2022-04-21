import React from 'react'

const NewLetter = () => {
  return (
    <section className='my-20 flex mt-40'>
        <div className='w-1/2 p-20 text-white text-right pl-20 bg-green-500'>
            <h2 className='text-4xl font-bold pl-40 text-left'>Keep Connection,<br></br>
             Subscribe Now!</h2>
        </div>
        <div className='w-full p-20 pl-20 bg-green-50'>
            <h2 className='text-xl font-bold mb-3'>Enter Your Email Address</h2>
            <form action="" className='flex'>
                <input className='w-1/2 p-5 rounded-lg mr-6 shadow-xl' type="text" placeholder='Email Address..' />
                <button className='p-2 w-40 text-lg shadow-xl bg-green-500 px-10 text-white rounded-lg'>Send</button>
            </form>
        </div>
    </section>
  )
}

export default NewLetter;