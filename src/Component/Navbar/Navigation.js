import React from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const Navigation =()=>{

    const [user , setUser] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    });

    const inputEvent =(e)=>{
        const {name , val } = e.target;
        setUser((preVlau)=>{
            console.log(name);

            return{
                ...preVlau,
                [name]: val,
            }
        })

    }

    let [isOpen, setIsOpen] = useState(false)

    const Nav = [
        {
            id:0,
            link:"/",
            nav:"Home"
        },{
            id:1,
            link:"/about",
            nav:"About us"
        },{
            id:2,
            link:"/price",
            nav:"Price"
        },{
            id:3,
            link:"/Bussiness",
            nav:"Bussiness"
        },{
            id:4,
            link:"/Search",
            nav:"Search"
        }
    ];

return(
    <>
       <div className="bg-green-500 absolute top-0 right-0 left-0">
       <div className="container mx-auto">
        <div className="flex flex-nowrap py-4 items-center">
            <div className="w-1/6">
               <Link to="/"><img src="images/site-logo.svg" alt="sitelogo" /></Link>
            </div>
            <div className="w-1/2">
                <ul className="flex">
                    {Nav.map((nav_items)=>{
                        return(
                        <li key={nav_items.id}><Link to={nav_items.link} className="px-4 text-white text-xl">{nav_items.nav}</Link></li>
                        )
                    })}
                    <li><Link to="/cart" className="px-4 text-white text-xl"><img src="images/cart.png" className="inline-block mr-3" alt="Cart img" /> Cart</Link></li>
                </ul>
            </div>
            <div className="w-1/2 text-right">
               <a className="text-white inline-block cursor-pointer p-2 text-xl" onClick={()=>setIsOpen(true)}>Log In</a>
               <a className="text-white inline-block cursor-pointer p-2 text-xl">Get Started</a>
            </div>
        </div>

         {isOpen ? (<>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={()=> setIsOpen(false)}  >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child  as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
              enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              <span className="inline-block h-screen align-middle" aria-hidden="true"> &#8203;</span>

              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >

                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-lg">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    SignUp
                  </Dialog.Title>

                  <div className="mt-2">
                    <form action="">
                        <input type="text" value={user.name} name="name" onChange={inputEvent} className="border p-2 px-4 w-full mb-3" placeholder="Name" />
                        <input type="email" value={user.email} name="email" onChange={inputEvent} className="border p-2 px-4 w-full mb-3" placeholder="Email Id." />
                        <input type="text" value={user.phone} name="phone" onChange={inputEvent} className="border p-2 px-4 w-full mb-3" placeholder="Phone" />
                        <input type="password" value={user.password} name="password" onChange={inputEvent} className="border p-2 px-4 w-full mb-3" placeholder="Password" />
                        <button className="bg-green-600 rounded text-white p-2 px-4 inline-block mt-2">Login</button>
                    </form>
                  </div>
                    <button type="button" className="inline-block absolute top-4 right-6" onClick={()=>setIsOpen(false)}  > X </button>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>

         </>):null}
        </div>
       </div>
    </>
  )
}

export default Navigation;