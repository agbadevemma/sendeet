"use client"

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Dummy data array
const items: string[] = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const PaginatedItems: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 10;

  // Handler for page change
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  // Get items for the current page
  const displayItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Paginated List</h2>
      <ul className="list-disc list-inside">
        {displayItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(items.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 space-x-2"
        pageClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
        nextClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
        breakClassName="px-3 py-1"
      />
    </div>
  );
};

export default PaginatedItems;
