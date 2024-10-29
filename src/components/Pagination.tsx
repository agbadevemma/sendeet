"use client"
import ArrowLeft from '@/icons/arrow-left';
import ArrowRight from '@/icons/arrow-right';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


// Types
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
}

// Generate dummy data
const generateDummyData = (): User[] => {
  const roles = ['Developer', 'Designer', 'Manager', 'Analyst', 'Engineer'];
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `+1 ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
    company: `Company ${Math.floor(index / 10) + 1}`,
    role: roles[Math.floor(Math.random() * roles.length)],
  }));
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [users] = useState<User[]>(generateDummyData());
  const itemsPerPage = 8;

  // Calculate current page items
  const offset = currentPage * itemsPerPage;
  const currentPageUsers = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="w-full  space-y-6">

     

      {/* Pagination */}
      <div className="flex items-center justify-between relative">
      <ReactPaginate
        breakLabel={
          <span className="flex items-center justify-center w-10 h-10 text-gray-600">
            ...
          </span>
        }
        nextLabel={
          <span className="flex items-center justify-center px-[14px] py-2 rounded-md gap-2  text-sm font-medium text-grey-700 bg-white border border-[#D0D5DD] hover:bg-gray-50">
       <span>Next</span>  <ArrowRight color='#48505E'/>
          </span>
        }
        previousLabel={
          <span className="flex items-center justify-center  px-[14px] py-2 gap-2 rounded-md text-sm font-medium text-grey-700 bg-white border border-[#D0D5DD] hover:bg-gray-50">
          <ArrowLeft color='#48505E'/> <span>Previous</span>
          </span>
        }
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        className="flex items-center  justify-center space-x-2 w-full"
        pageClassName="flex w-fit"
        pageLinkClassName="w-[40px]  h-[40px] flex items-center justify-center rounded-md text-sm font-medium text-grey-500 bg-transparent"
        activeClassName="bg-[#E6F7FE] rounded-lg  "
        containerClassName='flex w-fit justify-between '
        activeLinkClassName=" text-[#00AAF7]  "
        breakClassName="flex items-center justify-between"
        nextClassName="flex  absolute right-0 "
        previousClassName="flex absolute left-0"
        disabledClassName="opacity-50 cursor-not-allowed hover:bg-white"
      />
      </div>

      {/* Page info */}
      {/* <div className="text-sm text-gray-600 text-center">
        Showing {offset + 1} to {Math.min(offset + itemsPerPage, users.length)} of {users.length} users
      </div> */}
    </div>
  );
};

export default Pagination;