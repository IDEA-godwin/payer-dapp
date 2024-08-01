'use client'

import Image from "next/image";
import Header from "~/components/header";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PaymentForm from "~/components/payment-form";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        {/*// <!--Hero start-->*/}
        <section className="bg-primary-dark pt-9 right-slant-shape" data-cue="fadeIn">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12">
                <div className="text-center text-lg-start mb-7 mb-lg-0" data-cues="slideInDown">
                  <div className="mb-4">
                    <h1 className="mb-5 display-5 text-white-stable">
                      Energy Payments <br />
                      <span className="text-pattern-line text-warning">at it's Finest</span>
                    </h1>
                    <p className="mb-0 text-white-stable lead">
                      Payment Gateway for all TechandSun_NG stations on the M3tering Protocol.
                    </p>
                  </div>
                  <div data-cues="slideInDown">
                    <a href="#starter" className="btn btn-primary me-2">Get Started</a>
                    <a href="#" className="btn btn-outline-warning">Contact Support</a>
                  </div>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 col-12">
                <div className="position-relative z-1 pt-lg-9" data-cue="slideInRight">
                  <div className="position-relative">
                    <img src="/images/logo/africanpaying.jpg" alt="video" className="img-fluid rounded-3"/>
                    <a
                      href="https://www.youtube.com/watch?v=QD8xBSOZuRM&t=20s"
                      className="play-btn glightbox position-absolute top-50 start-50 translate-middle icon-shape icon-xl rounded-circle text-primary">
                      <i className="bi bi-play-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// <!--Hero start-->*/}

        {/*// <!--Featured in start-->*/}
        <div className="my-xl-9 my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-12" data-cue="fadeIn">
                <div className="text-center mb-4 mb-lg-7">
                  <small className="text-uppercase fw-semibold ls-md">Powered By Our Partners</small>
                </div>
                <Swiper
                  spaceBetween={100} slidesPerView={3} centeredSlides={true}
                  autoplay={{delay: 2000, disableOnInteraction: true}} className={'swiper container'}
                  modules={[Autoplay, Pagination, Navigation]} centeredSlidesBounds={true}
                >
                  <SwiperSlide>
                    <figure className={'d-flex justify-content-center align-items-center'}>
                      <Image src="/images/logo/taslogo_inverted-removebg-preview.png" width={47} height={47} className="logoguide" alt="logo"/>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure className={'d-flex justify-content-center align-items-center'}>
                      <Image src="/images/logo/dex.png" className="logoguide" alt="logo" width={60} height={60}/>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure className={'d-flex justify-content-center align-items-center'}>
                      <Image src="/images/logo/m3tering protocol.png" width={47} height={47} className="logoguide" alt="logo"/>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure className={'d-flex justify-content-center align-items-center'}>
                      <Image src="/images/logo/Arbitrum.png" className="logoguide" alt="logo" width={47} height={47} />
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure className={'d-flex justify-content-center align-items-center'}>
                      <Image src="/images/logo/greenpill.png" className="logoguide" alt="logo" width={47} height={47} />
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <figure className={'d-flex justify-content-center align-items-center'}>
                      <Image src="/images/logo/Switch Electric PNG croped.png.webp" className="logoguide " width={47} height={47} alt="logo" />
                    </figure>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/*// <!--Featured in end-->*/}

        {/*// <!--Get block card start-->*/}
        <section className="my-xl-4 py-4">
          <div className="container" data-cue="fadeIn">
            <div className="row">
              <div className="col-lg-5 col-md-12" data-cue="fadeIn">
                <div className="mb-xl-7 mb-5">
                  <h2 className="mb-3">
                    Get Started in <br />
                    <span className="text-primary">3 simple steps</span>
                  </h2>
                  <p className="mb-0">All payment here processed on the Behalf of TechandSun_NG</p>
                </div>
              </div>
            </div>
            <div className="table-responsive-xl">
              <div className="row flex-nowrap pb-4 pb-lg-0 me-5 me-lg-0">
                <div className="col-lg-4 col-md-6 col-12" data-cue="slideInLeft">
                  <div className="p-xl-5">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                      <div
                        className="icon-xl icon-shape rounded-circle bg-primary border border-primary-subtle border-4 text-white-stable fw-semibold fs-3">1
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                          className="bi bi-arrow-right text-body-tertiary" viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="h4">Fill The Below Form</h3>
                    <p className="mb-0">Please fill in the amount of flat (Naira) you are paying</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-cue="slideInLeft">
                  <div className="p-xl-5">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                      <div
                        className="icon-xl icon-shape rounded-circle bg-primary border border-primary-subtle border-4 text-white-stable fw-semibold fs-3">2
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                          className="bi bi-arrow-right text-body-tertiary" viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </span>
                    </div>

                    <h3 className="h4">Complete Your Payment on Paystack</h3>
                    <p className="mb-0">You will be redirected to paystack to complete your payment, please your
                      payment through any of the available payment options on the gateway</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-cue="slideInLeft">
                  <div className="p-xl-5">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                      <div
                        className="icon-xl icon-shape rounded-circle bg-primary border border-primary-subtle border-4 text-white-stable fw-semibold fs-3">3
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                          className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                          />
                        </svg>
                      </span>
                    </div>

                    <h3 className="h4">Show Your Paystack receipt</h3>
                    <p className="mb-0">Show the TAS station operator your receipt and Hand over your Device for
                      charging, that's all</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12" data-cue="zoomIn">
                <div className="text-center my-5" id="starter">
                  <a href="#starter" className="btn btn-outline-primary">Let's Go!</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// <!--Get block card end-->*/}

        <PaymentForm />

        {/*// <!--Call to action start-->*/}
        <section>
          <div
            style={{
              backgroundImage: "url(/images/pattern/cta-pattern.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className="py-7 bg-primary-dark">
            <div className="container my-lg-7" data-cue="zoomIn">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="text-center mb-5">
                    <h2 className="text-white-stable mb-3">Learn More About US!</h2>
                    <p className="mb-0 text-white-50">
                      Our Goal at TechandSun_NG and Greenpayer is to Make electricity from the sun accessible on
                      demand one step at a time!
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center">
                    <a href="https://x.com/techandsun_ng" className="btn btn-primary">Ask Us Anything!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// <!--Call to action end-->*/}
      </main>
    </>
  );
}
