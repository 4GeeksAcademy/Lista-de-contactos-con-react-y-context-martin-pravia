import React from "react";

const AddContactForm = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-5 text-center">
            <h1> Add a new Contact</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-6 ">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContactForm;
