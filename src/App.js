import React, { useCallback, useEffect, useState } from "react";
import { Form } from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [listItemsStatus, setListItemsStatus] = useState("all");
  const [filterListItems, setFilterListItems] = useState([]);

  const filterListItemsHandler = useCallback(() => {
    switch (listItemsStatus) {
      case "completed":
        setFilterListItems(
          listItems.filter((listItem) => listItem.completed === true)
        );
        break;
      case "uncompleted":
        setFilterListItems(
          listItems.filter((listItem) => listItem.completed === false)
        );
        break;
      default:
        setFilterListItems(listItems);
        break;
    }
  }, [listItems, setFilterListItems, listItemsStatus]);

  const saveDataToLocalStorage = useCallback(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const getDataFromLocalStorage = useCallback(() => {
    if (localStorage.getItem("listItems") === null) {
      localStorage.setItem("listItems", JSON.stringify([]));
    } else {
      const store = JSON.parse(localStorage.getItem("listItems"));
      setListItems(store);
    }
  }, []);

  useEffect(() => {
    getDataFromLocalStorage();
  }, [getDataFromLocalStorage]);

  useEffect(() => {
    filterListItemsHandler();
    saveDataToLocalStorage();
  }, [filterListItemsHandler, saveDataToLocalStorage]);

  return (
    <div className="App">
      <header>
        <h3>ToDo List</h3>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        listItems={listItems}
        setListItems={setListItems}
        setListItemsStatus={setListItemsStatus}
      />
      <ToDoList
        filterListItems={filterListItems}
        listItems={listItems}
        setListItems={setListItems}
      />
    </div>
  );
}

export default App;
