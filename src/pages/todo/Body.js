import React from "react";
import {  useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Body = () => {
  let { todoList  } = useSelector((state) => state.todo);

  return (
    <div className="body my-5">
      <div className="container shadow-xl rounded-lg">
        {todoList.length ? (
          todoList.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })
        ) : (
          <h3 className="text-2xl p-5 bg-white w-full rounded-lg italic text-red-300">
            Nothing to do!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Body;
