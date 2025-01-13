import React from "react";

const ContactView = () => {
  return (
    <>
<div className="container">
  <div className="row justify-content-center">
  
    <div className="col-lg-8 col-md-10">
    <div className="text-end my-2"><button type="button" class="btn btn-success">Success</button></div>

      <div className="card mb-3">
        <div className="row g-0 align-items-center">
          <div className="col-md-3 text-center">
            <img src="https://picsum.photos/200/300?grayscale" className="img-fluid rounded-circle contactPic" alt="Profile Picture" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">Mike Anamendolla</h5>
              <p className="card-text">
                <i className="fas fa-map-marker-alt"></i> 5842 Hillcrest Rd<br />
                <i className="fas fa-phone"></i> (870) 288-4149<br />
                <i className="fas fa-envelope"></i> mike.ana@example.com
              </p>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <i className="fas fa-pen mx-2 lapiz" />
            <i className="fas fa-trash mx-2 papelera" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ContactView;
