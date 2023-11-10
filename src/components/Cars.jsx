import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import { CarContext } from "../store/car-context";

const Cars = () => {
  const [filter, setFilter] = useState({});
  const { getCars, cars } = useContext(CarContext);
  const [filterCars, setFilterCars] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getCars();
    // console.log(cars);
    console.log("masuk");
    console.log(filterCars);
  }, [filterCars]);

  const onclickFilter = (e) => {
    e.preventDefault();
    setIsloading(true)
    const target = e.target;
    const newFilter = {
      availableAt: target.availableAt.value,
      capacity: target.capacity.value,
      available: target.available.value,
    };
    setFilter(newFilter);
    const filteredCars = cars.filter((car) => {
      return (
        new Date(car.availableAt) > new Date(filter.availableAt) &&
        car.capacity >= filter.capacity &&
        car.available.toString() == filter.available
      );
    });
    setFilterCars(filteredCars);
    setIsloading(false)
  };

  const viewFilter = (car) => (
    <div
      className="col-md-4 col-lg-3 py-4 d-flex justify-content-center"
      key={car.id}
    >
      <div className="card shadow" style={{ width: "18rem" }}>
        <img
          src={car.image}
          className="card-img-top mt-4 text-center"
          alt={car.manufacture}
        />
        <div className="card-body">
          <h5 className="card-title fs-6">
            {car.manufacture} / {car.model}
          </h5>
          <h5 className="card-title fs-5 fw-bold">
            Rp. {car.rentPerDay} / hari
          </h5>
          <p className="cars__p">{car.description}</p>
          <div className="row">
            <div className="col-1">
              <img src="#" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{car.capacity} orang</div>
          </div>
          <div className="row mt-2">
            <div className="col-1">
              <img src="#" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{car.transmission}</div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-1">
              <img src="#" width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">Tahun {car.year}</div>
          </div>
        </div>
        <a
          href="/not-found"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Pilih Mobil
        </a>
      </div>
    </div>
  );
  return (
    <div>
      <Navbar />
      <div style={{}} className="justify-content-center">
        <Jumbotron />
        <section className="search d-flex justify-content-center">
          <form className="" onSubmit={onclickFilter}>
            <div className="row shadow-lg bg-light">
              <div className="col-lg-12 col-12">
                <div className="row search__card mx-lg-5 py-3 px-4">
                  <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                    <label>Tipe Driver</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="tipeDriver"
                      name="available"
                      defaultValue={null}
                    >
                      <p style={{ color: "red" }}>Please select driver type.</p>
                      <option value="default" selected>
                        Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                      </option>
                      <option value={true}>Dengan Supir</option>
                      <option value={false}>Tanpa Supir (Lepas Kunci)</option>
                    </select>
                    <p style={{ color: "red" }}>
                      Please enter type driver.
                    </p>
                  </div>
                  <div className="col-lg-auto col-xl-auto col-md-auto">
                    <label>Tanggal</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Pilih Tanggal"
                      id="tanggal"
                      name="availableAt"
                    />
                    <p style={{ color: "red" }}>Please select rental date.</p>
                  </div>
                  <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                    <label>Pilih Waktu</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="waktuJemput"
                      defaultValue={null}
                    >
                      <option value="false" selected>
                        Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </option>
                      <option value="08:00">08.00 WIB</option>
                      <option value="09:00">09.00 WIB</option>
                      <option value="10:00">10.00 WIB</option>
                      <option value="11:00">11.00 WIB</option>
                      <option value="12:00">12.00 WIB</option>
                    </select>
                  </div>
                  <div className="col-lg-auto col-xl-auto col-md-auto">
                    <label className="fw-light">
                      Jumlah Penumpang
                    </label>
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control border-end-0"
                        placeholder="Jumlah Penumpang"
                        id="jumlahPenumpang"
                        name="capacity"
                        defaultValue={null}
                      />
                      <span className="input-group-text bg-white">
                        <img width="20px" alt="" />
                      </span>
                    </div>
                    <p style={{ color: "red" }}>
                      Please enter the number of passengers.
                    </p>
                  </div>
                  <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="load-btn"
                    >
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
      <section className="row mt-5 justify-content-center">
        <div className="col-lg-10 col-md-9">
          <div className="row">
            {isLoading
              ? "Loading"
              : Object.keys(filter).length == 0
              ? cars.map((car) => viewFilter(car))
              : filterCars.map((car) => viewFilter(car))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cars;
