import { useState } from "react";
import * as postService from "../../api/post.service.js"

const PostCreate = ({createPost}) => {
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        let newPost = {content};
        let res = await postService.create(newPost).then(() => {
            setContent("");
            createPost();
            console.log(newPost);
        });
        if (!res === 201) {
            alert(`error, ${res.status}`);
        }
    };
    return (
        <div>
            <form>
                <label>
                    Post
                    <input 
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        type="text"
                        name="Review"
                        placeholder="Write Review"
                        />
                </label>
            </form>
            <button onClick={handleSubmit}>Create Post</button>
        </div>
    )

}

export default PostCreate;