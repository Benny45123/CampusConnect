import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleDetailPage = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:3101/api/articles/${articleId}`);
                const data = await res.json();
                setArticle(data);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, [articleId]);

    const handleClap = async () => {
        try {
            await fetch(`http://localhost:3101/api/articles/${articleId}/clap`, {
                method: 'POST',
            });
            setArticle(prev => ({ ...prev, claps: prev.claps + 1 }));
        } catch (error) {
            console.error('Error clapping:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-12">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                    <div className="h-64 bg-gray-200 rounded mb-8"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
                <button 
                    onClick={() => navigate('/')}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    Go back to home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <article className="max-w-3xl mx-auto px-4 py-12">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>
                    
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                            {article.author?.name?.charAt(0).toUpperCase() || 'A'}
                        </div>
                        <div>
                            <div className="font-semibold text-gray-900">
                                {article.author?.name || 'Anonymous'}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <span>{article.readTime} min read</span>
                                <span>•</span>
                                <span>{formatDate(article.createdAt)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {article.tags?.map((tag, index) => (
                            <span 
                                key={index}
                                className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between py-4 border-y border-gray-200">
                        <div className="flex items-center space-x-6">
                            <button 
                                onClick={handleClap}
                                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21z" />
                                </svg>
                                <span className="font-medium">{article.claps}</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-black transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5h14v16l-7-5-7 5V5z" />
                                </svg>
                            </button>
                            <button className="text-gray-600 hover:text-black transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Cover Image */}
                {article.coverImageUrl && (
                    <div className="mb-12">
                        <img
                            src={article.coverImageUrl}
                            alt={article.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none mb-12">
                    <div 
                        className="text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content || '<p>Content not available</p>' }}
                    />
                </div>

                {/* Footer Actions */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={handleClap}
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21z" />
                            </svg>
                            <span className="font-medium">{article.claps}</span>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ArticleDetailPage;