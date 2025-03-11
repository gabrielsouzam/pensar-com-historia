import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageTitle } from '../@components/page-title'
import { CustomLink } from './components/custom-link'
import { TeacherAreaButton } from './components/teacher-area-button'

export function TeacherArea() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  const areaContents: Record<string, string> = {
    'Formação docente':
      'A formação continuada dos professores é essencial para integrar as TDICs ao ensino de maneira eficiente. Os docentes precisam de acesso a cursos, oficinas e materiais que os capacitem não apenas a usar as tecnologias, mas também a incorporá-las em metodologias pedagógicas inovadoras. Essa formação deve abordar desde o uso básico das ferramentas digitais até a criação de atividades interativas que fomentem o aprendizado ativo.',
    'Competências Tecnológicas Digitais':
      'Professores e alunos precisam dominar habilidades tecnológicas para aproveitar o potencial das TDICs. Isso inclui saber utilizar softwares, plataformas educacionais, redes sociais como ferramentas pedagógicas e até mesmo explorar aplicativos voltados para a pesquisa e produção histórica. Desenvolver essas competências permite que o ensino de História seja mais dinâmico e conectado ao mundo digital.',
    'Letramento Digital':
      'Letramento digital vai além do uso técnico das tecnologias. Envolve a habilidade de buscar, avaliar, interpretar e utilizar informações de forma crítica e ética. No contexto do ensino de História, isso significa capacitar os alunos a analisar fontes digitais, reconhecer fake news e compreender como a informação circula e é manipulada na era digital.',
  }
  return (
    <>
      <Helmet title="Área docente" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <PageTitle title="Área docente" />

        <div className="h-full px-32 pt-10 text-brown-800">
          <div>
            <h2 className="mb-3 text-5xl font-light">
              Ensino de História e TDICs
            </h2>
            <hr className="mb-10 border-t-2 border-brown-800" />

            <p className="mb-16 gap-2 text-justify text-2xl font-light">
              <p>
                As Tecnologias Digitais da Informação e Comunicação (TDICs) têm
                transformado nossas maneiras de trabalhar, comunicar, se
                relacionar, ensinar e aprender. No ensino da História, as TDICs
                estão sendo cada vez mais incorporadas às práticas docentes, com
                o objetivo de enriquecer o aprendizado, a pesquisa histórica e
                auxiliar os professores na implementação de metodologias ativas
                de ensino, a fim de alinhar o processo de ensino-aprendizagem à
                realidade dos alunos.
              </p>
              <p>
                As razões pelas quais as TDICs e os recursos digitais devem,
                cada vez mais, estar presente no cotidiano escolar e no ensino
                da História, não se esgotam aí. A grande questão é como ensinar,
                produzir, avaliar e utilizar as tecnologias e metodologias
                educativas digitais de modo ético, crítico e responsável.
              </p>
              <p>
                Para isso, é necessário promover três dimensões fundamentais: :
                <span className="font-semibold text-brown-800">
                  A formação docente
                </span>
                , o desenvolvimento de{' '}
                <span className="font-semibold text-brown-800">
                  competências tecnológicas digitais
                </span>
                e o{' '}
                <span className="font-semibold text-brown-800">
                  letramento digital
                </span>
                .
              </p>
              <p>
                Para saber mais sobre estes aspectos, convidamos você a explorar
                cada um desses tópicos em detalhes a seguir.
              </p>
            </p>

            <div className="mb-10 flex justify-between">
              <TeacherAreaButton
                title="Formação docente"
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
              />
              <TeacherAreaButton
                title="Competências Tecnológicas Digitais"
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
              />
              <TeacherAreaButton
                title="Letramento Digital"
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
              />
            </div>

            {selectedArea && (
              <div className="mb-10 rounded-3xl bg-brown-800 px-6 py-4">
                <p className="text-xl font-light text-brown-50">
                  {areaContents[selectedArea]}
                </p>
              </div>
            )}

            <h2 className="mb-3 text-5xl font-light">
              Sites com a temática de <span className="italic"> Web Quest</span>
            </h2>
            <hr className="mb-10 border-t-2 border-brown-800" />

            <p className="mb-16 gap-2 text-justify text-2xl font-light">
              Selecionamos alguns sites para que você possa desbravar o mundo da
              Web Quest a partir de outras fontes e exemplos muito
              interessantes, esperamos que goste!
            </p>

            <div className="mb-10 space-y-5">
              <CustomLink
                title="WebQuest: um desafio aos professores para os alunos"
                link="https://labte.fpce.uc.pt/webquest/"
              />
              <CustomLink
                title="BestWebQuests.com"
                link="https://web.archive.org/web/20050616010026/https://www.bestwebquests.com/default.asp"
              />
              <CustomLink
                title="Detetives do Passado"
                link="http://www.numemunirio.org/detetivesdopassado/main.html"
              />
              <CustomLink
                title="Vivência Pedagógica"
                link="https://vivenciapedagogica.com.br/webquests/"
              />
              <CustomLink
                title="Uso das TICs na Educação"
                link="https://sites.google.com/view/uso-das-tic-na-educacao/pagina-inicial/webquest?pli=1"
              />
              <CustomLink
                title="INOVAÇÃO NA EDUCAÇÃO"
                link="https://lilianbacich.com/2020/03/22/webquest-como-organizar-uma-atividade-significativa-de-pesquisa/"
              />
            </div>

            <h2 className="mb-3 text-5xl font-light">
              Exemplos de <span className="italic">Web Quest</span>
            </h2>
            <hr className="mb-10 border-t-2 border-brown-800" />

            <p className="mb-16 gap-2 text-justify text-2xl font-light">
              Selecionamos alguns sites para que você possa desbravar o mundo da
              <span className="italic"> Web Quest</span> a partir de outras
              fontes e exemplos muito interessantes, esperamos que goste!
            </p>

            <div className="space-y-5">
              <CustomLink
                title="Webquest: Viajantes do Tempo - Recontando a História do Sertão Maranhense."
                link="https://labte.fpce.uc.pt/webquest/"
              />
              <CustomLink
                title="Webquest: Caminhos Históricos do Sertão Maranhense"
                link="https://web.archive.org/web/20050616010026/https://www.bestwebquests.com/default.asp"
              />
              <CustomLink
                title="Searching for China"
                link="https://ozline.com/webquests/china/chinaquest.html"
              />
              <CustomLink
                title="WebQuest representação da identidade negra no Brasil"
                link="https://sites.google.com/site/webtreino2/introdu%C3%A7%C3%A3o"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
