import React,{useState} from 'react';

const Pagination = ({  paginate }) => {
  const pageNumbers = [];
 
  pageNumbers.push("previous");
  for (let i = 1; i <= Math.ceil(3); i++) {
    pageNumbers.push(i);
  }
  pageNumbers.push("next");
  // console.log(pageNumbers)

  return (
    <nav>
      <ul className='pagination'>
        
        {pageNumbers.map(number => (
          
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
              {/* {console.log("--->",paginate(number))} */}
            </a>
          </li>
        ))}
       
      </ul>
    </nav>
  );
};

export default Pagination;
