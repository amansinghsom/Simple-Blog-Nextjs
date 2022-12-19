import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
export default function Headers() {
  const [name,setName]=useState()
  const Router = useRouter();
  useEffect(()=>{
     
      if(localStorage.getItem('userData')){
        let p =localStorage.getItem('userData')
      
        const name1 =  p
        let data=name1.toUpperCase()
        setName(data)
        console.log(data)
        
      }

})
const deletefunc=()=>{
  localStorage.removeItem('userData')
  localStorage.removeItem('user_data')
  // Router.push('/login')
  setName('')

}
  return (
    <div className="">
      <header className="text-gray-600 body-font  bg-indigo-500 text-white font-extrabold">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
              styles="--darkreader-inline-stroke: currentColor;"
              data-darkreader-inline-stroke=""
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white font-extrabold">
              Tailblocks
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'}>

          <h1 className="mr-5 hover:text-gray-900">Home</h1>


          </Link>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Contact US</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
        {
          name?<> <img class="w-10 h-10 rounded-full" src="https://avatars.dicebear.com/api/avataaars/your-custom-seed.svg" alt="Rounded avatar"></img>
          <h1>{name}</h1>
          
          <button onClick={deletefunc} className="inline-flex items-center m-2 border-1   py-1 px-3 focus:outline-none hover:bg-indigo-600 bg-indigo-900  rounded text-base mt-4 md:mt-0">
            Logout
            <span className="px-3">&#8594;</span>
          </button>
          </>:<><Link href={'/login'}>
          <button className="inline-flex items-center m-2 border-1  py-1 px-3 focus:outline-none hover:bg-indigo-600 bg-indigo-900  rounded text-base mt-4 md:mt-0">
            Login
            <span className="px-3">&#8594;</span>
          </button>
        </Link>
        <Link href={'/signup'}>
          <button className="inline-flex items-center m-2 border-1  py-1 px-3 focus:outline-none hover:bg-indigo-600 bg-indigo-900  rounded text-base mt-4 md:mt-0">
            SignUp
            <span className="px-3">&#8594;</span>
          </button>
        </Link>
        </>
        }
         

        </div>
      </header>
    </div>
  );
}
