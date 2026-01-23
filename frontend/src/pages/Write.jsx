import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Import your context

import campusconnect_logo from "../assets/campusconnect_logo_whitebg.jpg";
const Write = () => {
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    
    // Get user data from your global context
    const { user } = useContext(AppContext);

    // Get the first letter of the user's name, or 'G' for Guest
    const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : 'G';
    
    // Use the user's saved theme color, or a default gray if not logged in
    const profileBgColor = user?.profileColor || '#6B7280'; 

    return (
        <div className="min-h-screen bg-white font-serif ">
            
            {/* --- HEADER SECTION --- */}
            <nav className="flex justify-between h-16 items-center px-4 md:px-10 py-2  w-full bg-white z-50">
                
                <div className="flex items-center  space-x-3 ">
                    <img src={campusconnect_logo} alt="Campus Connect Logo" className="logo h-60 w-auto -translate-y-23" />
                    
                    <span className="text-sm text-gray-400 mt-1">Draft</span>
                </div>

                <div className="flex items-center space-x-4 md:space-x-6">
                    <button className="bg-[#1a8917] hover:bg-[#156d12] text-white px-3 py-1 rounded-full text-sm font-medium transition-all">
                        Publish
                    </button>

                    <button className="text-gray-500 hover:text-black mt-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="currentColor"></path>
                        </svg>
                    </button>

                    <button className="text-gray-500 hover:text-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    {/* DYNAMIC PROFILE AVATAR */}
                    <div 
                        style={{ backgroundColor: profileBgColor }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-sm transition-transform hover:scale-105"
                        title={user?.name || "Guest"}
                    >
                        {userInitial}
                    </div>
                </div>
            </nav>

            {/* --- EDITOR SECTION --- */}
            <main className="pt-32 max-w-3xl mx-auto px-4">
                <input 
                    type="text"
                    placeholder="Title"
                    className="w-full text-5xl text-gray-800 placeholder-gray-200 outline-none mb-6 border-none focus:ring-0 bg-transparent"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="relative group flex items-start">
                    <div className="absolute -left-16 top-1 transition-all duration-300 transform group-hover:translate-x-2">
                        <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all bg-white shadow-sm">
                            <span className="text-2xl font-light leading-none">+</span>
                        </button>
                    </div>
                    
                    <textarea 
                        placeholder="Tell your story..."
                        className="w-full text-xl text-gray-700 placeholder-gray-300 outline-none border-none focus:ring-0 min-h-[500px] resize-none leading-relaxed bg-transparent"
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                    />
                </div>
            </main>

            {/* --- FOOTER INSTRUCTION --- */}
            <footer className="fixed bottom-10 w-full flex justify-center pointer-events-none">
                <div className="flex items-center space-x-6 bg-white border border-gray-200 px-8 py-3 rounded-xl shadow-sm pointer-events-auto">
                    <button className="text-gray-400 hover:text-black">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <span className="text-[15px] text-gray-500">Select text to change formatting, add headers, or create links.</span>
                    <button className="text-gray-400 hover:text-black">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" transform="rotate(180 12 12)"/></svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Write;