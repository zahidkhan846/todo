import React from "react";
import { ToDo } from "./ToDo";

function ToDoList({ listItems, setListItems, filterListItems }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterListItems.map((filterListItem) => {
          return (
            <ToDo
              key={filterListItem.id}
              todoText={filterListItem.text}
              listItems={listItems}
              setListItems={setListItems}
              listItem={filterListItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
