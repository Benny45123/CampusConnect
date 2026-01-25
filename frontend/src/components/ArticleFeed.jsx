// import React, { useEffect } from 'react';

// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// // const articles = [
// //     {
// //         id: 1,
// //         author: "Alex Rivera",
// //         publication: "The Academic Daily",
// //         title: "Mastering Final Exams: 5 Science-Backed Study Strategies",
// //         description: "How to optimize your brain for retention and focus during the most stressful week of the semester. From active recall to spaced repetition.",
// //         date: "Jan 22",
// //         claps: "1.4K",
// //         comments: 42,
// //         image: studyImg,
// //         avatar: "https://ui-avatars.com/api/?name=Alex+Rivera&background=random"
// //     },
// //     {
// //         id: 2,
// //         author: "Sarah Chen",
// //         publication: "Campus Pulse",
// //         title: "The Rise of Student Startups: Building the Next Unicorn from Your Dorm Room",
// //         description: "Why some of the world's most successful tech companies started on college campuses and how you can do the same with minimal resources.",
// //         date: "Jan 20",
// //         claps: "2.1K",
// //         comments: 128,
// //         image: codingImg,
// //         avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random"
// //     },
// //     {
// //         id: 3,
// //         author: "Jordan Smith",
// //         publication: "Student Life Matters",
// //         title: "Networking 101: How to Build Professional Connections Before Graduation",
// //         description: "College isn't just about the degree; it's about the people you meet. Here's how to navigate campus events and LinkedIn effectively.",
// //         date: "Jan 18",
// //         claps: "856",
// //         comments: 24,
// //         image: eventImg,
// //         avatar: "https://ui-avatars.com/api/?name=Jordan+Smith&background=random"
// //     }
// // ];

// const ArticleFeed = () => {

//     const { articles } = useContext(AppContext);
//     // const [searchParams]=useSearchParams();
//     // const q=searchParams.get('q')||'';
//     // useEffect(()=>{
//     //     const fetchArticles = async()=>{
//     //         setLoading(true);
//     //         const res=await fetch(`http://localhost:3101/api/article/search?q=${q}`)
//     //         const data=await res.json();
//     //         setArticles(data);
//     //         setLoading(false);
//     //     };
//     //     fetchArticles();
//     // },[q]);
//     return (
//         <div className="max-w-3xl mx-auto px-4 py-8">
//             <div className="flex border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
//                 <button className="px-4 py-3 text-sm font-medium border-b border-black -mb-[1px]">For you</button>
//                 <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-black">Featured</button>
//             </div>

//             <div className="space-y-12">
//                 {articles.map((article) => (
//                     <article key={article.id} className="group">
//                         <div className="flex flex-col md:flex-row gap-6">
//                             <div className="flex-1 order-2 md:order-1">
//                                 <div className="flex items-center space-x-2 mb-2">
//                                     <img src={article.avatar} alt={article.author} className="w-5 h-5 rounded-full" />
//                                     <span className="text-xs font-bold text-gray-900">{article.author}</span>
//                                     <span className="text-xs text-gray-500">in</span>
//                                     <span className="text-xs font-bold text-gray-900">{article.publication}</span>
//                                 </div>
//                                 <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-700 cursor-pointer">
//                                     {article.title}
//                                 </h2>
//                                 <p className="text-gray-600 line-clamp-2 text-sm md:text-base mb-6 hidden md:block">
//                                     {article.description}
//                                 </p>
//                                 <div className="flex items-center justify-between mt-auto">
//                                     <div className="flex items-center space-x-4 text-gray-500">
//                                         <span className="text-xs">{article.date}</span>
//                                         <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
//                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21z" />
//                                             </svg>
//                                             <span className="text-xs">{article.claps}</span>
//                                         </div>
//                                         <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
//                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                                             </svg>
//                                             <span className="text-xs">{article.comments}</span>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center space-x-4 text-gray-400">
//                                         <button className="hover:text-black transition-colors">
//                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </button>
//                                         <button className="hover:text-black transition-colors">
//                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5h14v16l-7-5-7 5V5z" />
//                                             </svg>
//                                         </button>
//                                         <button className="hover:text-black transition-colors">
//                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-48 h-32 md:h-32 order-1 md:order-2 flex-shrink-0">
//                                 <img
//                                     src={article.image}
//                                     alt={article.title}
//                                     className="w-full h-full object-cover rounded shadow-sm hover:ring-1 hover:ring-gray-200 transition-all cursor-pointer"
//                                 />
//                             </div>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ArticleFeed;
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ArticleFeed = () => {
    const { articles, loading,setLoading } = useContext(AppContext);



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 30) return `${diffDays} days ago`;
        
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const handleArticleClick = (articleId) => {
        navigate(`/article/${articleId}`);
    };

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-8">
                <div className="space-y-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                            <div className="flex gap-6">
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                                    <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>
                                <div className="w-48 h-32 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="flex border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <button className="px-4 py-3 text-sm font-medium border-b border-black -mb-[1px]">
                    For you
                </button>
                <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-black">
                    Featured
                </button>
            </div>

            <div className="space-y-12">
                {articles.map((article) => (
                    <article key={article._id} className="group">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 order-2 md:order-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                        {article.author?.name?.charAt(0).toUpperCase() || 'A'}
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">
                                        {article.author?.name || 'Anonymous'}
                                    </span>
                                </div>
                                
                                <h2 
                                    onClick={() => handleArticleClick(article.slug)}
                                    className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-700 cursor-pointer"
                                >
                                    {article.title}
                                </h2>
                                
                                <div className="flex items-center space-x-2 mb-4">
                                    {article.tags?.slice(0, 3).map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center space-x-4 text-gray-500">
                                        <span className="text-xs">
                                            {formatDate(article.createdAt)}
                                        </span>
                                        <span className="text-xs">
                                            {article.readTime} min read
                                        </span>
                                        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21z" />
                                            </svg>
                                            <span className="text-xs">{article.claps}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-gray-400">
                                        <button className="hover:text-black transition-colors">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5h14v16l-7-5-7 5V5z" />
                                            </svg>
                                        </button>
                                        <button className="hover:text-black transition-colors">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div 
                                onClick={() => handleArticleClick(article.slug)}
                                className="w-full md:w-48 h-32 md:h-32 order-1 md:order-2 flex-shrink-0 cursor-pointer"
                            >
                                {article.coverImageUrl ? (
                                    <img
                                        src={article.coverImageUrl}
                                        alt={article.title}
                                        className="w-full h-full object-cover rounded shadow-sm hover:ring-1 hover:ring-gray-200 transition-all"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded shadow-sm hover:ring-1 hover:ring-gray-200 transition-all flex items-center justify-center">
                                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default ArticleFeed;
