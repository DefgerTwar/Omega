import { Montserrat, Yeseva_One } from "next/font/google";

const style = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
});

const reading = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Privacy({ theme }: { theme: "dark" | "light" }) {
  return (
    <main className="lg:gap-12 bg-gray-200 text-gray-50 dark:text-gray-300 dark:bg-gray-900 flex flex-col gap-2 px-12 py-28">
      <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
        <h1 className={`${style.className} text-center text-3xl md:text-4xl lg:text-5xl`}>Política De Privacidade</h1>
        <p className="text-sm lg:text-xl">A sua privacidade é importante para nós. É política do site VWΩ Soluções respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site VWΩ Soluções, e outros sites que possuímos e operamos.
          Trabalhamos com base na Lei de Proteção de Dados (13.709/2018) que traz garantias de privacidade, confidencialidade, retenção, proteção aos direitos fundamentais de liberdade e o livre desenvolvimento da personalidade da pessoa. Além disso, respeitamos a Constituição Federal da República Federativa do Brasil, o Código de Defesa do Consumidor (Lei 8.078/90), Marco Civil da Internet (Lei 12.965/14).
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          Deixamos claro o motivo que estamos coletando e como será usado, pois tudo é feito para correta administração geral.
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis pela legislação atual ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto por determinação judicial.
          O nosso site pode ter links para sites externos que não são operados por nós. Diante disto, não nos responsabilizamos por danos de terceiros. Esteja ciente de que não temos controle sobre o conteúdo e práticas de sites de terceiros e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          Na qualidade de consumidor, você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail jeferson@vwosolucoes.com.
          Nossa política é atualizada de forma constante.
          Fica, desde já, o titular de dados ciente que o conteúdo desta Política de Privacidade pode ser alterado a critério do site VWΩ Soluções, independente de aviso ou notificação. Em caso de alteração, as modificações produzem todos os efeitos a partir do momento da disponibilização no site.
          O site VWΩ Soluções não se responsabiliza caso você venha utilizar seus dados de forma incorreta ou inverídica, ficando excluído de qualquer responsabilidade neste sentido.</p>
      </div>
      <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
        <h1 className={`${style.className} text-center text-3xl md:text-4xl lg:text-5xl`}>Política De Cookies</h1>
        <div className="flex flex-col gap-2">
          <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>O Que São Cookies</h2>
          <p className="text-sm lg:text-xl">Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou &quot;quebrar&quot; certos elementos da funcionalidade do site.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Como Usamos Os Cookies?</h2>
          <p className="text-sm lg:text-xl">Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Desativar Cookies</h2>
          <p className="text-sm lg:text-xl">Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Cookies Que Definimos</h2>
          <p className="text-sm lg:text-xl">Cookies relacionados a pesquisas.
            Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.

            Cookies relacionados a formulários.
            Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.

            Cookies de preferências do site.
            Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página que for afetada por suas preferências.</p>
        </div>
        <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
          <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Cookies De Terceiros</h2>
          <p className="text-sm lg:text-xl">Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
            Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente. Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.
            As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
            Periodicamente, testamos novos recursos e fazemos alterações sutis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.</p>
        </div>
      </div>

      <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
        <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Compromisso do Usuário</h2>
        <p className="text-sm lg:text-xl">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site VWΩ Soluções oferece e com caráter enunciativo, mas não limitativo:
          A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
          B) Respeito a todas as legislações nacionais ou internacionais em que o Brasil é signatário;
          C) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          D) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do site VWΩ Soluções, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados;
          E) Os conteúdos publicados, possuem direitos autorais e de propriedade intelectual reservados, conforme estabelece a Lei de Direitos Autorais n. 9.610, de 19.2.1998 do Governo Federal Brasileiro e correlatas. Qualquer infringência, serão comunicados às autoridades competentes.
        </p>
      </div>

      <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
        <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Direito Do Titular Dos Dados</h2>
        <p className="text-sm lg:text-xl">O titular de dados pessoais possui o direito de solicitar do site VWΩ Soluções, através do canal específico de tratamento, a qualquer momento, mediante requisição formal, informações referentes aos seus dados.
          Os pedidos serão analisados conforme previsto em legislação vigente dentro de um prazo de 72 horas, salvo determinação legal e/ou objeto de lei.
          Os titulares de dados, segundo o texto da LGPD, podem exercer os seus direitos por meio de:
          Confirmação da existência de tratamento;
          Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto nesta Lei;
          Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;
          Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</p>
      </div>

      <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
        <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Como Exercer Meus Direitos De Dados</h2>
        <p className="text-sm lg:text-xl">Para as demais solicitações em relação aos direitos do titular de dados pessoais, entre em contato conosco através do e-mail jeferson@vwosolucoes.com;</p>
      </div>

      <div className="lg:max-w-[1024px] m-auto flex flex-col gap-2">
        <h2 className={`${style.className} text-xl md:text-2xl lg:text-3xl`}>Mais Informações</h2>
        <p className="text-sm lg:text-xl">Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          O site VWΩ Soluções empregará esforços para resguardar as informações e dados coletados do usuário pelo site. Todavia, considerando que não há meio de transmissão e retenção de dados eletrônicos plenamente eficaz e seguro, o site VWΩ Soluções não pode assegurar que terceiros não autorizados não logrem êxito no acesso indevido, eximindo-se de qualquer responsabilidade por danos e prejuízos decorrentes da conduta de terceiros, ataques externos ao site como: vírus, invasão ao banco de dados, vícios ou defeitos técnicos, assim como operacionais resultante da utilização do site e em razão de falhas de conexão.</p>
      </div>

    </main>

  )
}