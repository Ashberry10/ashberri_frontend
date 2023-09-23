import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import {
  useSendCreatePostRequestMutation,

} from '../pages/api/postApi';

function CreatePostForm() {
  const { data: session, status } = useSession();
  const token: string | undefined = session?.user.accessToken;
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');

  const [sendCreatePostRequest, { isLoading, isError }] =
    useSendCreatePostRequestMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    const post = {
      content: content,
      image: image,
    };

    try {
      if (token) {
        const response= await sendCreatePostRequest({
          access: token,
          formData,
        });
        console.log('post created');
        console.log(response);
      } else {
        // Handle the case where there's no token
        setResponseMessage('Access token not available');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred');
    }
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

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
            onChange={handleContentChange}
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
            onChange={handleImageChange}
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
