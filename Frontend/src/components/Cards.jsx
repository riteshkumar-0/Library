import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <div className="mt-2 my-3 p-3 m-auto">
      <div className="card w-72 h-96 bg-base-100 shadow-xl hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-auto">
          <img
            src={item.image}
            alt="Item"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary">{item.category}</div>
          <h3 className="card-title">{item.bookname}</h3>
          <div className="badge badge-primary justify-end">{item.authorname}</div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline mt-2">Rs.{item.price}</div>
            <div className=" rounded-md hover:bg-orange-800 hover:text-white ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 opacity-90 "
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" />
              </svg>
            </div>
            
          </div>
          <div className=" cursor-pointer px-2 py-1 w-2/3 m-auto mt-2 text-center rounded-full border-[2px] hover:bg-orange-800 hover:text-white duration-200">
          
          <Link to={`/book/${item._id}`} >
              Explore book
            </Link>
              </div>
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
