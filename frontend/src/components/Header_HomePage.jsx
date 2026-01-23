import campusconnect_logo from "../assets/campusconnect_logo_whitebg.jpg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
const Header_HomePage = () => {
        const {sideBar,setSideBar}=useContext(AppContext);
    return (
        <>
            <header className="  p-4   border-b border-gray-100 w-full h-17 flex top-0">
                  <button onClick={()=>{setSideBar(!sideBar)}} className="  w-10 h-10 rounded-lg text-gray-500 hover:text-black cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M20.6 17.51a.5.5 0 0 1 0 .98l-.1.01h-17a.5.5 0 0 1 0-1h17zm0-6a.5.5 0 0 1 0 .98l-.1.01h-17a.5.5 0 0 1 0-1h17zm0-6a.5.5 0 0 1 0 .98l-.1.01h-17a.5.5 0 0 1 0-1h17z"></path></svg></button>
                        <div className="flex   -translate-y-48 translate-x-0">
                            <img src={campusconnect_logo} alt="Campus Connect Logo" className="logo h-60 w-60 " />
                        </div>
                        <div className="flex text-center right-[10%] space-x-2 absolute top-6  cursor-pointer"><NavLink to='/new-story' className="text-gray-500 hover:text-gray-900 flex flex-row space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path><path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path></svg>
            <span className="  mr-5  ">Write</span></NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" className="text-gray-500 hover:text-gray-900" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" d="M15 18.5a3 3 0 1 1-6 0"></path><path stroke="currentColor" stroke-linejoin="round" d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"></path></svg>
            </div>
             
                </header>
        </>
    );
}
export default Header_HomePage;