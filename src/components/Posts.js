import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";


const Posts = ({ posts, loading,index }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const config = {
    loader: { load: ["input/asciimath"] }
  };
// console.log(posts)
  return (
    <MathJaxContext>
      
    <ul className='list-group mb-4 background-grey'>
        <li className='list-group-item'>
        <b> Ques.{index+1}</b> <b>{posts.QuestionID}</b>{"\n"} 
         <MathJax>
           {posts.Question}
          </MathJax>
        </li>
       
          
    </ul>
   </MathJaxContext>
  );
};

export default Posts;
