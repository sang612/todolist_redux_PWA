import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNew, setPreTodoList } from "../../slices/todo";

const Top = () => {
  const [action, setAction] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action.trim()) {
      dispatch(addNew({ action: action, done: false }));
    }

    const collection = document.getElementsByClassName("filter-button");
    Array.from(collection).forEach((el) => {
      el.classList.remove("active");
    });
    document.getElementById("all").classList.add("active");

    setAction("");
  };

  const handleOnChange = (e) => {
    setAction(e.target.value);
  };

  return (
    <div className="top">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="block p-5 text-3xl w-full rounded-md shadow-xl focus:outline-none"
          placeholder="What need to be done?"
          onChange={handleOnChange}
          value={action}
        />
      </form>
    </div>
  );
};

export default Top;
