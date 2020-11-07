import React from "react";

export const Form = (props) => {
  const {
    inputText,
    setInputText,
    listItems,
    setListItems,
    setListItemsStatus,
  } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    setListItems([
      ...listItems,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            onChange={(e) => setListItemsStatus(e.target.value)}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
