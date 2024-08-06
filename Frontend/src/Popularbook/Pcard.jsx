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
          <div className="badge badge-primary justify-end">
            {item.authorname}
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline mt-2">Rs.{item.price}</div>
          </div>
          <div className=" cursor-pointer px-2 py-1 w-2/3 m-auto mt-2 text-center rounded-full border-[2px] hover:bg-orange-800 hover:text-white duration-200">
            <Link to={`/book/${item._id}`}>Explore book</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
