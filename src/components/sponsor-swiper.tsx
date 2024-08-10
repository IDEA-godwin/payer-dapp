'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SponsorSwiper() {

  return (
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
            <Image src="/images/logo/taslogo_inverted-removebg-preview.png" width={47} height={47} className="logoguide"
                   alt="logo"/>
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
            <Image src="/images/logo/Arbitrum.png" className="logoguide" alt="logo" width={47} height={47}/>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className={'d-flex justify-content-center align-items-center'}>
            <Image src="/images/logo/greenpill.png" className="logoguide" alt="logo" width={47} height={47}/>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className={'d-flex justify-content-center align-items-center'}>
            <Image src="/images/logo/Switch Electric PNG croped.png.webp" className="logoguide " width={47} height={47}
                   alt="logo"/>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className={'d-flex justify-content-center align-items-center'}>
            <Image src={'/images/logo/share-logo.png'} alt={'share logo'} width={47} height={47} />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
