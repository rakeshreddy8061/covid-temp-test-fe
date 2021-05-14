import React, { Fragment, useState } from 'react';

const TestInput = () => {

  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");

  // Submitting new test

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, temp };
      const response = await fetch("http://localhost:8000/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className = "text-center mt-5">Covid Test Temperatures List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input placeholder="Name" className="form-control mx-2" type="text" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Temperature" className="form-control mx-2" type="number" step="0.01" value={temp} onChange={e => setTemp(e.target.value)} />
        <button className="btn btn-success mx-2">Submit</button>
      </form>
    </Fragment>
  );
};

export default TestInput;