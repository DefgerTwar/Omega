import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export const PolicyBanner = () => {
  const [accept, setAccept] = useState(false);
  const router = useRouter();

  const loadScripts = () => {
    // save in the localStorage the preference
    localStorage.setItem("privacySettings", "true");

    router.reload();

    setAccept(true);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const setting = localStorage.getItem("privacySettings");

    if (setting) {
      // if key exists user has accepted
      setAccept(true);
    }

    setLoading(false);
  }, [])

  return accept ? null : (
    <div className="z-40 fixed bottom-[70px] flex w-full flex-col items-center gap-3 bg-gray-700 p-6 md:bottom-0">
      <p className="text-center text-base text-white lg:text-xl">
        Uso de cookies - Guardamos estatísticas de visitas para melhorar sua
        experiência de navegação.
      </p>
      <p className="text-center text-base text-white lg:text-xl">
        Ao pressionar “ACEITAR”, você concorda com nossa{" "}
        <Link href="/privacy">Política de Privacidade</Link>.
      </p>

      <button
        className="w-max rounded bg-[#00E560] px-3 py-2 text-white transition-colors hover:bg-[#248F50]"
        onClick={loadScripts}
      >
        ACEITAR
      </button>
    </div>
  );
};
