import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContactForm = () => {
  const {store, actions} = useContext(Context)
  const {id} = useParams()
  let navigate = useNavigate()

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[address, setAddress] = useState("");

  function guardarInfo(e) {
    e.preventDefault()
  }

  const dataContact = {
    name: name,
    phone: phone,
    email: email,
    address: address
  }


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
                Nombre Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Ingrese su nombre completo..."
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
            </div>
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">
                Teléfono
              </label>
              <input
                type="phone"
                className="form-control"
                id="inputPhone"
                placeholder="Ingrese su Teléfono..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="Ingrese su Email..."
              />
              </div>
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
    </>
  );
};

export default AddContactForm;
