import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionId, setquestionId] = useState(["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"])

  
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId[currentPage - 1]}`);
    // console.log(res.data[0])
    setPosts(res.data[0]);
    setLoading(false);
  };
 
  // console.log()
  useEffect(() => {
    fetchPosts();
  }, [])
  


  const paginate = pageNumber => {
    if (pageNumber === "previous") {
      if (currentPage <= 1) {
        setCurrentPage(3);
        fetchPosts();
      }
      else {
        setCurrentPage(currentPage - 1);
        fetchPosts();
      }
      // console.log("==>",currentPage)
    }
    else if (pageNumber === "next") {
      if (currentPage >= 3) {
        setCurrentPage(1);
        fetchPosts()
      }

      else {
        setCurrentPage(currentPage + 1);
        fetchPosts();
      }

    }
    else {
      setCurrentPage(pageNumber);
      fetchPosts();
    }
  };


  return (

    <div className='container mt-5'>
      <h1 className='text-success mb-3'>MATHJAX</h1>
      <Pagination
        paginate={paginate}
      />
      <Posts posts={posts} loading={loading} index={currentPage - 1} />
    </div>
  );
};

export default App;
