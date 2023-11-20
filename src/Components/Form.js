import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: {
      date: "",
      time: "",
    },
    traceID: "",
    spanID: "",
    commit: "",
    parentResourceId: "",
  });

  let name, val;

  const handleInput = (e) => {
    // const { name, value } = e.target;
    // console.log(e.target.name, "console.log", "e", e.target.value);
    name = e.target.name;
    val = e.target.value;

    setUser({ ...user, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the user data to the backend
    axios
      .post("http://localhost:3000/api/Log", user)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fname">Level</label>
        <br />
        <input
          type="text"
          id="fname"
          name="level"
          className="Forminput"
          value={user.level}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="lname">Message</label>
        <br />
        <input
          type="text"
          id="lname"
          name="message"
          className="Forminput"
          defaultValue={user.message}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="lname">ResourceID</label>
        <br />
        <input
          type="text"
          id="lname"
          name="resourceId"
          className="Forminput"
          defaultValue={user.resourceId}
          onChange={handleInput}
        />{" "}
        <br />
        <label htmlFor="lname">Timestamp</label>
        <br />
        {/* <div className="dates-time"> */}
        <input
          type="date"
          id="lname"
          name="date"
          defaultValue={user.timestamp}
          onChange={handleInput}
          className="date Forminput"
        />
        <input
          type="time"
          id="lname"
          name="time"
          defaultValue={user.timestamp}
          onChange={handleInput}
          className="time Forminput"
        />
        {/* </div> */}
        <br />
        <label htmlFor="lname">TraceID</label>
        <br />
        <input
          type="text"
          id="lname"
          name="traceID"
          className="Forminput"
          defaultValue={user.traceID}
          onChange={handleInput}
        />{" "}
        <br />
        <label htmlFor="lname">SpanID</label>
        <br />
        <input
          type="text"
          id="lname"
          name="spanID"
          className="Forminput"
          defaultValue={user.spanID}
          onChange={handleInput}
        />{" "}
        <br />
        <label htmlFor="lname">Commit</label>
        <br />
        <input
          type="text"
          id="lname"
          name="commit"
          className="Forminput"
          defaultValue={user.commit}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="lname">ParentResourceId</label>
        <br />
        <input
          type="text"
          id="lname"
          name="parentResourceId"
          className="Forminput"
          defaultValue={user.parentResourceId}
          onChange={handleInput}
        />
        <br />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
