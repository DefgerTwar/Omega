import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"

import Senai from "../assets/Home/Hero/Senai.png"

export const CertificateSlider = (props: { certificates: Array<string> }) => {
  return (
    <Swiper
      className="mySwiper"
      speed={10000}
      autoplay={{ delay: 1 }}
      freeMode
      loop
      modules={[Autoplay, FreeMode]}
      slidesPerView={"auto"}
      spaceBetween={64}
    >
      {props.certificates.map((name) => (
        <SwiperSlide className="!w-max" key={name}>
          <div className="flex items-center gap-4">
            <img src={Senai.src} width="64" height="64" className="size-16" />
            <p>{name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
