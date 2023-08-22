export const API_NOTIFICATION={
    loading:{
        title:'loading...',
        message:"Data is loading,wait..."
    },
    success:{
        title:'Success',
        message:'Data loaded'
    },
    responseFailure:{
        title:'Error',
        message:"Error while fetching response from server,try again.."
    },
    requestFailure:{
        title:'error',
        message:'error while parsing data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect,Please check internet connectivity and try again later'
    
    }
}
export const SERVICE_URL={
    userSignup:{url:'/signup',method :'POST'},
    userLogin:{url:'/login',method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'/create',method:'POST'},
    getAllPosts:{url:'/posts',method:'GET',params:true},
    getPostById:{url:'post',method:'GET',query:true},
    updatePost:{url:'/update',method:'PUT',query:true},
    deletePost:{ url: 'delete', method: 'DELETE', query: true },
    newComment:{url:'comment/new',method:'POST'},
    getAllComments:{url:'comments',method:'GET',query:true},
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true }
}
