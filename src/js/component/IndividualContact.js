import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const IndividualContact = ({contact}) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <li className="row g-0 align-items-center border">
        <div className="col-md-3 text-center my-2">
          <img
            src="https://picsum.photos/200/300?grayscale"
            className="img-fluid rounded-circle contactPic"
            alt="Profile Picture"
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text">
              <i className="fas fa-map-marker-alt"></i> {contact.address}
              <br />
              <i className="fas fa-phone"></i> {contact.phone}
              <br />
              <i className="fas fa-envelope"></i> {contact.email}
            </p>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <Link>
            <i className="fas fa-pen mx-2 lapiz" />
          </Link>
          <Link>
            <i className="fas fa-trash mx-2 papelera" />
          </Link>
        </div>
      </li>
    </>
  );
};

export default IndividualContact;
