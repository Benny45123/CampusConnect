import campusconnect_logo from "../assets/campusconnect_logo_whitebg.jpg"
import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Header_HomePage from "./Header_HomePage";
import { NavLink } from "react-router-dom";
function DashBoard() {

    const {sideBar}=useContext(AppContext);
  return (
    <>
        
    <Header_HomePage/>
    <div className={`min-h-screen border-r border-gray-100 w-[20%] space-y-8 fixed overflow-hidden transition-transform duration-1000 ${sideBar?"":"-translate-x-[100%]"}`} >
      {/* <NavLink className="translate-y-20 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" d="M4.5 21.25V10.875a.25.25 0 0 1 .1-.2l7.25-5.438a.25.25 0 0 1 .3 0l7.25 5.438a.25.25 0 0 1 .1.2V21.25a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22 9-9.1-6.825a1.5 1.5 0 0 0-1.8 0L2 9"></path></svg> */}
      <NavLink
  to="/"
  className={({ isActive }) =>
    `translate-y-8 pl-5 flex flex-row space-x-3 cursor-pointer  ml-[2px]
     ${isActive
       ? "text-black border-l-2 border-black"
       : "text-gray-500 hover:text-gray-900 hover:border-l"}`
  }
>
  {({ isActive }) => (
    <>
      {isActive ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            d="M4.5 21.25V10.875a.25.25 0 0 1 .1-.2l7.25-5.438a.25.25 0 0 1 .3 0l7.25 5.438a.25.25 0 0 1 .1.2V21.25a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m22 9-9.1-6.825a1.5 1.5 0 0 0-1.8 0L2 9"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.75v10.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v5.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-10.5M22 9l-9.1-6.825a 1.5 1.5 0 0 0-1.8 0L2 9"
          />
        </svg>
      )}
      <span>Home</span>
    </>
  )}
</NavLink>

      <NavLink to="/Library" className={({isActive})=>`translate-y-8 pl-5 flex flex-row space-x-3 cursor-pointer ml-[2px] ${isActive ? "text-black border-l-2 border-black" : "text-gray-500 hover:text-gray-900 hover:border-l"}`}>{({isActive})=>(<>{isActive?(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 5.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2z"></path><path stroke="currentColor" stroke-linecap="round" d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"></path></svg>):
      
      (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"></path><path stroke="currentColor" stroke-linecap="round" d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"></path></svg>)}
            <span className=" ">Library</span>
        </>)}
      </NavLink> 
      <NavLink to="/Profile" className={({isActive})=>`translate-y-8 pl-5 flex flex-row space-x-3 cursor-pointer ml-[2px] ${isActive ? "text-black border-l-2 border-black" : "text-gray-500 hover:text-gray-900 hover:border-l"}`}>{({isActive})=>(<>{isActive?(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.5" fill="currentColor" stroke="currentColor"></circle><path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M12 14c-4.694 0-8.5 1.414-8.5 3.158V21a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-3.842C20.5 15.414 16.694 14 12 14Z"></path></svg>):
      
      (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"></path></svg>)}
            <span className=" ">Profile</span>
        </>)}
      </NavLink>
      <NavLink to="/Stories" className={({isActive})=>`translate-y-8 pl-5 flex flex-row space-x-3 cursor-pointer ml-[2px] ${isActive ? "text-black border-l-2 border-black" : "text-gray-500 hover:text-gray-900 hover:border-l"}`}>{({isActive})=>(<>{isActive?(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 2.75A.75.75 0 0 1 4.75 2h14.5a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75zM7 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 7a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M7 12a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 7 12" clip-rule="evenodd"></path></svg>):
      
      (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"></path><path stroke="currentColor" stroke-linecap="round" d="M8 8.5h8M8 15.5h5M8 12h8"></path></svg>

      )}
            <span className=" ">Stories</span>
        </>)}
      </NavLink>
      <div className="m-5 text-gray-100 mt-20">_________________________________</div>
      <NavLink to="/Following" className={({isActive})=>`translate-y-8 pl-5 flex flex-row space-x-3 cursor-pointer ml-[2px] ${isActive ? "text-black border-l-2 border-black" : "text-gray-500 hover:text-gray-900 hover:border-l"}`}>{({isActive})=>(<>{isActive?(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3.497 14.306a4.4 4.4 0 0 0-.99 1.489 4 4 0 0 0-.759.51c-.369.324-.498.613-.498.853V21.5a.5.5 0 0 1-1 0v-4.342c0-.632.346-1.174.838-1.605.492-.433 1.176-.8 1.977-1.097q.21-.078.432-.15m9.753-.806c2.39 0 4.578.359 6.185.956.801.298 1.485.664 1.977 1.097.492.431.838.973.838 1.605V21a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-3.842c0-.632.346-1.174.838-1.605.492-.433 1.176-.8 1.977-1.097 1.607-.597 3.794-.956 6.185-.956m0-11.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-4.998.1c-.44.45-.822.957-1.129 1.512A4 4 0 0 0 5.25 7c0 1.428.749 2.68 1.874 3.388.308.555.69 1.063 1.132 1.512a5.001 5.001 0 0 1-.004-9.8"></path></svg>):
      
      (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3.497 14.306a4.4 4.4 0 0 0-.99 1.489 4 4 0 0 0-.759.51c-.369.324-.498.613-.498.853V21.5a.5.5 0 0 1-1 0v-4.342c0-.632.346-1.174.838-1.605.492-.433 1.176-.8 1.977-1.097q.21-.078.432-.15m9.753-.806c2.39 0 4.578.359 6.185.956.801.298 1.485.664 1.977 1.097.492.431.838.973.838 1.605V21.5a.5.5 0 0 1-1 0v-4.342c0-.24-.13-.53-.498-.853s-.93-.638-1.666-.911c-1.47-.546-3.533-.894-5.836-.894s-4.367.348-5.836.894c-.737.273-1.298.588-1.666.91-.369.325-.498.614-.498.854V21.5a.5.5 0 0 1-1 0v-4.342c0-.632.346-1.174.838-1.605.492-.433 1.176-.8 1.977-1.097 1.607-.597 3.794-.956 6.185-.956m0-11.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-4.998.1c-.44.45-.822.957-1.129 1.512A4 4 0 0 0 5.25 7c0 1.428.749 2.68 1.874 3.388.308.555.69 1.063 1.132 1.512a5.001 5.001 0 0 1-.004-9.8m4.998.9a4 4 0 1 0 0 8 4 4 0 0 0 0-8"></path></svg>

      )}
            <span className=" ">Following</span>
        </>)}
      </NavLink>
    </div>  

    </>
  )
}

export default DashBoard
