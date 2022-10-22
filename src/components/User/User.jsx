import React from "react";
import My from "./My.jpg";
import "./User.css"

function User() {
  return (
    <>
      <div
        className="container-fluid mt-2"
        style={{
          display: "flex",
          alignItems: "center",
          height: '10vh'
        }}
      >
        <img
          className="mx-2"
          src={My}
          alt=""
          style={{
            borderRadius: "100%",
            width: "50px",
            height: "50px",
          }}
        />
        <h5>Bipangshu Saha</h5>

        <button
          className="btn btn-primary ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Appointment Schedule
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Offcanvas right
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
        <div className="col  border">
            <h6 className="mb-4">Information</h6>
            <div className="row my-2">
              <div className="col border">Scholar ID <br /> <strong>2112067</strong></div>
              <div className="col border">Height <br /> <strong>178 cm</strong></div>
            </div>
            <div className="row my-2">
              <div className="col border">Weight <br /> <strong>78 kg</strong></div>
              <div className="col border">Age <br /> <strong>19 yrs</strong></div>
            </div>
            <div className="row my-2">
              <div className="col border">Sex <br /> <strong>Male</strong></div>
              <div className="col border">Blood <br /> <strong>B+</strong></div>
            </div>
          </div>
          <div className="col border">
            <h6 className="mb-4">Chronic Illness</h6>
            <div className="row my-2">
              <div className="col border">Kode <br /> <strong>D64.9</strong></div>
              <div className="col border">Medicine <br /> <strong>Meranioeh</strong></div>
            </div>
            <div className="row my-2">
              <div className="col border">Name <br /> <strong>Diabetes</strong></div>
              <div className="col border">Insulin <br /> <strong>SGTL2 inhibitors</strong></div>
            </div>
            <div className="row my-2">
              <div className="col">Diagonosed <br /> <strong>13.06.2011</strong></div>
              <div className="col">Treatments <br /> <strong>Insulin Pump</strong></div>
            </div>
          </div>
        </div>

        <div className="row my-5">
        <div className="col border">
            <h6 className="mb-4">Temperature</h6>
            
          </div>
          <div className="col border">
            <h6 className="mb-4">Glucose</h6>
            {/* <div className="row my-2">
              <div className="col">Scholar ID <br /> <strong>2112067</strong></div>
              <div className="col">Height <br /> <strong>178 cm</strong></div>
            </div>
            <div className="row my-2">
              <div className="col">Weight <br /> <strong>78 kg</strong></div>
              <div className="col">Age <br /> <strong>19 yrs</strong></div>
            </div>
            <div className="row my-2">
              <div className="col">Sex <br /> <strong>Male</strong></div>
              <div className="col">Blood <br /> <strong>B+</strong></div>
            </div> */}
          </div>
        </div>

        <div className="row my-5">
        <div className="col col-lg-8 border">
            <h6 className="mb-4">Heart Rate</h6>
            {/* <div className="row my-2">
              <div className="col">Scholar ID <br /> <strong>2112067</strong></div>
              <div className="col">Height <br /> <strong>178 cm</strong></div>
            </div>
            <div className="row my-2">
              <div className="col">Weight <br /> <strong>78 kg</strong></div>
              <div className="col">Age <br /> <strong>19 yrs</strong></div>
            </div>
            <div className="row my-2">
              <div className="col">Sex <br /> <strong>Male</strong></div>
              <div className="col">Blood <br /> <strong>B+</strong></div>
            </div> */}
          </div>
        </div>
        
      </div>
    </>
  );
}

export default User;