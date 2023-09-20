import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import {
  useSendCreatePostRequestMutation
} from "../pages/api/postApi";




function CreatePostForm() {
  const { data: session, status } = useSession();
  const token: any = session?.user.accessToken;
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const[sendCreatePostRequest, { isLoading, isError }] = useSendCreatePostRequestMutation();


  const handleSubmit = async(e) =>{
    console.log("clicked")
    e.preventDefault();
    const formData = new FormData();
formData.append('content', content);
formData.append('image', image); 

    const post = {
      "content":content,
      "image":image,
    }
    
    try{
      console.log(post)
      const response = await sendCreatePostRequest({ access: token, formData});
      console.log("post created")
      console.log(response)

    }catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred');
    }
  }

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>

      {isLoading && <p>Creating post...</p>}
      {isError && <p>Error creating post</p>}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default CreatePostForm;



