import React from "react";

const TodoLayout = (props: {
  children: React.ReactNode;
  todolist: React.ReactNode;
  todoinput: React.ReactNode;
}) => {
  return (
    <>
      <div className="bg-slate-100 grid justify-center w-full">
        {props.children}
        {props.todoinput}
        {props.todolist}
      </div>
    </>
  );
};

export default TodoLayout;
