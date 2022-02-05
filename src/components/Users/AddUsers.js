import { useState } from "react";

import Card from "../UI/Card";
import Button from "./Button";

const AddUsers = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addDataHandler = (event) => {
    event.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      alert("Entered data is not valid!!");
    } else if (!Number.isNaN(+enteredAge) && +enteredAge < 0) {
      alert("Enter a valid age!!");
    } else {
      props.onAddUser(enteredUser, enteredAge);
      setEnteredAge("");
      setEnteredUser("");
    }
  };

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addDataHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={userChangeHandler}
          value={enteredUser}
        ></input>

        <label htmlFor="Age">Age</label>
        <input
          id="Age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>

        <Button type="Submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
