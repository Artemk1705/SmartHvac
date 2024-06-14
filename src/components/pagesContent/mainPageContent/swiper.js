import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import ACMaintenece from "../../../assets/images/Services/AC Maintenance.png";
import ACRepair from "../../../assets/images/Services/AC Repair.png";
import ACReplace from "../../../assets/images/Services/AC Replace.png";
import MiniInstall from "../../../assets/images/Services/Mini-split install.png";
import MiniPepair from "../../../assets/images/Services/Mini-split repair.png";
import FurnaceRepair from "../../../assets/images/Services/Furnace Repair.png";
import FurnaceInstall from "../../../assets/images/Services/Furnace install.png";
import Maintenence from "../../../assets/images/Services/Reg Maintenance.png";
import EmergencyService from "../../../assets/images/Services/Emergency service.png";

const styles = {
  img: {
    maxWidth: "100%",
    height: "auto",
  },
};

const SwiperComp = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className="swiper_cont"
      loop={true}
      spaceBetween={25}
      slidesPerView={2}
      centeredSlides={true}
      navigation
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      speed={700}
      breakpoints={{
        300: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 50,
        },
        480: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 50,
        },
        500: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 150,
        },
        550: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 150,
        },
        675: {
          centeredSlides: true,
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 250,
        },
        850: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 150,
        },
        1300: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 100,
        },
        1400: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 1,
        },
      }}
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_AC_main"
                src={ACMaintenece}
                style={styles.img}
                alt="Work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>AC Maintenance</b>
              </h4>
              <p>
                Regular AC maintenance is an essential aspect of ensuring
                optimal performance and longevity for your air conditioner.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_AC_rep"
                src={ACRepair}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>AC Repair</b>
              </h4>
              <p>
                When it comes to air conditioning systems, the decision to
                repair or replace an old unit can be a difficult one.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_AC"
                src={ACReplace}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>AC Replacement/New installation</b>
              </h4>
              <p>
                Selecting the appropriate air conditioning (AC) equipment is
                crucial for maintaining comfort and energy efficiency in your
                home.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_Mini_inst"
                src={MiniInstall}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>Mini Split installation estimate</b>
              </h4>
              <p>
                Selecting the appropriate AC/HP (Heat Pump) mini split system is
                crucial for efficient cooling and heating in your home.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_Mini_split"
                src={MiniPepair}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>Mini Split Repair/Maintenance</b>
              </h4>
              <p>
                Timely maintenance of your mini-split/heat pump system is vital
                for both your health and your budget.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_Fur_r"
                src={FurnaceRepair}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>Furnace repair</b>
              </h4>
              <p>
                While furnace maintenance is crucial, repairs may not always be
                worthwhile, especially considering the AFUE rating.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_Fur"
                src={FurnaceInstall}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b> Furnace/AC/Heat Pump Replacement/New installation</b>
              </h4>
              <p>
                Choosing the right furnace for your home is a significant
                decision, and the expertise of a SMART HVAC specialist can be
                invaluable throughout the process.{" "}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_Maint"
                src={Maintenence}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>Maintenence</b>
              </h4>
              <p>
                Regular maintenance of HVAC (Heating, Ventilation, and Air
                Conditioning) equipment and ventilation systems is crucial for
                both the health and longevity of the equipment.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <div className="round">
              <img
                className="photo_Emerg"
                src={EmergencyService}
                style={styles.img}
                alt="work"
              />
            </div>
            <div className="card_container">
              <h4 className="card_title">
                <b>Emergency service</b>
              </h4>
              <p>
                Introducing "Smart HVAC" - your reliable heating, ventilation,
                and air conditioning (HVAC) service provider offering top-notch
                Emergency service
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
