import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import { usePost } from '../hooks/usePost';
import { useSelector } from 'react-redux';


 

const Home = () => {

    const { handleGetPosts } = usePost()
    const posts = useSelector(state => state.posts.posts)
    console.log(posts)

    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <div className="w-full flex justify-center pb-20 md:pb-8 pt-4 md:pt-8">
            <div className="max-w-117.5 w-full px-4 sm:px-0 flex flex-col items-center">
                {posts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Home;