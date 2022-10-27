import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../../slices/todo";

const Footer = () => {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleToggleActive = (value) => {
    const collection = document.getElementsByClassName("filter-button");
    Array.from(collection).forEach((el) => {
      el.classList.remove("active");
    });
    document.getElementById(value).classList.toggle("active");

    dispatch(filterTodo(value));
  };

  return (
    <div className="footer">
      <div className="container flex flex-row items-center justify-between shadow-lg rounded-lg bg-white px-5 py-3">
        <div className="text-lg">{todoList.length} items left</div>

        <div>
          <button
            id="all"
            className="filter-button rounded-lg py-1 px-3 text-lg"
            onClick={() => {
              handleToggleActive("all");
            }}
          >
            All
          </button>
          <button
            id="active"
            className="filter-button rounded-lg py-1 px-3 text-lg"
            onClick={() => {
              handleToggleActive("active");
            }}
          >
            Active
          </button>
          <button
            id="complete"
            className="filter-button rounded-lg py-1 px-3 text-lg "
            onClick={() => {
              handleToggleActive("complete");
            }}
          >
            Complete
          </button>
        </div>

        <div className="text-lg opacity-0">3 items left</div>
      </div>
    </div>
  );
};

export default Footer;
