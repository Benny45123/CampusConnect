import campusconnect_logo from "../assets/campusconnect_logo_whitebg.jpg"
function Navigationbar() {
  return (
    <>
        <header className=" flex  p-4   border-b border-gray-200 w-full h-17 top-0">
      <button className="  w-10 h-10 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill="currentColor" class="bi bi-list text-gray-500 hover:text-gray-900 pl-2 cursor-pointer" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button>
            <div className="flex   -translate-y-48 translate-x-0">
                <img src={campusconnect_logo} alt="Campus Connect Logo" className="logo h-60 w-60 " />
            </div>
            <div className="flex text-center translate-x-250 space-x-2 absolute top-6  cursor-pointer"><div className="text-gray-500 hover:text-gray-900 flex flex-row space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path><path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path></svg>
<span className=" font-semibold  mr-5  ">Write a Post</span></div>
<svg xmlns="http://www.w3.org/2000/svg" width="24" className="text-gray-500 hover:text-gray-900" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" d="M15 18.5a3 3 0 1 1-6 0"></path><path stroke="currentColor" stroke-linejoin="round" d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"></path></svg>
</div>
 
    </header>
    <div className="min-h-screen border-r border-gray-300 w-[20%] space-y-8 fixed overflow-hidden">
      {/* <a className="translate-y-20 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" d="M4.5 21.25V10.875a.25.25 0 0 1 .1-.2l7.25-5.438a.25.25 0 0 1 .3 0l7.25 5.438a.25.25 0 0 1 .1.2V21.25a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 1-.25.25h-4.5a.25.25 0 0 1-.25-.25Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22 9-9.1-6.825a1.5 1.5 0 0 0-1.8 0L2 9"></path></svg> */}
      <a className="translate-y-8 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.75v10.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v5.5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-10.5M22 9l-9.1-6.825a1.5 1.5 0 0 0-1.8 0L2 9"></path></svg>
            <span className="">Home</span>
      </a> 
      <a className="translate-y-8 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"></path><path stroke="currentColor" stroke-linecap="round" d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"></path></svg>
            <span className=" ">Library</span>
      </a> 
      <a className="translate-y-8 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"></path></svg>
            <span className=" ">Profile</span>
      </a> 
      <a className="translate-y-8 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 cursor-pointer" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"></path><path stroke="currentColor" stroke-linecap="round" d="M8 8.5h8M8 15.5h5M8 12h8"></path></svg>
            <span className=" ">Stories</span>
      </a> 
      <div className="m-5 text-gray-300 mt-20">_________________________________</div><a className="translate-y-8 pl-5 text-gray-500 hover:text-gray-900 hover:border-l flex flex-row space-x-3 cursor-pointer " ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3.497 14.306a4.4 4.4 0 0 0-.99 1.489 4 4 0 0 0-.759.51c-.369.324-.498.613-.498.853V21.5a.5.5 0 0 1-1 0v-4.342c0-.632.346-1.174.838-1.605.492-.433 1.176-.8 1.977-1.097q.21-.078.432-.15m9.753-.806c2.39 0 4.578.359 6.185.956.801.298 1.485.664 1.977 1.097.492.431.838.973.838 1.605V21.5a.5.5 0 0 1-1 0v-4.342c0-.24-.13-.53-.498-.853s-.93-.638-1.666-.911c-1.47-.546-3.533-.894-5.836-.894s-4.367.348-5.836.894c-.737.273-1.298.588-1.666.91-.369.325-.498.614-.498.854V21.5a.5.5 0 0 1-1 0v-4.342c0-.632.346-1.174.838-1.605.492-.433 1.176-.8 1.977-1.097 1.607-.597 3.794-.956 6.185-.956m0-11.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-4.998.1c-.44.45-.822.957-1.129 1.512A4 4 0 0 0 5.25 7c0 1.428.749 2.68 1.874 3.388.308.555.69 1.063 1.132 1.512a5.001 5.001 0 0 1-.004-9.8m4.998.9a4 4 0 1 0 0 8 4 4 0 0 0 0-8"></path></svg>
            <span className=" ">Following</span>
      </a> 
    </div>  

    </>
  )
}

export default Navigationbar
