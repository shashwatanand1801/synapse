import React, { useEffect, useState } from "react";
import {FaGithub} from 'react-icons/fa'
import { v4 as uuid } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./components/List";
import Alert from "./components/Alert";
import ItemSelector from "./components/ItemSelector/ItemSelector";
import { useGlobalContext } from "./context/context";
import DarkModeToggle from './components/DarkMode/DarkModeToggle';

const App = () => {

  const {
    inputRef,
    tasks,
    setTasks,
    alert,
    showAlert,
    isEditing,
    setName,
    bFile,
    setBFile
  } = useGlobalContext();

  const [specification, setSpecification] = useState("");
  const [email, setEmail] = useState("");
  const [bisName, setBisName] = useState("");
  const addTask = async (e) => {
    if (!specification || !email) {
      showAlert(true, "Invalid Specifications or Email");
    }
    else {
      
      showAlert(true, "Mapping in process... Please wait!");
      e.preventDefault();
      let result = await fetch(
      'http://localhost:8000/server/mapping/add-mapping', {
          method: "post",
          body: JSON.stringify({ specification, email, bFile, bisName}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      console.warn(result);

      showAlert(true)

      if (result) {
          // alert("Data saved succesfully");
          setEmail("");
          setSpecification("");
          setBFile("");
      }
      

      const newMappingTask = {
        id: uuid().slice(0, 8),
        name: result.mapping,
        completed: false,
        color: "#009688",
      };
      setTasks([...tasks, newMappingTask]);
      showAlert(true, "New Mapping Added.");
      setName("");
    }
  }

  const deleteAll = () => {
    setTasks([]);
    showAlert(true, "Your list is clear!");
  };

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [inputRef, tasks]);

  const buttonStyle = {
    margin: '10px 20px',
  };
  

  return (
  <>
    <div>

     <div className='container' >
      {alert && <Alert msg={alert.msg} />}
      <form className='head' onSubmit={addTask}>
        <textarea
          type='text'
          ref={inputRef}
          placeholder='Your Business API Specifications (in yaml form)'
          value={specification}
          rows={10}
          cols={50}
          onChange={(e) => setSpecification(e.target.value)}
        />
        <flex>
        <ItemSelector />
        <input
          type='text'
          ref={inputRef}
          placeholder='Business Name'
          value={bisName}
          onChange={(e) => setBisName(e.target.value)}
        />
        <input
          type='text'
          ref={inputRef}
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit' style={buttonStyle}>{isEditing ? "Edit" : "Add"}</button>
        </flex>
      </form>
      <DragDropContext >
        {tasks.length > 0 ? (
          <List />
        ) : (
          <p className='no-tasks'>Your list is clear!</p>
        )}
      </DragDropContext>
      {tasks.length > 2 && (
        <button
          className='btn-delete-all'
          onClick={deleteAll}
          title='Delete All Tasks (Completed and Uncompleted)!'
        >
          Clear All
        </button>
      )}
	    <DarkModeToggle/>

      </div>
    </div>


	<div class="footer">
		<a href='https://github.com/shashwatanand1801' target='_blank' rel="noopener noreferrer"><FaGithub className='github'/></a>
	</div>
	</>
  );
};

export default App;
