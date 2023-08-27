import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  MdDeleteOutline,
} from "react-icons/md";
import { useGlobalContext } from "../context/context";
import NestedJsonTable from "./Table/Table";

const Task = ({ id, name, completed, color, index }) => {
  const { removeTask } = useGlobalContext();

  console.log("name in Task.js-> ", name)
  console.log(typeof name)

  if((typeof name) == 'string'){
    return null
  }

  return (
    <Draggable key={id} draggableId={"draggable-" + id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? "0 0 5rem #666" : "none",
            opacity: snapshot.isDragging
              ? "1"
              : provided.draggableProps.style.opacity,
            backgroundColor: color,
          }}
          className={`task ${completed && "task-done"}`}
        >
          <NestedJsonTable data={name}/>

          <button onClick={() => removeTask(id)}>
            <MdDeleteOutline />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
