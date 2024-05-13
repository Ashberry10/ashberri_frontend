import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import { useSendCreatePostRequestMutation } from '@/app/store/slices/postApi';

const FormContainer = {
  backgroundColor: "#E6E6FA",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  margin: 'auto',
  maxWidth: '500px',
  width: '100%',
}
const FormHeader = {
  fontSize: "24px",
}
const Button = {
  backgroundColor: "#007BFF",
  padding: "10px",
  borderRadius: "5px",
}

function CreatePostForm() {
  const { data: session } = useSession();
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

    try {
      if (token) {
        await sendCreatePostRequest({
          access: token,
          formData,
        });
        console.log('post created');
      } else {
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
    <div style={FormContainer}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="content" style={{ marginRight: '10px' }}>What's on your mind?</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            required
            style={{
              width: '100%',
              height: '100px',
              padding: '12px 20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              resize: 'none',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            style={{
              marginBottom: '10px', // Adjust for responsive layout
            }}
          />
          <button 
            type="submit" 
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Post
          </button>
        </div>
      </form>

      {isLoading && <p>Creating post...</p>}
      {isError && <p>Error creating post</p>}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default CreatePostForm;
