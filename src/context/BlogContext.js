import createDataContext from "./createDataContext";

// Context was designed for moving information around

// blogPosts = state (state is the name uses for conventions)
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost': {
            return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content}]
        }
        case 'delete_blogpost' : {
            return state.filter((blogPost) => blogPost.id !== action.payload);
        }
        default :
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title, content}});
        callback(); // We can run this callback after some POST requests to remote API
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id});
    };
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, []);
