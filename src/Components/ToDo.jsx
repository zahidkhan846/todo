import React from "react";

export const ToDo = ({ todoText, listItem, listItems, setListItems }) => {
  const handleListDelete = (id) => {
    setListItems(listItems.filter((listItem) => listItem.id !== id));
  };
  const handleComplete = (id) => {
    setListItems(
      listItems.map((listItem) => {
        if (listItem.id === id) {
          return {
            ...listItem,
            completed: !listItem.completed,
          };
        }
        return listItem;
      })
    );
  };

  return (
    <>
      <div className="todo">
        <li className={`todo-item ${listItem.completed && "completed"}`}>
          {todoText}
        </li>
        <button
          onClick={() => handleComplete(listItem.id)}
          className="complete-btn"
        >
          {listItem.completed ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fas fa-check"></i>
          )}
        </button>
        <button
          onClick={() => handleListDelete(listItem.id)}
          className="trash-btn"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};
