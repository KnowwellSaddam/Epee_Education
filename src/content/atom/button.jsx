import React from 'react'

const Button = ({children,variant}) => {

  if(variant=="primary"){
    return <button
     className='text-green-500 border-white bg-white text-xl border-2 py-3 px-6 mr-5 inlie-block rounded-md'>
        {children}
        </button>
  }
  else if(variant=="secondary"){
    return <button
     className='bg-green-500 text-xl text-white border-green-500 border-2 py-3 px-6 mr-5 inlie-block rounded-md'>
        {children}</button>
  }

  else{
    return <button className='text-white text-xl hover:bg-green-700 hover:border-green-700 border-2 py-3 px-6 mr-5 inlie-block rounded'>{children}
    </button>
  }


}

export default Button