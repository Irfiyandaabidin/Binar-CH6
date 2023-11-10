import React from "react";
import { Link } from "react-router-dom";
import imgMercedes from "../assets/Mercedes.png";
import imgHappyGirlCircle from "../assets/HappyGirlCircle.png";

const Jumbotron = () => {
  return (
    <div>
      <section>
        <div className="container-fluid" style={{ backgroundColor: "#F1F3FF",paddingBottom: "40px" }}>
          <div
            className="row align-items-center"
            style={{ paddingTop: "37px"}}
          >
            <div className="col-md-6 col-our-service-1">
              <h1 style={{ fontSize: 36 }}>
                Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
              </h1>
              <p style={{ margin: "16px 0 16px 0" }}>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to={"/cars"} className="btn btn-success">Mulai Sewa Mobil</Link>
            </div>
            <div className="col position-relative end-0 d-flex">
              <div
                className="position-absolute bottom-0 end-0 bg-color-primary"
                style={{
                  width: "100%",
                  height: "55%",
                  borderRadius: "60px 0px 0px 0px",
                }}
              ></div>
              <img
                src={imgMercedes}
                style={{ zIndex: 2, width: "100%", height: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;
