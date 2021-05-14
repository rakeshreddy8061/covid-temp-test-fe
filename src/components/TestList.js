import React, { Fragment, useEffect, useState } from 'react';
import TestEdit from './TestEdit';

const TestList = () => {

  const [tests, setTests] = useState([]);

  // delete test

  const deleteTest = async id => {
    try {
      const deleteTest = await fetch(`http://localhost:8000/test/${id}`, {
        method: "DELETE"
      })
      setTests(tests.filter(test => test.test_id !== id))
    } catch (err) {
      console.error(err.message);
    }
  }

  // Getting all the test list

  const getTests = async () => {
    try {
      const response = await fetch ("http://localhost:8000/test");
      const jsonData = await response.json();
      setTests(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

useEffect(() => {
    getTests();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Temperature</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(test => (
            <tr key={test.test_id}>
              <td>{test.name}</td>
              <td>{test.temp}</td>
              <td><TestEdit test={test}/></td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTest(test.test_id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TestList;