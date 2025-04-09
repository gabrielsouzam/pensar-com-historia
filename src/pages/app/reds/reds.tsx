import { Helmet } from 'react-helmet-async'

import redsImage from '@/assets/reds-image.png'

import { PageTitle } from '../@components/page-title'
import { DynamicContentCarousel } from './components/dynamic-content-carousel'
import { RedsDescriptionButton } from './components/reds-description-button'

export function REDs() {
  return (
    <>
      <Helmet title="Criando Web-quest" />

      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <PageTitle title="Recursos Educacionais Digitais" />
        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">O que são?</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 text-justify text-2xl font-light">
            <p>
              Os Recursos Educacionais Digitais (REDs) são materiais e
              ferramentas disponibilizados em formato digital que possuem
              finalidades pedagógicas. Os REDs podem ser encontrados em formatos
              de textos, vídeos, jogos, imagens, slides, infográficos e muitos
              outros formatos.
            </p>
            <p>
              Alguns REDs podem ser acessados de forma gratuita e outros não. No
              entanto, existem materiais de domínio público ou com licenças
              abertas que possibilitam o acesso e a utilização.
            </p>
            <p>
              Além disso, a adoção dos recursos educativos digitais pode
              contribuir na implementação de novas práticas pedagógicas e
              interdisciplinares em sala de aula.
            </p>
          </p>

          <h2 className="mb-3 text-5xl font-light">
            Vantagens de usar RED&apos;S
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <RedsDescriptionButton
            title="Desenvolvimento de competências digitais"
            description="Ao utilizar os REDs o professor pode desenvolver 
            juntamente com seus alunos uma série de competências tecnológicas 
            digitais. Além de aprender  sobre o conteúdo didático por meio 
            de variados recursos, os discentes podem aprender a explorar os 
            diferentes formatos utilizados, entender o seu mecanismo de 
            funcionamento e replicá-los em diferentes situações."
          />

          <div className="mb-24 mt-10 flex justify-center gap-32">
            <div className="space-y-4">
              <RedsDescriptionButton
                title="Flexibilidade para Aprender"
                description="Com os REDs, os estudantes podem acessar os 
                materiais de aprendizagem a qualquer hora e em qualquer 
                lugar, desde que tenham uma conexão com a internet."
              />
              <RedsDescriptionButton
                title="Aprendizagem Colaborativa"
                description="Muitos REDs incentivam a colaboração não apenas 
                entre os estudantes, mas também entre estudantes e professores. 
                Isso permite que eles trabalhem juntos em projetos e atividades, 
                promovendo um ambiente de aprendizado cooperativo."
                align="left"
              />
            </div>

            <img src={redsImage} alt="Sigla RED's" />

            <div className="space-y-4">
              <RedsDescriptionButton
                title="Aprendizagem Personalizada"
                description="Os REDs permitem que os discentes aprendam ao seu 
                próprio ritmo, proporcionando uma flexibilidade que é muitas 
                vezes ausente em ambientes de aprendizagem tradicionais. Isso 
                significa que se um estudante precisa de mais tempo para
                entender um conceito, ele pode fazer isso sem se sentir 
                pressionado pelo horário imposto a sala de aula. "
              />
              <RedsDescriptionButton
                title="Acesso a uma Variedade de Recursos"
                description="Os REDs disponibilizam uma ampla gama de 
                recursos, como textos, vídeos, jogos, imagens, slides, 
                infográficos e muito mais. Isso pode ajudar a tornar o 
                aprendizado mais interessante e envolvente. "
                align="right"
              />
            </div>
          </div>

          <h2 className="mb-3 text-5xl font-light">
            RED&apos;s para Dinamizar uma{' '}
            <span className="italic">WebQuest</span>
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 space-y-4 text-2xl font-light">
            <p>
              Caro professor e cara professora, aqui vocês encontrarão uma
              variedade de Recursos Educacionais Digitais (RED&apos;s) que irão
              transformar a maneira como conduzem suas WebQuests.
            </p>
            <p>
              Estes recursos foram cuidadosamente selecionados e organizados em
              quatro seções ({' '}
              <span className="font-normal text-brown-800">
                Apresentação de Conteúdos; Interação e Escrita Colaborativa;
                Criação e Edição de Vídeos Digitais; Avaliação da Aprendizagem
              </span>
              ) para facilitar sua busca e maximizar a eficácia das suas aulas.
              Eles são interativos, envolventes e podem enriquecer
              significativamente a experiência de uso das WebQuests em sala de
              aula, favorecendo a comunicação entre os estudantes, além de
              promover uma melhor colaboração e respostas mais qualificadas às
              tarefas propostas aos discentes.
            </p>
            <p>
              Explore, descubra e utilize esses recursos para potencializar suas
              WebQuests e proporcionar aos seus alunos uma experiência de
              aprendizagem rica e dinâmica.
            </p>
            <p>
              Não perca tempo! Acesse os recursos agora mesmo e descubra um
              mundo de possibilidades para suas WebQuests. Estamos ansiosos para
              ver como você irá utilizá-los para inspirar e educar a próxima
              geração de aprendizes!
            </p>
          </p>

          <DynamicContentCarousel />
        </div>
      </div>
    </>
  )
}
