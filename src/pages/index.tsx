import { Montserrat, Yeseva_One } from "next/font/google";

import Hero from "../../public/hero.png";
import Image from "next/image";
import {
  CertificationsCarousel,
  ExperiencesCarousel,
  ImageCarousel,
  TestimonialCarousel,
} from "../components/Carousel";

const style = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
});

const reading = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const services = [
  {
    src: "/img1.png",
    icon: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2164_4738)">
          <path
            d="M17.6875 28.1289V25.0039C17.6875 24.5895 17.8521 24.1921 18.1451 23.8991C18.4382 23.606 18.8356 23.4414 19.25 23.4414C19.6644 23.4414 20.0618 23.606 20.3549 23.8991C20.6479 24.1921 20.8125 24.5895 20.8125 25.0039V28.1289C20.8125 28.5433 20.6479 28.9407 20.3549 29.2338C20.0618 29.5268 19.6644 29.6914 19.25 29.6914C18.8356 29.6914 18.4382 29.5268 18.1451 29.2338C17.8521 28.9407 17.6875 28.5433 17.6875 28.1289ZM25.5 29.6914C25.9144 29.6914 26.3118 29.5268 26.6049 29.2338C26.8979 28.9407 27.0625 28.5433 27.0625 28.1289V23.4414C27.0625 23.027 26.8979 22.6296 26.6049 22.3366C26.3118 22.0435 25.9144 21.8789 25.5 21.8789C25.0856 21.8789 24.6882 22.0435 24.3951 22.3366C24.1021 22.6296 23.9375 23.027 23.9375 23.4414V28.1289C23.9375 28.5433 24.1021 28.9407 24.3951 29.2338C24.6882 29.5268 25.0856 29.6914 25.5 29.6914ZM31.75 29.6914C32.1644 29.6914 32.5618 29.5268 32.8549 29.2338C33.1479 28.9407 33.3125 28.5433 33.3125 28.1289V21.8789C33.3125 21.4645 33.1479 21.0671 32.8549 20.7741C32.5618 20.481 32.1644 20.3164 31.75 20.3164C31.3356 20.3164 30.9382 20.481 30.6451 20.7741C30.3521 21.0671 30.1875 21.4645 30.1875 21.8789V28.1289C30.1875 28.5433 30.3521 28.9407 30.6451 29.2338C30.9382 29.5268 31.3356 29.6914 31.75 29.6914ZM42.6875 15.6289V34.3789H44.25C44.6644 34.3789 45.0618 34.5435 45.3549 34.8366C45.6479 35.1296 45.8125 35.527 45.8125 35.9414C45.8125 36.3558 45.6479 36.7532 45.3549 37.0463C45.0618 37.3393 44.6644 37.5039 44.25 37.5039H27.0625V40.8984C28.105 41.267 28.9837 41.9923 29.5432 42.9461C30.1027 43.8998 30.307 45.0207 30.12 46.1105C29.933 47.2004 29.3668 48.189 28.5213 48.9017C27.6759 49.6144 26.6058 50.0054 25.5 50.0054C24.3942 50.0054 23.3241 49.6144 22.4787 48.9017C21.6332 48.189 21.067 47.2004 20.88 46.1105C20.693 45.0207 20.8973 43.8998 21.4568 42.9461C22.0163 41.9923 22.895 41.267 23.9375 40.8984V37.5039H6.75C6.3356 37.5039 5.93817 37.3393 5.64515 37.0463C5.35212 36.7532 5.1875 36.3558 5.1875 35.9414C5.1875 35.527 5.35212 35.1296 5.64515 34.8366C5.93817 34.5435 6.3356 34.3789 6.75 34.3789H8.3125V15.6289C7.4837 15.6289 6.68884 15.2997 6.10279 14.7136C5.51674 14.1276 5.1875 13.3327 5.1875 12.5039V9.37891C5.1875 8.5501 5.51674 7.75525 6.10279 7.1692C6.68884 6.58315 7.4837 6.25391 8.3125 6.25391H42.6875C43.5163 6.25391 44.3112 6.58315 44.8972 7.1692C45.4833 7.75525 45.8125 8.5501 45.8125 9.37891V12.5039C45.8125 13.3327 45.4833 14.1276 44.8972 14.7136C44.3112 15.2997 43.5163 15.6289 42.6875 15.6289ZM27.0625 45.3164C27.0625 45.0074 26.9709 44.7053 26.7992 44.4483C26.6275 44.1914 26.3835 43.9911 26.0979 43.8728C25.8124 43.7546 25.4983 43.7236 25.1952 43.7839C24.8921 43.8442 24.6137 43.993 24.3951 44.2116C24.1766 44.4301 24.0278 44.7085 23.9675 45.0116C23.9072 45.3147 23.9382 45.6288 24.0564 45.9143C24.1747 46.1999 24.375 46.4439 24.6319 46.6156C24.8889 46.7873 25.191 46.8789 25.5 46.8789C25.9144 46.8789 26.3118 46.7143 26.6049 46.4213C26.8979 46.1282 27.0625 45.7308 27.0625 45.3164ZM8.3125 12.5039H42.6875V9.37891H8.3125V12.5039ZM39.5625 15.6289H11.4375V34.3789H39.5625V15.6289Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2164_4738">
            <rect
              width="50"
              height="50"
              fill="white"
              transform="translate(0.5 0.00390625)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Desenvolvimento De Projetos",
    description:
      "Com as informações necessárias desenhamos o melhor projeto elétrico para valorizar sua construção.",
  },
  {
    src: "/img2.png",
    icon: (
      <svg
        width="46"
        height="43"
        viewBox="0 0 46 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.5894 18.8787L31.4136 5.61312C27.8947 2.10126 23.1263 0.128906 18.1548 0.128906C13.1833 0.128906 8.4149 2.10126 4.89601 5.61312L4.87843 5.63069L2.18898 8.40999C1.91038 8.70939 1.76027 9.10609 1.77088 9.51492C1.78149 9.92376 1.95197 10.3121 2.24572 10.5967C2.53948 10.8812 2.93309 11.0393 3.34205 11.0369C3.75102 11.0345 4.14274 10.8718 4.43312 10.5838L7.11476 7.81429C8.19365 6.73562 9.42483 5.82095 10.7691 5.09944L19.8511 14.1912L1.10109 32.9412C0.810832 33.2314 0.580582 33.576 0.423492 33.9552C0.266401 34.3343 0.185547 34.7408 0.185547 35.1512C0.185547 35.5616 0.266401 35.9681 0.423492 36.3473C0.580582 36.7264 0.810832 37.071 1.10109 37.3612L5.14211 41.4022C5.4323 41.6924 5.77683 41.9227 6.15602 42.0798C6.53521 42.2369 6.94163 42.3177 7.35207 42.3177C7.76251 42.3177 8.16893 42.2369 8.54812 42.0798C8.92731 41.9227 9.27184 41.6924 9.56203 41.4022L28.312 22.6522L31.1128 25.453L34.562 28.8983C34.8522 29.1885 35.1967 29.4188 35.5759 29.5759C35.9551 29.733 36.3615 29.8138 36.772 29.8138C37.1824 29.8138 37.5889 29.733 37.968 29.5759C38.3472 29.4188 38.6918 29.1885 38.982 28.8983L44.5855 23.2948C45.171 22.7094 45.5003 21.9155 45.501 21.0876C45.5017 20.2596 45.1739 19.4652 44.5894 18.8787ZM7.35109 39.1912L3.31203 35.1502L16.5933 21.869L20.6323 25.91L7.35109 39.1912ZM27.2066 19.3319L22.8433 23.6971L18.8023 19.66L23.1675 15.2948C23.3128 15.1496 23.428 14.9773 23.5067 14.7876C23.5853 14.5979 23.6258 14.3946 23.6258 14.1893C23.6258 13.984 23.5853 13.7806 23.5067 13.5909C23.428 13.4013 23.3128 13.2289 23.1675 13.0838L13.9214 3.83968C16.5928 3.08733 19.4163 3.06005 22.1017 3.76066C24.7871 4.46127 27.2374 5.86448 29.2007 7.82601L37.8374 16.5194L32.2183 22.1326L29.4175 19.3319C29.2724 19.1866 29.1001 19.0713 28.9104 18.9927C28.7207 18.9141 28.5174 18.8736 28.312 18.8736C28.1067 18.8736 27.9034 18.9141 27.7137 18.9927C27.524 19.0713 27.3517 19.1866 27.2066 19.3319ZM36.7769 26.6873L34.4331 24.3436L40.0308 18.7323L42.3745 21.076L36.7769 26.6873Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Instalações",
    description:
      "Executamos suas instalações elétricas com o menor tempo possível, ainda visando a qualidade do serviço.",
  },
  {
    src: "/img3.png",
    icon: (
      <svg
        width="41"
        height="42"
        viewBox="0 0 41 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.7898 9.48032C39.695 9.24606 39.5448 9.03828 39.3521 8.87481C39.1594 8.71133 38.9299 8.59704 38.6833 8.54173C38.4367 8.48643 38.1804 8.49175 37.9363 8.55725C37.6923 8.62276 37.4677 8.74648 37.282 8.91782L29.4109 16.1815L26.0456 15.4588L25.323 12.0936L32.5867 4.22251C32.758 4.03675 32.8817 3.81221 32.9472 3.56813C33.0127 3.32406 33.018 3.06774 32.9627 2.82116C32.9074 2.57458 32.7931 2.34509 32.6297 2.15238C32.4662 1.95966 32.2584 1.80948 32.0242 1.71469C29.8893 0.851087 27.5749 0.525013 25.2845 0.765121C22.9941 1.00523 20.7978 1.80417 18.8884 3.09175C16.979 4.37932 15.4151 6.11613 14.334 8.14956C13.2529 10.183 12.6878 12.4508 12.6882 14.7538C12.6857 16.6984 13.0846 18.6227 13.8601 20.4061L2.10032 30.5741C2.07103 30.5975 2.04368 30.6249 2.01634 30.6502C0.844102 31.8225 0.185547 33.4124 0.185547 35.0702C0.185547 35.891 0.347226 36.7038 0.661354 37.4622C0.975482 38.2206 1.43591 38.9097 2.01634 39.4901C2.59677 40.0705 3.28584 40.5309 4.04422 40.8451C4.80259 41.1592 5.61541 41.3209 6.43626 41.3209C8.09405 41.3209 9.68395 40.6623 10.8562 39.4901C10.8816 39.4647 10.9089 39.4354 10.9324 39.4081L21.0984 27.6444C23.2398 28.5844 25.5819 28.9755 27.9126 28.7823C30.2434 28.589 32.4891 27.8176 34.4465 26.5377C36.4039 25.2578 38.0112 23.51 39.1229 21.4524C40.2346 19.3948 40.8156 17.0925 40.8132 14.7538C40.8163 12.9463 40.4687 11.1554 39.7898 9.48032ZM26.7507 25.6913C24.9012 25.6887 23.0825 25.2184 21.4636 24.3241C21.15 24.1508 20.7863 24.0906 20.4336 24.1535C20.0808 24.2165 19.7605 24.3987 19.5261 24.6698L8.60814 37.3143C8.01732 37.8756 7.2306 38.1839 6.41572 38.1735C5.60084 38.1631 4.82227 37.8347 4.24602 37.2585C3.66976 36.6822 3.34141 35.9036 3.33098 35.0888C3.32055 34.2739 3.62885 33.4872 4.19017 32.8963L16.8249 21.9803C17.0964 21.7459 17.279 21.4251 17.3419 21.0719C17.4049 20.7188 17.3444 20.3547 17.1706 20.0409C16.1746 18.2394 15.7072 16.1934 15.8221 14.1381C15.937 12.0828 16.6295 10.1017 17.8202 8.42241C19.0108 6.74317 20.6511 5.43402 22.5526 4.64545C24.4541 3.85689 26.5395 3.62092 28.5691 3.96469L22.4753 10.5682C22.3058 10.7521 22.1829 10.9741 22.1169 11.2154C22.051 11.4567 22.044 11.7103 22.0964 11.9549L23.2019 17.0975C23.2651 17.3916 23.4119 17.6612 23.6246 17.874C23.8374 18.0867 24.107 18.2335 24.4011 18.2967L29.5476 19.4022C29.7922 19.4547 30.0458 19.4476 30.2871 19.3817C30.5284 19.3158 30.7504 19.1928 30.9343 19.0233L37.5378 12.9295C37.8011 14.4979 37.7195 16.1048 37.2988 17.6385C36.8781 19.1721 36.1284 20.5957 35.1018 21.8103C34.0752 23.0249 32.7963 24.0012 31.3541 24.6714C29.9119 25.3416 28.341 25.6897 26.7507 25.6913Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Manutenções",
    description:
      "Fazemos manutenções preventivas e corretivas de suas instalações, analisamos suas reformas para otimizar sua futura instalação.",
  },
] as const;

const projects = [
  {
    title: "Projeto D&D",
    description:
      "Instalação completa de iluminação residencial nas áreas exteriores e interiores.",
    images: [
      "/services/d&d/01.jpeg",
      "/services/d&d/02.jpeg",
      "/services/d&d/03.jpeg",
      "/services/d&d/04.jpeg",
      "/services/d&d/05.jpeg",
      "/services/d&d/06.jpeg",
      "/services/d&d/07.jpeg",
      "/services/d&d/08.jpeg",
    ] as string[],
  },
  {
    title: "Projeto Judá",
    description: "Iluminação na área superior de um posto de gasolina.",
    images: [
      "/services/juda/01.jpeg",
      "/services/juda/02.jpg",
      "/services/juda/03.jpg",
      "/services/juda/04.jpeg",
    ] as string[],
  },
] as const;

const workers = [
  {
    name: "Jeferson Alves",
    role: "Engenheiro Elétrico",
    linkedinUrl: "https://www.linkedin.com/in/engenheiroeletrico-jeferson/",
  },
  {
    name: "Gideão Abnadabe",
    role: "Diretor Comercial",
  },
  {
    name: "Guilherme Alves",
    role: "Diretor Executivo",
  },
];

const testimonials = [
  {
    name: "Leandro Severo",
    description:
      "“Jeferson é um profissional de equipe. Líder por excelência e com grande flexibilidade de atuação. Trabalha com atenção e foco em atividades que exigem grande coordenação e engajamento de equipe.”",
  },
  {
    name: "Christhian da Silva Rosas",
    description:
      "“O Jeferson é um profissional super dedicado em suas tarefas, como supervisor sempre esteve em apoio com todas as equipes de manutenção, passando seus conhecimentos, experiências, organizando para sempre eatarmos trabalhando da melhor forma possível! Sou grato por ter feito parte da sua equipe de manutenção elétrica!”",
  },
  {
    name: "Lucas Ribeiro",
    description:
      "“Profissional com grande conhecimento técnico em baixa e alta tensão, grandes conhecimento com usina geradora de energia, um grande gestor em processos de manutenção, organizado e engajado com as tarefas que são proposta, um cara otimista e dedicado em tudo que faz...”",
  },
  {
    name: "Juliana Zanetti Machado",
    description: "“Excelente profissional, atencioso e ágil no retorno.”",
  },
  {
    name: "Oscar Araujo Lopes",
    description:
      "“Profissional super dedicado nas suas atribuições e zera para a sua equipe. Conhecimento técnico e muitos Profissionalismo .. Super recomendado…”",
  },
] as const;

const certifications = [
  "NR-10 - Segurança Em Instalações E Serviços Em Eletricidade",
  "SEP - Sistema Elétrico De Potência",
  "Manutenção De Rede Aérea",
  "Comando Elétrico",
  "Linha Viva Método Ao Contato",
] as const;

const experiences = [
  // https://www.linkedin.com/in/engenheiroeletrico-jeferson/details/experience/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAA9E1pgBQZWGzz_geHo4uQN9IyuiTN2x6Nc
  {
    name: "FM Rodrigues",
    description:
      "1+ Ano Como Eletricista De Linha Viva. Manutenção Em Rede Aérea Energizada, Método Ao Contato Linha Viva.",
  },
  {
    name: "BP - A Beneficência Portuguesa de São Paulo",
    description:
      "15+ Anos De Experiência, Supervisor De Manutenção Elétrica, Líder De Manutenção Elétrica E Eletrotécnico.",
  },
  {
    name: "Ação Engenharia E Instalações LTDA.",
    description:
      "1+ Ano Como Eletrotécnico. Operações De Monitoramente, Manuntenções E Instalações Elétricas Prediais, Manutenção Preventiva, Disjuntores E Muitos Outros.",
  },
  {
    name: "TECAP",
    description:
      "1+ Ano Como Eletricista De Força E Controle. Manutenção Preventiva E Corretiva Industrial, Manutenção Preventiva E Corretiva Em Subestação, Infra Para Novas Máquinas, Montagem De Quadros De Comandos, Manutenção Preventivas E Corretivas De Bancos Capacitores, Disjuntores De Média.",
  },
] as const;

export default function Page({ theme }: { theme: "dark" | "light" }) {
  return (
    <main
      className={`w-full bg-gray-200 dark:bg-gray-900 ${reading.className}`}
    >
      <section className="lg:hidden pt-20 flex w-full flex-col gap-3">
        <div
          className="flex flex-col gap-6 py-16 px-12"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              theme === "dark"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.4)"
            }, ${
              theme === "dark"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.4)"
            }), url(${Hero.src})`,
            // backgroundImage: `url(${Hero.src})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-base text-gray-50 dark:text-gray-300">
            ⚡ Nosso trabalho traz luz aos seus projetos.
          </p>

          <h1
            className={`text-3xl text-gray-50 dark:text-gray-300 md:text-4xl ${style.className}`}
          >
            Soluções De{" "}
            <span className="text-accent-base">Serviços Elétricos</span> Para
            Sua Residência Ou Comércio
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6 px-12">
          <p className="text-center text-base font-normal text-gray-50 dark:text-gray-300">
            VWΩ é uma empresa que se compromete a iluminar seus projetos,
            valorizando cada detalhe de sua construção. Fazemos instalações
            elétricas prediais, residenciais, empresariais e industriais,
            pensado na maneira mais viável e sustentável de executar o seu
            projeto. Somos uma empresa especializada e capacitada para
            desempenhar o seu serviço com segurança e profissionalismo.
          </p>

          <a
            href="https://wa.me/5511955562955"
            className="flex items-center justify-center  gap-1 rounded bg-secondary-base py-2 px-3 text-gray-300"
          >
            <svg
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7403 20.8988L23.2403 18.1488C23.0238 18.0409 22.7827 17.992 22.5413 18.0071C22.2999 18.0222 22.0667 18.1007 21.8653 18.2347L19.3405 19.9191C18.1814 19.2819 17.2276 18.3281 16.5905 17.1691L18.2748 14.6442C18.4088 14.4429 18.4873 14.2097 18.5024 13.9683C18.5175 13.7269 18.4687 13.4857 18.3608 13.2692L15.6108 7.76924C15.4968 7.53905 15.3206 7.34539 15.1022 7.21021C14.8838 7.07503 14.6319 7.00373 14.375 7.0044C12.5516 7.0044 10.8029 7.72872 9.51364 9.01804C8.22432 10.3073 7.5 12.056 7.5 13.8794C7.50454 17.8894 9.09953 21.7339 11.935 24.5694C14.7705 27.4049 18.615 28.9998 22.625 29.0044C23.5278 29.0044 24.4218 28.8266 25.2559 28.4811C26.0901 28.1356 26.848 27.6292 27.4864 26.9908C28.1248 26.3524 28.6312 25.5945 28.9767 24.7603C29.3222 23.9262 29.5 23.0322 29.5 22.1294C29.5002 21.8739 29.4292 21.6235 29.295 21.4061C29.1608 21.1888 28.9688 21.0131 28.7403 20.8988ZM22.625 26.2544C19.3441 26.2508 16.1985 24.9458 13.8786 22.6258C11.5586 20.3058 10.2536 17.1603 10.25 13.8794C10.2497 12.9257 10.5799 12.0014 11.1844 11.2637C11.7889 10.526 12.6303 10.0206 13.5655 9.83346L15.5386 13.7866L13.8594 16.2856C13.7339 16.4739 13.6568 16.6902 13.6349 16.9153C13.613 17.1405 13.647 17.3676 13.7339 17.5764C14.7177 19.9146 16.5778 21.7747 18.9159 22.7585C19.1254 22.8492 19.3542 22.8863 19.5817 22.8665C19.8091 22.8467 20.0281 22.7706 20.2187 22.645L22.7298 20.971L26.683 22.9441C26.4943 23.8803 25.9867 24.7221 25.2467 25.3258C24.5066 25.9295 23.58 26.2577 22.625 26.2544ZM18.5 0.129395C15.4139 0.128722 12.3802 0.927046 9.69424 2.44666C7.00824 3.96628 4.76142 6.15542 3.17248 8.801C1.58354 11.4466 0.706604 14.4585 0.627037 17.5435C0.54747 20.6286 1.26798 23.6817 2.71843 26.4056L0.767652 32.258C0.606063 32.7425 0.582612 33.2625 0.699929 33.7596C0.817246 34.2567 1.07069 34.7114 1.43186 35.0725C1.79304 35.4337 2.24766 35.6871 2.74478 35.8045C3.24189 35.9218 3.76186 35.8983 4.2464 35.7367L10.0987 33.786C12.496 35.061 15.1522 35.7732 17.8658 35.8684C20.5794 35.9636 23.279 35.4394 25.7598 34.3355C28.2405 33.2316 30.4372 31.5771 32.183 29.4975C33.9288 27.4179 35.1779 24.9679 35.8355 22.3335C36.4931 19.699 36.5419 16.9494 35.9782 14.2933C35.4145 11.6372 34.2531 9.14447 32.5821 7.00425C30.9112 4.86403 28.7746 3.1326 26.3346 1.94139C23.8946 0.750187 21.2153 0.130509 18.5 0.129395ZM18.5 33.1294C15.8411 33.1312 13.2288 32.431 10.9272 31.0996C10.7587 31.0018 10.5713 30.941 10.3775 30.9212C10.1837 30.9013 9.98795 30.9229 9.80312 30.9844L3.375 33.1294L5.51828 26.7013C5.58006 26.5166 5.60189 26.3208 5.58234 26.127C5.56278 25.9333 5.50228 25.7458 5.40484 25.5772C3.7376 22.6947 3.06821 19.3426 3.50051 16.0408C3.93281 12.7391 5.44264 9.67227 7.79577 7.31616C10.1489 4.96006 13.2138 3.44636 16.515 3.00989C19.8162 2.57342 23.1692 3.23857 26.0538 4.90216C28.9384 6.56576 31.1934 9.1348 32.4689 12.2107C33.7444 15.2867 33.9692 18.6976 33.1084 21.9144C32.2476 25.1311 30.3493 27.9739 27.7079 30.0016C25.0666 32.0294 21.8299 33.1288 18.5 33.1294Z"
                fill="currentColor"
              />
            </svg>
            Fazer Orçamento Agora
          </a>
        </div>
      </section>

      {/* Desktop Section */}
      <section className="max-[1023px]:hidden flex w-full flex-row-reverse gap-16 px-28 pb-28 pt-36">
        <div
          className="flex flex-col gap-6"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              theme === "dark"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.4)"
            }, ${
              theme === "dark"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.4)"
            }), url(${Hero.src})`,
            // backgroundImage: `url(${Hero.src})`,
            backgroundSize: "cover",
            width: "300%",
          }}
        >
        </div>

        <div className="flex flex-col items-start gap-3">
          <p className="text-base text-gray-50 dark:text-gray-300">
            ⚡ Nosso trabalho traz luz aos seus projetos.
          </p>

          <h1
            className={`text-3xl text-gray-50 dark:text-gray-300 md:text-4xl ${style.className}`}
          >
            Soluções De{" "}www.google.comeus projetos,
            valorizando cada detalhe de sua construção. Fazemos instalações
            elétricas prediais, residenciais, empresariais e industriais,
            pensado na maneira mais viável e sustentável de executar o seu
            projeto. Somos uma empresa especializada e capacitada para
            desempenhar o seu serviço com segurança e profissionalismo.
          </p>

          <a
            href="https://wa.me/5511955562955"
            className="flex items-center justify-center  gap-1 rounded bg-secondary-base py-2 px-3 text-gray-300"
          >
            <svg
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7403 20.8988L23.2403 18.1488C23.0238 18.0409 22.7827 17.992 22.5413 18.0071C22.2999 18.0222 22.0667 18.1007 21.8653 18.2347L19.3405 19.9191C18.1814 19.2819 17.2276 18.3281 16.5905 17.1691L18.2748 14.6442C18.4088 14.4429 18.4873 14.2097 18.5024 13.9683C18.5175 13.7269 18.4687 13.4857 18.3608 13.2692L15.6108 7.76924C15.4968 7.53905 15.3206 7.34539 15.1022 7.21021C14.8838 7.07503 14.6319 7.00373 14.375 7.0044C12.5516 7.0044 10.8029 7.72872 9.51364 9.01804C8.22432 10.3073 7.5 12.056 7.5 13.8794C7.50454 17.8894 9.09953 21.7339 11.935 24.5694C14.7705 27.4049 18.615 28.9998 22.625 29.0044C23.5278 29.0044 24.4218 28.8266 25.2559 28.4811C26.0901 28.1356 26.848 27.6292 27.4864 26.9908C28.1248 26.3524 28.6312 25.5945 28.9767 24.7603C29.3222 23.9262 29.5 23.0322 29.5 22.1294C29.5002 21.8739 29.4292 21.6235 29.295 21.4061C29.1608 21.1888 28.9688 21.0131 28.7403 20.8988ZM22.625 26.2544C19.3441 26.2508 16.1985 24.9458 13.8786 22.6258C11.5586 20.3058 10.2536 17.1603 10.25 13.8794C10.2497 12.9257 10.5799 12.0014 11.1844 11.2637C11.7889 10.526 12.6303 10.0206 13.5655 9.83346L15.5386 13.7866L13.8594 16.2856C13.7339 16.4739 13.6568 16.6902 13.6349 16.9153C13.613 17.1405 13.647 17.3676 13.7339 17.5764C14.7177 19.9146 16.5778 21.7747 18.9159 22.7585C19.1254 22.8492 19.3542 22.8863 19.5817 22.8665C19.8091 22.8467 20.0281 22.7706 20.2187 22.645L22.7298 20.971L26.683 22.9441C26.4943 23.8803 25.9867 24.7221 25.2467 25.3258C24.5066 25.9295 23.58 26.2577 22.625 26.2544ZM18.5 0.129395C15.4139 0.128722 12.3802 0.927046 9.69424 2.44666C7.00824 3.96628 4.76142 6.15542 3.17248 8.801C1.58354 11.4466 0.706604 14.4585 0.627037 17.5435C0.54747 20.6286 1.26798 23.6817 2.71843 26.4056L0.767652 32.258C0.606063 32.7425 0.582612 33.2625 0.699929 33.7596C0.817246 34.2567 1.07069 34.7114 1.43186 35.0725C1.79304 35.4337 2.24766 35.6871 2.74478 35.8045C3.24189 35.9218 3.76186 35.8983 4.2464 35.7367L10.0987 33.786C12.496 35.061 15.1522 35.7732 17.8658 35.8684C20.5794 35.9636 23.279 35.4394 25.7598 34.3355C28.2405 33.2316 30.4372 31.5771 32.183 29.4975C33.9288 27.4179 35.1779 24.9679 35.8355 22.3335C36.4931 19.699 36.5419 16.9494 35.9782 14.2933C35.4145 11.6372 34.2531 9.14447 32.5821 7.00425C30.9112 4.86403 28.7746 3.1326 26.3346 1.94139C23.8946 0.750187 21.2153 0.130509 18.5 0.129395ZM18.5 33.1294C15.8411 33.1312 13.2288 32.431 10.9272 31.0996C10.7587 31.0018 10.5713 30.941 10.3775 30.9212C10.1837 30.9013 9.98795 30.9229 9.80312 30.9844L3.375 33.1294L5.51828 26.7013C5.58006 26.5166 5.60189 26.3208 5.58234 26.127C5.56278 25.9333 5.50228 25.7458 5.40484 25.5772C3.7376 22.6947 3.06821 19.3426 3.50051 16.0408C3.93281 12.7391 5.44264 9.67227 7.79577 7.31616C10.1489 4.96006 13.2138 3.44636 16.515 3.00989C19.8162 2.57342 23.1692 3.23857 26.0538 4.90216C28.9384 6.56576 31.1934 9.1348 32.4689 12.2107C33.7444 15.2867 33.9692 18.6976 33.1084 21.9144C32.2476 25.1311 30.3493 27.9739 27.7079 30.0016C25.0666 32.0294 21.8299 33.1288 18.5 33.1294Z"
                fill="currentColor"
              />
            </svg>
            Fazer Orçamento Agora
          </a>
        </div>
      </section>



      <section className="flex flex-col gap-12 py-6 px-12" id="Benefícios">
        <div className="flex flex-col items-center gap-2">
          <h2
            className={`${style.className} text-center text-3xl text-gray-50 dark:text-gray-300 md:text-4xl lg:text-5xl`}
          >
            Serviços Oferecidos
          </h2>
          <p className="text-center text-base text-gray-50 dark:text-gray-300 lg:text-xl">
            Oferecemos serviços em São Paulo e interior.
          </p>
        </div>

        <ul className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap md:justify-center">
          {services.map(({ icon, description, src, title }) => (
            <li key={src} className="flex flex-col gap-3 md:w-[330px]">
              <Image
                width={285}
                height={285}
                src={src}
                alt={title}
                className="aspect-square max-h-[285px] w-full object-cover md:rounded-2xl"
              />

              <section className="flex flex-col gap-3">
                <header className="flex flex-col items-center text-gray-50 dark:text-gray-300">
                  {icon}
                  <h3 className="text-center text-2xl text-gray-50 dark:text-gray-300 lg:text-4xl">
                    {title}
                  </h3>
                </header>

                <p className="text-center text-base text-gray-50 dark:text-gray-300 lg:text-xl">
                  {description}
                </p>
              </section>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-12 px-12 py-6" id="Realizados">
        <div className="flex flex-col items-center gap-2">
          <h2
            className={`${style.className} text-center text-3xl text-gray-50 dark:text-gray-300 md:text-4xl lg:text-5xl`}
          >
            Serviços Realizados
          </h2>
        </div>

        <ul className="flex w-full flex-col gap-12">
          {projects.map(({ title, description, images }) => (
            <li key={title} className="w-full ">
              <section className="flex flex-col gap-3">
                <header className="flex flex-col items-center gap-2">
                  <h3 className={`${style.className} text-center text-2xl text-gray-50 dark:text-gray-300 md:text-3xl lg:text-4xl`}>
                    {title}
                  </h3>
                  <p className="text-center text-base text-gray-50 dark:text-gray-300 lg:text-xl">
                    {description}
                  </p>
                </header>

                <ImageCarousel images={images} />
              </section>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-12 px-12 py-6" id="Depoimentos">
        <h2
          className={`${style.className} text-center text-3xl text-gray-50 dark:text-gray-300 md:text-4xl`}
        >
          Depoimentos
        </h2>

        <TestimonialCarousel testimonials={testimonials} />

        <div className="flex flex-col gap-6 md:flex-row max-w-[1024px] m-auto">
          <div className="w-full flex flex-col gap-4 p-8 lg:gap-6">
            <p
              className={`text-6xl text-gray-50 dark:text-gray-300 ${style.className}`}
            >
              80+
            </p>

            <h3 className="text-base text-gray-50 dark:text-gray-300 lg:text-xl">
              Clientes atendidos em toda São Paulo.
            </h3>
          </div>

          <div className="w-full flex flex-col gap-4 lg:gap-6 p-8">
            <p
              className={`text-6xl text-gray-50 dark:text-gray-300 ${style.className}`}
            >
              150+
            </p>

            <h3 className="text-base text-gray-50 dark:text-gray-300 lg:text-xl">
              Serviços diferentes feitos para nossos clientes.
            </h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-12 py-6" id="Quem Somos">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2
            className={`${style.className} text-center text-3xl text-gray-50 dark:text-gray-300 md:text-4xl lg:text-5xl`}
          >
            Quem Somos
          </h2>

          <p className="text-center text-base text-gray-50 dark:text-gray-300 lg:text-xl">
            Conheça melhor os profissionais envolvidos na VWΩ Soluções e todas
            certificações reputáveis de nosso engenheiro elétrico!
          </p>
        </div>

        <ul className="flex w-full flex-col items-center justify-center gap-12 md:flex-row md:flex-wrap">
          {workers.map(({ name, role, linkedinUrl }) => (
            <li className="flex flex-col gap-2 md:w-[330px]" key={name}>
              {linkedinUrl ? (
                <a href={linkedinUrl}>
                  <h3
                    className={`text-center text-2xl text-gray-50 underline dark:text-gray-300 md:text-3xl ${style.className}`}
                  >
                    {name}
                  </h3>
                </a>
              ) : (
                <h3
                  className={`text-center text-2xl text-gray-50 dark:text-gray-300 md:text-3xl ${style.className}`}
                >
                  {name}
                </h3>
              )}
              <p
                className={`text-center text-xl text-gray-50 dark:text-gray-300 md:text-2xl ${style.className}`}
              >
                {role}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 lg:gap-6">
          <h3
            className={`text-2xl text-gray-50 dark:text-gray-300 md:text-3xl lg:text-4xl ${style.className} text-center`}
          >
            Licenças E Certificados
          </h3>

          <CertificationsCarousel certifications={certifications} />
        </div>

        <div className="flex flex-col gap-2 lg:gap-6">
          <h3
            className={`text-center text-2xl text-gray-50 dark:text-gray-300 md:text-3xl lg:text-4xl ${style.className}`}
          >
            Experiência
          </h3>

          <ExperiencesCarousel experiences={experiences} />
        </div>
      </section>

      <section className="flex flex-col gap-12 px-12 py-6">
        <div className="flex flex-col gap-6 md:items-center">
          <h2
            className={`${style.className} text-center text-3xl text-gray-50 dark:text-gray-300 md:text-left md:text-4xl`}
            >
            Venha Também Fechar Negócio Com A{" "}
            <span className="text-accent-base">VWΩ</span>
          </h2>

          <a
            href="https://wa.me/5511955562955"
            className="flex items-center justify-center gap-1 rounded bg-secondary-base py-2 px-3 text-gray-300 md:w-max"
            >
            <svg
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M28.7403 20.8988L23.2403 18.1488C23.0238 18.0409 22.7827 17.992 22.5413 18.0071C22.2999 18.0222 22.0667 18.1007 21.8653 18.2347L19.3405 19.9191C18.1814 19.2819 17.2276 18.3281 16.5905 17.1691L18.2748 14.6442C18.4088 14.4429 18.4873 14.2097 18.5024 13.9683C18.5175 13.7269 18.4687 13.4857 18.3608 13.2692L15.6108 7.76924C15.4968 7.53905 15.3206 7.34539 15.1022 7.21021C14.8838 7.07503 14.6319 7.00373 14.375 7.0044C12.5516 7.0044 10.8029 7.72872 9.51364 9.01804C8.22432 10.3073 7.5 12.056 7.5 13.8794C7.50454 17.8894 9.09953 21.7339 11.935 24.5694C14.7705 27.4049 18.615 28.9998 22.625 29.0044C23.5278 29.0044 24.4218 28.8266 25.2559 28.4811C26.0901 28.1356 26.848 27.6292 27.4864 26.9908C28.1248 26.3524 28.6312 25.5945 28.9767 24.7603C29.3222 23.9262 29.5 23.0322 29.5 22.1294C29.5002 21.8739 29.4292 21.6235 29.295 21.4061C29.1608 21.1888 28.9688 21.0131 28.7403 20.8988ZM22.625 26.2544C19.3441 26.2508 16.1985 24.9458 13.8786 22.6258C11.5586 20.3058 10.2536 17.1603 10.25 13.8794C10.2497 12.9257 10.5799 12.0014 11.1844 11.2637C11.7889 10.526 12.6303 10.0206 13.5655 9.83346L15.5386 13.7866L13.8594 16.2856C13.7339 16.4739 13.6568 16.6902 13.6349 16.9153C13.613 17.1405 13.647 17.3676 13.7339 17.5764C14.7177 19.9146 16.5778 21.7747 18.9159 22.7585C19.1254 22.8492 19.3542 22.8863 19.5817 22.8665C19.8091 22.8467 20.0281 22.7706 20.2187 22.645L22.7298 20.971L26.683 22.9441C26.4943 23.8803 25.9867 24.7221 25.2467 25.3258C24.5066 25.9295 23.58 26.2577 22.625 26.2544ZM18.5 0.129395C15.4139 0.128722 12.3802 0.927046 9.69424 2.44666C7.00824 3.96628 4.76142 6.15542 3.17248 8.801C1.58354 11.4466 0.706604 14.4585 0.627037 17.5435C0.54747 20.6286 1.26798 23.6817 2.71843 26.4056L0.767652 32.258C0.606063 32.7425 0.582612 33.2625 0.699929 33.7596C0.817246 34.2567 1.07069 34.7114 1.43186 35.0725C1.79304 35.4337 2.24766 35.6871 2.74478 35.8045C3.24189 35.9218 3.76186 35.8983 4.2464 35.7367L10.0987 33.786C12.496 35.061 15.1522 35.7732 17.8658 35.8684C20.5794 35.9636 23.279 35.4394 25.7598 34.3355C28.2405 33.2316 30.4372 31.5771 32.183 29.4975C33.9288 27.4179 35.1779 24.9679 35.8355 22.3335C36.4931 19.699 36.5419 16.9494 35.9782 14.2933C35.4145 11.6372 34.2531 9.14447 32.5821 7.00425C30.9112 4.86403 28.7746 3.1326 26.3346 1.94139C23.8946 0.750187 21.2153 0.130509 18.5 0.129395ZM18.5 33.1294C15.8411 33.1312 13.2288 32.431 10.9272 31.0996C10.7587 31.0018 10.5713 30.941 10.3775 30.9212C10.1837 30.9013 9.98795 30.9229 9.80312 30.9844L3.375 33.1294L5.51828 26.7013C5.58006 26.5166 5.60189 26.3208 5.58234 26.127C5.56278 25.9333 5.50228 25.7458 5.40484 25.5772C3.7376 22.6947 3.06821 19.3426 3.50051 16.0408C3.93281 12.7391 5.44264 9.67227 7.79577 7.31616C10.1489 4.96006 13.2138 3.44636 16.515 3.00989C19.8162 2.57342 23.1692 3.23857 26.0538 4.90216C28.9384 6.56576 31.1934 9.1348 32.4689 12.2107C33.7444 15.2867 33.9692 18.6976 33.1084 21.9144C32.2476 25.1311 30.3493 27.9739 27.7079 30.0016C25.0666 32.0294 21.8299 33.1288 18.5 33.1294Z"
                fill="currentColor"
                />
            </svg>
            Fazer Orçamento Agora
          </a>
        </div>

        <div>
        <Image
          src="/work.png"
          alt="Jefferson trabalhando"
          width={285}
          height={448}
          className="w-auto lg:max-w-[1024px] m-auto"
        />
        </div>
      </section>
    </main>
  );
}
