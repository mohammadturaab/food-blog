import { useEffect, useState } from "react";
import * as postService from "../../api/post.service"

const PostShow = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        async function getPost() {
            const post = await 
            postService.show();
            console.log(post)
                setPost(post.data);
                

        }
        getPost();
    }, [])

    return (
        <div>
            <p>{post}</p>
        </div>
    )

}

export default PostShow;