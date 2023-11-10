import imgHappyGirl from "../assets/HappyGirl.png";
import imgThumbsUp from "../assets/icon_thumbs_up.png";
import imgPrice from "../assets/icon_price.png";
import img24Hrs from "../assets/icon_24hrs.png";
import imgProfessional from "../assets/icon_professional.png";
import imgImgPhoto from "../assets/img_photo.png";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import { CarContext } from "../store/car-context";
import { useContext } from "react";

const Dashboard = () => {
  const { getCars, items } = useContext(CarContext)
  getCars()
  return (
    <>
      <Navbar />
      <Jumbotron />
      <section id="our-service" style={{marginTop: "100px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center position-relative">
              <img
                style={{ position: "absolute", height: "70%" }}
                src="assets/HappyGirlCircle.png"
                alt=""
              />
              <img src={imgHappyGirl} style={{ height: "70%" }} alt="" />
            </div>
            <div className="col-md-6">
              <h2 style={{ fontSize: "24px" }}>
                Best Car Rental for any kind of trip in Yogyakarta!
              </h2>
              <p>
                Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul style={{ listStyle: `url('assets/fi_check.svg')` }}>
                <li>
                  <p>Sewa Mobil Dengan Supir di Yogyakarta 12 Jam</p>
                </li>
                <li>
                  <p>Sewa Mobil Lepas Kunci di Yogyakarta 24 Jam</p>
                </li>
                <li>
                  <p>Sewa Mobil Jangka Panjang Bulanan</p>
                </li>
                <li>
                  <p>Gratis Antar - Jemput Mobil di Bandara</p>
                </li>
                <li>
                  <p>Layanan Airport Transfer/Drop In Out</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container" id="why-us">
        <h1 style={{ fontSize: "24px" }}>Why Us?</h1>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-3" style={{ marginBottom: "16px" }}>
            <div className="card" style={{ width: "100%", height: "190px" }}>
              <div className="card-body">
                <img
                  src={imgThumbsUp}
                  alt="thumbs-up-icon"
                  style={{ width: "32px", marginBottom: "13px" }}
                />
                <h5 className="card-title" style={{ fontSize: "16px" }}>
                  Mobil Lengkap
                </h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" style={{ marginBottom: "16px" }}>
            <div className="card" style={{ width: "100%", height: "190px" }}>
              <div className="card-body">
                <img
                  src={imgPrice}
                  alt="price-icon"
                  style={{ width: "32px", marginBottom: "13px" }}
                />
                <h5 className="card-title" style={{ fontSize: "16px" }}>
                  Harga Murah
                </h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" style={{ marginBottom: "16px" }}>
            <div className="card" style={{ width: "100%", height: "190px" }}>
              <div className="card-body">
                <img
                  src={img24Hrs}
                  alt="24hrs-icon"
                  style={{ width: "32px", marginBottom: "13px" }}
                />
                <h5 className="card-title" style={{ fontSize: "16px" }}>
                  Layanan 24 Jam
                </h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" style={{ marginBottom: "16px" }}>
            <div className="card" style={{ width: "100%", height: "190px" }}>
              <div className="card-body">
                <img
                  src={imgProfessional}
                  alt="professional-icon"
                  style={{ width: "32px", marginBottom: "13px" }}
                />
                <h5 className="card-title" style={{ fontSize: "16px" }}>
                  Sopir Profesional
                </h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="testimonial">
        <div className="text-center" style={{ marginTop: "60px" }}>
          <h1 style={{ fontSize: "24px" }}>Testimonial</h1>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-9 mx-auto my-5">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner rounded-2">
                <div className="carousel-item active">
                  <div
                    className="w-100 h-100 row px-5 py-2 align-items-center"
                    style={{ backgroundColor: "#F1F3FF" }}
                  >
                    <div className="col-md-2 py-2">
                      <img src={imgImgPhoto} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-10">
                      <div className="d-flex">
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus fugiat sit nihil tempore praesentium, voluptate
                      doloremque, sunt quos iusto adipisci nemo provident quidem
                      consequuntur cum eum! Vitae inventore placeat praesentium.
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="w-100 h-100 row px-5 py-2 align-items-center"
                    style={{ backgroundColor: "#F1F3FF" }}
                  >
                    <div className="col-md-2 py-2">
                      <img src={imgImgPhoto} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-10">
                      <div className="d-flex">
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ fontSize: "25px" }}>&#9733;</p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus fugiat sit nihil tempore praesentium, voluptate
                      doloremque, sunt quos iusto adipisci nemo provident quidem
                      consequuntur cum eum! Vitae inventore placeat praesentium.
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="w-100 h-100 row px-5 py-2 align-items-center"
                    style={{ backgroundColor: "#F1F3FF" }}
                  >
                    <div className="col-md-2 py-2">
                      <img src={imgImgPhoto} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-10">
                      <div className="d-flex">
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ color: "yellow", fontSize: "25px" }}>
                          &#9733;
                        </p>
                        <p style={{ fontSize: "25px" }}>&#9733;</p>
                        <p style={{ fontSize: "25px" }}>&#9733;</p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus fugiat sit nihil tempore praesentium, voluptate
                      doloremque, sunt quos iusto adipisci nemo provident quidem
                      consequuntur cum eum! Vitae inventore placeat praesentium.
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div
          className="text-center bg-color-primary"
          style={{ color: "white", padding: "64px 10px", borderRadius: "13px" }}
        >
          <h1>Sewa Mobil di Yogyakarta Sekarang</h1>
          <div style={{ padding: "16px 0px" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit
              culpa eos expedita porro ad, aspernatur voluptatum?
            </p>
            <p>
              Fugit porro nihil ullam dolores accusamus, esse voluptatem.
              Reiciendis consectetur eveniet quaerat magni?
            </p>
          </div>
          <button className="btn btn-success">Mula Sewa Mobil</button>
        </div>
      </section>

      <section className="container" id="faq">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6">
            <h1>Frequently Asked Question</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae dolores incidunt, alias similique possimus dicta in ex
              aliquam, illum consequuntur eius sed tenetur non harum, eaque
              officia laborum nobis quo.
            </p>
          </div>
          <div className="col-md-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first items accordion body.</strong> It
                    is shown by default until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second items accordion body.</strong>{" "}
                    It is hidden by default until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the fourth items accordion body.</strong>{" "}
                    It is hidden by default until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-2">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the fifth items accordion body.</strong> It
                    is hidden by default until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
