import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal, updateGoal } from "../features/goalSlice";

const GoalsItem = ({ id, text, date }) => {
  const [newText, setNewText] = useState("");
  const [editState, setEditState] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteGoal({ id }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateGoal({ id, text: newText }));

    setNewText("");
  };

  return (
    <div>
      <h2>{date}</h2>
      <h2>{text}</h2>

      <button onClick={() => setEditState(!editState)}>Edit</button>

      {editState && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Add a goal"
          />

          <button type="submit">submit</button>
        </form>
      )}

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default GoalsItem;
