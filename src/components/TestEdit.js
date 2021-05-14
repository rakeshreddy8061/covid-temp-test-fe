import React, { Fragment, useState } from 'react';


const TestEdit = ({test}) => {

  const [ name, setName ] = useState(test.name);
  const [ temp, setTemp ] = useState(test.temp);

  // Updating the Modal Edit box to default

  const onClick = (name, temp) => {
    name = setName(test.name);
    temp = setTemp(test.temp);
  }

  // Updating the existing test

  const updateTest = async (e) => {
    e.preventDefault();
    try {
      const body = { name, temp };
      const response = await fetch(`http://localhost:8000/test/${test.test_id}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return(
    <Fragment>
      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#id${test.test_id}`}>
        EDIT
      </button>
      <div className="modal fade" id={`id${test.test_id}`} tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="ststicBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Edit Test</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClick} ></button>
            </div>
            <div className="modal-body">
              <input type="text" classNameName="form-control" value={name} onChange={e => setName(e.target.value)} />
              <input type="number" step="0.01" classNameName="form-control" value={temp} onChange={e => setTemp(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={e => updateTest(e)} >EDIT</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onClick}>CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default TestEdit;