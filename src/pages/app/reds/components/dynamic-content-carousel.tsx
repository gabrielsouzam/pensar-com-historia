import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useState } from 'react'

import { DescriptionButton } from '../../web-quest/components/description-button'

export function DynamicContentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <div className="flex flex-1 flex-col items-center gap-10" key={0}>
      <div className="flex w-full justify-between gap-10">
        <DescriptionButton
          title="MindMeister"
          description="O MindMeister é uma das melhores opções para criar mapas 
          mentais, é ideal para exibição de conteúdo de forma simples e organizada. 
          Com ele é possível fazer conexões visuais entre diversos tópicos,
           facilitando, assim, a compreensão dos alunos. Através do link a 
           seguir você pode acessar a página inicial do MindMeister: 
           https://www.mindmeister.com/pt"
        />
        <DescriptionButton
          title="Canva"
          description="O Canva é uma plataforma de design gráfico que permite
           aos usuários criar gráficos de mídia social, apresentações, 
           infográficos, pôsteres e outros conteúdos visuais. Está disponível
            online e em dispositivos móveis e integra milhões de imagens, 
            fontes, modelos e ilustrações.  Através do link a seguir você 
            pode acessar a página inicial do canva: https://www.canva.com/"
        />
      </div>

      <div className="mb-2 w-[18rem]">
        <h2 className="text-center text-3xl font-semibold">
          Apresentação de Conteúdos
        </h2>
      </div>

      <DescriptionButton
        title="Genially"
        description="O Genially é uma plataforma online que permite criar
         apresentações interativas, infográficos, dossiês, quizzes e muito mais,
          transformando conteúdo estático em experiências de aprendizagem 
          envolventes. É fácil de usar, não requer habilidades de design ou 
          programação, e oferece uma variedade de modelos e recursos visuais. 
          Além disso, permite a colaboração em tempo real com outros professores 
          ou alunos. Para começar, basta criar uma conta gratuita no site do 
          Genially, escolher um modelo, personalizá-lo com seu conteúdo e 
          compartilhá-lo com seus alunos ou colegas de trabalho. Através do link
           a seguir você pode acessar a página inicial do Genially: 
           https://genial.ly/education/for-schools/"
      />
    </div>,

    // Slide 1
    <div className="flex flex-1 flex-col items-center gap-10" key={1}>
      <div className="flex w-full justify-between gap-10">
        <DescriptionButton
          title="Padlet"
          description="O Padlet é um recurso de colaboração que permite aos 
          usuários criarem murais virtuais para compartilhar opiniões, respostas
           e ideias. É especialmente útil para professores que desejam envolver 
           seus alunos em atividades interativas. Os professores podem 
           utilizá-lo de várias maneiras: Coleta de Opiniões e Ideias, 
           Apresentações Interativas, Trabalhos em Grupo, Portfólios Digitais e 
           Discussões Assíncronas.Através do link a seguir você pode acessar a 
           página do Padlet:https://padlet.com/"
        />
        <DescriptionButton
          title="Metimeter"
          description="O Mentimeter é um ótimo recurso para o recolhimento de 
          dados e opiniões acerca de um tópico apresentado ou discutido. 
          Os discentes respondem as perguntas e, a partir das respostas, a 
          plataforma cria nuvens de palavras, gráficos, dentre outros formatos 
          de interação. Através do link a seguir você pode acessar a página 
          inicial do mentimenter: https://www.mentimeter.com/"
        />
      </div>

      <div className="mb-2 w-[18rem]">
        <h2 className="text-center text-3xl font-semibold">
          Apresentação de Conteúdos
        </h2>
      </div>

      <div className="flex w-full justify-between gap-10">
        <DescriptionButton
          title="Sutori"
          description="O Sutori é um recurso de aprendizagem interativa que 
          transforma a maneira como os professores engajam os alunos. Esse 
          recurso educativo digital permite a criação de apresentações de 
          conteúdo ricas em mídia, incluindo vídeos, fotos e áudios, 
          proporcionando uma experiência de aprendizagem imersiva. Os alunos 
          podem interagir diretamente com o material de estudo, tornando o 
          processo de aprendizagem mais intuitivo, colaborativo e envolvente. 
          Através do link a seguir você pode acessar a página inicial do sutori: 
          https://www.sutori.com/en/"
        />
        <DescriptionButton
          title="Google Docs"
          description="O Google Docs é um recurso de criação de documentos 
          online oferecida pela Google. O recurso permite a colaboração em 
          tempo real, facilita a troca de informações e possibilita que várias
           pessoas trabalhem simultaneamente no mesmo documento . Com o Google 
           Docs, a criação de textos se torna um processo coletivo, onde todos 
           os participantes podem contribuir com suas ideias e sugestões. O 
           recurso está vinculado a conta google do Gmail. "
        />
      </div>
    </div>,

    // Slide 2
    <div className="flex flex-1 flex-col items-center gap-10" key={2}>
      <div className="flex w-full justify-center gap-10">
        <DescriptionButton
          title="Screencastify"
          description="O Screencastify é um dos principais gravadores de tela 
          para o Google Chrome. Com ele, é possível capturar, editar e 
          compartilhar vídeos de alta qualidade em segundos. Este recurso 
          oferece capacidades de gravação do início ao fim que permitem que 
          se crie atribuições de classe em vídeo. Além disso, o Screencastify 
          permite permite que os discentes pratiquem habilidades, reflitam, 
          construam um portfólio e aprendam fazendo. Através do link a seguir 
          você pode acessar a página inicial do  
          Screencastify:https://www.screencastify.com/ "
        />
      </div>

      <div className="flex w-full items-baseline justify-between gap-10">
        <DescriptionButton
          title="VideoAnt"
          description="O VideoAnt é um recurso de anotação de vídeos, criada 
          pela Universidade do Minnesota. Ao carregar um vídeo é possível criar
           e partilhar o vídeo com anotações em pontos específicos do seu 
           discurso – comentários, clarificações, esclarecimentos, questões 
           etc. O recurso permite também partilhar o vídeo e as respectivas 
           anotações com os discentes, os quais poderão responder aos 
           comentários/questões colocados pelo professor e fazerem também 
           perguntas e/ou comentários em passagens específicas. Através do link 
           a seguir você pode acessar a página inicial do 
           VideoAnt: https://ant.umn.edu/"
        />
        <h2 className="text-center text-3xl font-semibold">
          Apresentação de Conteúdos
        </h2>
        <DescriptionButton
          title="CapCut"
          description="O CapCut é um editor de vídeos completo e gratuito, que 
          permite a criação e dição de vídeos. Com o CapCut, é possível 
          recortar, cortar, dividir e redimensionar vídeos sem perder a 
          qualidade. Além disso, o recurso possui ferramentas inteligentes para 
          remover o plano de fundo de vídeos e imagens automaticamente, além de 
          oferecer a possibilidade de gerar legendas a partir de vídeos 
          instantaneamente, criar o design gráfico e permitir a colaboração 
          entre equipes. Através do link a seguir você pode acessar a página 
          inicial do CapCut: https://www.capcut.com/pt-br/"
        />
      </div>

      <div className="flex w-full justify-center gap-10">
        <DescriptionButton
          title="Loom"
          description="O Loom é um recurso indicado para a gravação de
           vídeo-aulas, com ele os docentes podem filmar suas explicações 
           e com a possibilidade de compartilhar a tela ao mesmo tempo em que a 
           imagem do professor é gravada. Além disso o recurso permite uma 
           interação do professor com os alunos por meio dos vídeos e dos 
           feedbacks dos alunos em um momento posterior.  Através do link a 
           seguir você pode acessar a página inicial do Loom: 
           https://www.loom.com/"
        />
      </div>
    </div>,

    // Slide 3
    <div className="flex flex-1 flex-col items-center gap-10" key={3}>
      <div className="flex w-full justify-center gap-10">
        <DescriptionButton
          title="Kahoot"
          description="O Kahoot é uma plataforma que permite ao professor 
          desenvolver perguntas de múltiplas escolhas para que os alunos 
          respondam em tempo real. Basta desenvolver as perguntas e as opções, 
          determinar um horário com os alunos, criar a sala e aplicar o quiz. 
          Através do link a seguir você pode acessar a página inicial do 
          Kahoot: https://kahoot.com/"
        />
      </div>

      <div className="flex w-full justify-center gap-10">
        <h2 className="text-center text-3xl font-semibold">
          Avaliação de Aprendizagem
        </h2>
      </div>

      <div className="flex w-full justify-between gap-10">
        <DescriptionButton
          title="Slido"
          description="O Slido é um recurso que visa promover a interatividade, 
          dinamizar reuniões e aulas através da criação de quizzes. Com ele, os 
          docentes podem criar perguntas personalizadas, tornando o aprendizado 
          mais envolvente e divertido. O slido permite ainda anunciar os 
          vencedores em um quadro customizado, adicionando um elemento de 
          competição saudável que pode motivar os alunos a se envolverem mais 
          ativamente com o material de estudo. Através do link a seguir você 
          pode acessar a página inicial do slido: https://www.slido.com/"
        />
        <DescriptionButton
          title="Socrative"
          description="O Socrative é um recurso de avaliação que oferece aos 
          docentes uma forma eficiente e interativa de avaliar o desempenho 
          dos alunos. A aplicação permite a criação de diversos tipos de 
          questionários, incluindo perguntas objetivas, discursivas e de 
          verdadeiro/falso. O Socrative proporciona total liberdade aos 
          professores para personalizar as avaliações de acordo com as 
          necessidades específicas de cada turma, recebendo um feedback 
          instantâneo sobre o progresso dos alunos o que pode facilitar a 
          identificação de áreas que precisam de mais atenção.  Através do link 
          a seguir você pode acessar a página inicial do socrative: 
          https://www.socrative.com/"
        />
      </div>
    </div>,
  ]

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }

  return (
    <div className="flex items-center justify-between gap-24">
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-brown-400/90 bg-brown-700 disabled:opacity-30"
      >
        <CaretLeft size={32} className="text-brown-50" weight="bold" />
      </button>

      {slides[currentSlide]}

      <button
        type="button"
        onClick={handleNext}
        disabled={currentSlide === slides.length - 1}
        className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-brown-400/90 bg-brown-700 disabled:opacity-30"
      >
        <CaretRight size={32} className="text-brown-50" weight="bold" />
      </button>
    </div>
  )
}
