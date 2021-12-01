import React, {useState} from 'react';
// Context was designed for moving information around

const BlogContext = React.createContext([]);

export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
    }

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
