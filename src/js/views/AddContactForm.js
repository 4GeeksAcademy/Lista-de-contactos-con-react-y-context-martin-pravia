import React from "react";
import { Link } from "react-router-dom";

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
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Ingrese su nombre..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputLastname..." className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                placeholder="Ingrese su apellido..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Ingrese su Email..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputDireccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="InputDireccion"
                placeholder="Ingrese su dirección..."
              />
              <div className="my-3">
                <button type="submit" class="btn btn-primary mb-3">
                  Enviar
                </button>
              </div>

              <div className="mb-3">
                <Link to="/">Volver a la lista de contactos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContactForm;
