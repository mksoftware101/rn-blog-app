import React, {useReducer} from 'react';
// Context was designed for moving information around

const BlogContext = React.createContext([]);

// blogPosts = state (state is the name uses for conventions)
const blogReducer = (blogPosts, action) => {
    switch (action.type) {
        case 'add_blogpost': {
            return [...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]
        }
        default :
            return blogPosts;
    }
}

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'});
    };

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
