import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoals } from "../features/goalSlice";

const GoalsForm = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const addText = () => {
    dispatch(addGoals({ text }));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" onClick={addText}>
        Add text
      </button>
    </form>
  );
};

export default GoalsForm;
