import React from "react";
import { Fragment } from "react";
import { ReactComponent as GreenTick } from "../../assets/img/green-tick.svg";
import { ReactComponent as BlackTick } from "../../assets/img/black-tick.svg";
import { useDispatch } from "react-redux";
import { changeTodo } from "../../slices/todo";

const TodoItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const handleToggleItem = (item) => {
    dispatch(changeTodo(item));
  };

  return (
    <Fragment>
      {!item.done ? (
        <div
          className="item flex flex-row items-center bg-white p-5 hover:cursor-pointer"
          onClick={() => {
            handleToggleItem(item);
          }}
        >
          <BlackTick className="w-9 mr-5" />
          <span className=" text-3xl ">{item.action}</span>
        </div>
      ) : (
        <div
          className="item flex flex-row items-center bg-white p-5 hover:cursor-pointer"
          onClick={() => {
            handleToggleItem(item);
          }}
        >
          <GreenTick className="w-9 mr-5" />
          <span className="text-gray-300 text-3xl line-through">
            {item.action}
          </span>
        </div>
      )}
    </Fragment>
  );
};

export default TodoItem;
