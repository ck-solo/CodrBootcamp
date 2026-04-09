import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePost } from "../hooks/usePost";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";

const Home = () => {

    const { handleGetPosts } = usePost()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        handleGetPosts()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };


    return (
        <div className="w-full flex justify-center pb-24 md:pb-12 pt-6 md:pt-10">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="max-w-[470px] w-full px-4 sm:px-0 flex flex-col items-center gap-8"
            >
                {posts.map(post => (
                    <motion.div key={post._id} variants={itemVariants} className="w-full">
                        <PostCard post={post} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Home;