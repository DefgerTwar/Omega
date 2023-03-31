import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Yeseva_One } from "next/font/google";
import Link from "next/link";

const style = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const ImageCarousel: FunctionComponent<{ images: string[] }> = ({
  images,
}) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image} className="!h-[285px] bg-transparent">
          <Image
            width={285}
            height={285}
            src={image}
            alt="Imagem do projeto"
            // className="h-[265px] w-[265px] md:w-[688px] object-cover"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const TestimonialCarousel: FunctionComponent<{
  testimonials: ReadonlyArray<{ name: string; description: string }>;
}> = ({ testimonials }) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[Pagination]}
      className="testimonalSwiper"
    >
      {testimonials.map(({ name, description }) => (
        <SwiperSlide key={name} className="!w-[100%] bg-transparent">
          <div
            className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-400 p-6 dark:bg-gray-700 md:flex-row md:items-start"
            key={name}
          >
            <div className="w-max rounded-full bg-gray-200 p-3 dark:bg-gray-900">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.1154 0.00390625H3.88462C2.98696 0.00390625 2.12607 0.360498 1.49133 0.995237C0.856592 1.62998 0.5 2.49087 0.5 3.38852V40.6193C0.5 41.5169 0.856592 42.3778 1.49133 43.0126C2.12607 43.6473 2.98696 44.0039 3.88462 44.0039H41.1154C42.013 44.0039 42.8739 43.6473 43.5087 43.0126C44.1434 42.3778 44.5 41.5169 44.5 40.6193V3.38852C44.5 2.49087 44.1434 1.62998 43.5087 0.995237C42.8739 0.360498 42.013 0.00390625 41.1154 0.00390625ZM41.1154 40.6193H3.88462V3.38852H41.1154V40.6193ZM15.7308 18.6193V32.1578C15.7308 32.6066 15.5525 33.037 15.2351 33.3544C14.9177 33.6718 14.4873 33.8501 14.0385 33.8501C13.5896 33.8501 13.1592 33.6718 12.8418 33.3544C12.5245 33.037 12.3462 32.6066 12.3462 32.1578V18.6193C12.3462 18.1705 12.5245 17.74 12.8418 17.4226C13.1592 17.1053 13.5896 16.927 14.0385 16.927C14.4873 16.927 14.9177 17.1053 15.2351 17.4226C15.5525 17.74 15.7308 18.1705 15.7308 18.6193ZM34.3462 24.5424V32.1578C34.3462 32.6066 34.1679 33.037 33.8505 33.3544C33.5331 33.6718 33.1027 33.8501 32.6538 33.8501C32.205 33.8501 31.7746 33.6718 31.4572 33.3544C31.1398 33.037 30.9615 32.6066 30.9615 32.1578V24.5424C30.9615 23.4203 30.5158 22.3442 29.7224 21.5508C28.929 20.7573 27.8528 20.3116 26.7308 20.3116C25.6087 20.3116 24.5326 20.7573 23.7392 21.5508C22.9457 22.3442 22.5 23.4203 22.5 24.5424V32.1578C22.5 32.6066 22.3217 33.037 22.0043 33.3544C21.687 33.6718 21.2565 33.8501 20.8077 33.8501C20.3589 33.8501 19.9284 33.6718 19.611 33.3544C19.2937 33.037 19.1154 32.6066 19.1154 32.1578V18.6193C19.1175 18.2048 19.2717 17.8054 19.5486 17.497C19.8256 17.1886 20.2062 16.9926 20.6181 16.9462C21.03 16.8998 21.4446 17.0061 21.7833 17.2451C22.122 17.4841 22.3612 17.8391 22.4556 18.2428C23.6004 17.4661 24.9351 17.016 26.3165 16.9408C27.6978 16.8655 29.0735 17.1679 30.2959 17.8156C31.5184 18.4632 32.5413 19.4316 33.2549 20.6167C33.9684 21.8019 34.3457 23.159 34.3462 24.5424ZM16.5769 12.6962C16.5769 13.1983 16.428 13.6891 16.1491 14.1065C15.8702 14.524 15.4737 14.8493 15.0099 15.0414C14.546 15.2336 14.0356 15.2838 13.5432 15.1859C13.0508 15.088 12.5985 14.8462 12.2435 14.4912C11.8885 14.1362 11.6467 13.6839 11.5488 13.1914C11.4508 12.699 11.5011 12.1886 11.6932 11.7248C11.8854 11.2609 12.2107 10.8645 12.6282 10.5856C13.0456 10.3066 13.5364 10.1578 14.0385 10.1578C14.7117 10.1578 15.3574 10.4252 15.8334 10.9013C16.3095 11.3773 16.5769 12.023 16.5769 12.6962Z"
                  fill="#FFC44C"
                />
              </svg>
            </div>

            <section className="flex flex-col gap-2 md:items-start">
              <h3
                className={`text-center text-2xl text-gray-50 dark:text-gray-300 md:text-3xl ${style.className}`}
              >
                {name}
              </h3>

              <p className="font-normal text-gray-50 dark:text-gray-300">
                {description}
              </p>
            </section>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const CertificationsCarousel: FunctionComponent<{
  certifications: ReadonlyArray<string>;
}> = ({ certifications }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 1800,
      }}
      // slidesPerView={{}}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={20}
      pagination={{
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[Pagination, Autoplay]}
      className="testimonalSwiper"
    >
      {certifications.map((name) => (
        <SwiperSlide key={name} className="bg-transparent">
          <a
            href="https://www.linkedin.com/in/engenheiroeletrico-jeferson/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAA9E1pgBQZWGzz_geHo4uQN9IyuiTN2x6Nc"
            target="_blank"
            className="flex items-center gap-2"
            key={name}
          >
            <Image
              width={56}
              height={56}
              src="/senai.png"
              alt="Senai"
              className="shrink-0"
            />

            <h4 className={`text-left text-base dark:text-gray-300`}>{name}</h4>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const ExperiencesCarousel: FunctionComponent<{
  experiences: ReadonlyArray<{ name: string; description: string }>;
}> = ({ experiences }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3800,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={20}
      pagination={{
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[Pagination, Autoplay]}
      className="testimonalSwiper"
    >
      {experiences.map(({ name, description }) => (
        <SwiperSlide key={name} className="bg-transparent">
          <a
            href="https://www.linkedin.com/in/engenheiroeletrico-jeferson/details/experience/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAA9E1pgBQZWGzz_geHo4uQN9IyuiTN2x6Nc"
            target="_blank"
            className="flex flex-col gap-2"
            key={name}
          >
            <h4
              className={`text-left text-xl text-gray-50 dark:text-gray-300 ${style.className}`}
            >
              {name}
            </h4>

            <p className="text-base text-gray-50 dark:text-gray-300">
              {description}
            </p>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
