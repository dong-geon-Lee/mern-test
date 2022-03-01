import React, { useEffect } from "react";
import GoalsItem from "./GoalsItem";
import { useSelector, useDispatch } from "react-redux";
import { getGoals } from "../features/goalSlice";
import GoalsForm from "./GoalsForm";
// import Spinner from "./Spinner";

const GoalsMain = () => {
  const { goals } = useSelector((state) => state.goal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch, goals]);

  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }

  return (
    <>
      <GoalsForm></GoalsForm>

      {goals.length > 0 ? (
        goals.map((goal) => (
          <GoalsItem
            key={goal._id}
            id={goal._id}
            text={goal.text}
            date={new Date(goal.createdAt).toLocaleDateString("ko")}
          ></GoalsItem>
        ))
      ) : (
        <h2>No list, Add a Goals!</h2>
      )}
    </>
  );
};

export default GoalsMain;
