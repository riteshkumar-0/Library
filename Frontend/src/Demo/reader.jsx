import React from 'react';
import { NavLink } from 'react-router-dom';

function Reader({ book }) {
  if (!book) {
    return <div>No book details available.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center dark:bg-slate-300 w-full md:w-3/4 lg:w-2/3 m-auto p-4 rounded">
      <NavLink
        to="/book"
        className="btn btn-lg btn-circle btn-ghost text-red-600 absolute right-2 top-2">
        <h1 className='text-4xl'>X</h1>
      </NavLink>
      <figure className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={book.image}
          alt="Item"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <div className="px-4 sm:px-0 flex justify-center">
          <h3 className="font-semibold text-3xl md:text-5xl leading-7 text-black">Book Information</h3>
        </div>
        <div className="mt-4 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-black">Book name</dt>
              <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{book.bookname}</dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-black">Author name</dt>
              <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{book.authorname}</dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-black">Category</dt>
              <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{book.category}</dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-black">Available Price</dt>
              <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">Rs{book.price}</dd>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-black">Book Description</dt>
              <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{book.description}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Reader;
