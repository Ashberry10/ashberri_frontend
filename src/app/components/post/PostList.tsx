"use client"
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useGetAllPostQuery } from '@/app/store/slices/postApi';
import { useGetAllUserIdQuery } from '@/app/store/slices/authApi';
import { BASE_URL } from '../../../../api_constants';

const postContainer = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    backgroundColor: "#f7f7f7",
  };
  
  const postItem = {
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor:"#fff",
    boxShadow: "0 1px 2px black"
  }


export default function PostList() {
  const {data: session} = useSession();
  const token = session?.user?.accessToken;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const {data: getAllPost, isError} = useGetAllPostQuery(token);
  console.log(getAllPost);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (getAllPost && !isError) {
          const postsWithUserNames = await Promise.all(
            getAllPost.map(async (post: { user_id: any; }) => {
              try{
              const userNmae = await fetchUserNameById(post.user_id)
              return { ...post, user_name: userNmae};
            }catch(error){
              console.log(error);
              const userNmae = "user_name error";
              return { ...post, user_name: userNmae};
            }

            })
          );

          setPosts(postsWithUserNames);
        } else {
          // Handle the error or empty data state
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [getAllPost, isError]);

  const fetchUserNameById = async (userId: any) => {

    return 'User Name';
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !Array.isArray(posts)) {
    return <div>Error fetching posts.</div>;
  }


  const customPrefixURL = BASE_URL;

  var isLiked = false;

  return (
    <div > 
      <h2>Posts</h2>
      <ul>
        {posts.map((post:any) => (
          <li style={postContainer} key={post.id}>
            <h3>{post.user_name}</h3> {/* Display user name instead of user_id */}
            {/* <h3>{post.user_id}</h3> */}
            {post.image && (<img src={`${customPrefixURL}${post.image}`} alt={`Post by ${post.user_id}`} />)}
            <p>{post.content}</p>
            <button>
              {isLiked ? 'Unlike' : 'Like'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
