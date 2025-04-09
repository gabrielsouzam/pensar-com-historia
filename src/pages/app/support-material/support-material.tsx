import { Link } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'

import { PageTitle } from '../@components/page-title'
import { StandardYouTubeVideo } from '../@components/standard-youtube-video'
import { CustomLink } from '../teacher-area/components/custom-link'
import { CustomLabel } from './components/custom-label'
import { CustomLinkLight } from './components/custom-link-light'

export function SupportMaterial() {
  return (
    <>
      <Helmet title="Material de Apoio" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <PageTitle title="Material de Apoio" />

        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">
            Sites com a temática de WebQuest
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 gap-2 text-justify text-2xl font-light">
            Selecionamos alguns sites para que você possa desbravar o mundo da
            WebQuest a partir de outras fontes e exemplos muito interessantes,
            esperamos que goste!
          </p>

          <div className="mb-24 space-y-5">
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

          <h2 className="mb-3 text-5xl font-light">Exemplos de WebQuest</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 gap-2 text-justify text-2xl font-light">
            Selecionamos alguns exemplos de WebQuest para que você possa
            explorar diferentes abordagens e aplicações dessa metodologia.
            Esperamos que esses modelos sirvam de inspiração para enriquecer
            suas práticas pedagógicas.
          </p>

          <div className="mb-20 space-y-5">
            <CustomLink
              title="Searching for China"
              link="https://ozline.com/webquests/china/chinaquest.html"
            />
            <CustomLink
              title="WebQuest representação da identidade negra no Brasil"
              link="https://sites.google.com/site/webtreino2/introdu%C3%A7%C3%A3o"
            />
          </div>

          <div className="mb-20 space-y-4 rounded-3xl bg-brown-300 px-12 py-10 shadow-md">
            <h2 className="text-4xl font-semibold">
              Template para produção de WebQuest
            </h2>
            <p className="text-justify text-2xl font-light">
              Sabemos que montar uma WebQuest do zero pode dar trabalho — por
              isso, preparamos um template editável em formato .docx (compatível
              com todos os pacotes de editores de texto, como Microsoft Word,
              Google Docs, entre outros). Assim, você pode personalizar cada
              parte da atividade de forma simples e rápida, adaptando o conteúdo
              ao seu público e deixando tudo com a sua cara!
            </p>

            <div className="flex items-center gap-3">
              <Link size={24} weight="light" className="text-brown-600" />
              <a
                href="/webquest-template.docx"
                className="text-normal text-2xl underline"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Baixe aqui nosso template para produção de Webquest
              </a>
            </div>
          </div>

          <h2 className="mb-3 text-5xl font-light">
            Formação e Ocupação do Sertão Sul Maranhense
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-2 text-justify text-2xl font-light">
            O estado do Maranhão foi inicialmente colonizado por franceses, até
            a consolidação do domínio português, o que explica seu riquíssimo
            patrimônio histórico, cultural e arquitetônico. O processo de
            colonização da região se deu em duas frentes distintas que foram:
          </p>

          <div className="mb-10 pl-5">
            <ul className="list-inside list-disc text-justify text-2xl font-light">
              <li>
                A frente de{' '}
                <span className="font-semibold">colonização litorânea</span>,
                ligada ao comércio externo, consolidou uma economia voltada para
                a produção agrícola de exportação.
              </li>
              <li>
                A frente de{' '}
                <span className="font-semibold">colonização do interior</span>,
                marcada pela criação de gado, sustentou uma economia de
                abastecimento e circulação interna.
              </li>
            </ul>
          </div>

          <p className="mb-8 text-2xl font-bold italic">
            Quer saber mais? Acesse os vídeos!
          </p>

          <div className="mb-32 grid grid-cols-2 gap-6 px-14">
            <StandardYouTubeVideo
              videoId="LKx5RDLOOCM"
              index={1}
              title="As frentes de Expansão na Colonização do Maranhão "
            />
            <StandardYouTubeVideo
              videoId="0Co2OpPDew8"
              index={2}
              title="A frente do interior na Colonização do Maranhão."
            />
            <StandardYouTubeVideo
              videoId="H1M8FvHf0K0"
              index={3}
              title="Curiosidade sobre Francisco de Paula Ribeiro"
            />
            <StandardYouTubeVideo
              videoId="_mtT35ZjLt4"
              index={4}
              title="Ocupação do sul do Maranhão durante o período colonial"
            />
          </div>

          <h2 className="mb-3 text-5xl font-light">
            Fontes documentais do Sertão Sul Maranhense
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 gap-2 text-justify text-2xl font-light">
            Se você está pesquisando sobre a história, cultura e sociedade do
            Maranhão — especialmente o Sertão Sul Maranhense —, reunimos uma
            seleção valiosa de acervos digitais e bibliotecas que disponibilizam
            manuscritos, mapas, jornais, biografias e muito mais.
          </p>

          <div className="mb-16 flex justify-between gap-12">
            <div className="flex-1 space-y-10">
              <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
                <CustomLinkLight
                  link="https://casas.cultura.ma.gov.br/portal/bpbl/acervodigital/index.php"
                  title="Biblioteca Benedito Leite- Acervo Digital"
                />

                <div className="flex items-center justify-center gap-5">
                  <CustomLabel title="Manuscritos" />
                  <CustomLabel title="Ofícios" />
                  <CustomLabel title="Inventário" />
                </div>

                <p className="text-justify text-2xl">
                  <span className="font-semibold">
                    Os documentos tratam de questões administrativas, eleitorais
                    e econômicas.
                  </span>{' '}
                  Essenciais para entender a organização política, social e
                  econômica da região.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
                <CustomLinkLight
                  link="https://www12.senado.leg.br/hpsenado"
                  title="Biblioteca Digital do Senado Federal"
                />

                <div className="flex items-center justify-center gap-5">
                  <CustomLabel title="Ensaios biográficos" />
                  <CustomLabel title="Livros & Revistas" />
                  <CustomLabel title="Outros documentos" />
                </div>

                <p className="text-justify text-2xl">
                  <span className="font-semibold">
                    As biografias focam em líderes políticos, religiosos,
                    intelectuais e personalidades locais. Os demais documentos
                    tratam da história, cultura e sociedade do Maranhão,
                    especialmente no contexto do século XIX e do Sertão
                    maranhense.
                  </span>{' '}
                  Fornece insights sobre o cotidiano e a formação cultural do
                  Maranhão e a região do sertão maranhense. Acesse os documentos
                  abaixo:
                </p>
                <div className="pl-5">
                  <ul className="list-inside list-disc text-justify text-2xl font-light">
                    <li className="underline">
                      <a href="https://www2.senado.leg.br/bdsf/item/id/518661">
                        Pantheon maranhense
                      </a>{' '}
                    </li>
                    <li className="underline">
                      <a href="https://www2.senado.leg.br/bdsf/item/id/221681">
                        Diccionario bibliographico brazileiro
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
                <CustomLinkLight
                  link="https://ppghist.uema.br/publicacoes/dissertacoes-2/dissertacoes-2/"
                  title="Repositório de Dissertações Defendidas no PPGHIST"
                />

                <div className="flex items-center justify-center gap-5">
                  <CustomLabel title="Produção Científica Acadêmica" />
                  <CustomLabel title="História" />
                </div>

                <p className="text-justify text-2xl">
                  <span className="font-semibold">
                    No Repositório de Dissertações do PPGHIST você pode
                    encontrar dissertações e produtos educacionais que tratam de
                    questões sobre a história local e a História do sertão
                    maranhense.
                  </span>{' '}
                  Acesse o documento abaixo com as dissertações do PPGHIST
                </p>
                <div className="pl-5">
                  <ul className="list-inside list-disc text-justify text-2xl font-light">
                    <li className="underline">
                      <a href="https://repositorio.uema.br/bitstream/123456789/1573/2/Pelas%20trilhas%20do%20sert%C3%A3o%20maranhense%20-%20e.book%20-%20Samara%20de%20Almeida%20Ramos%20-okkk.pdf">
                        Produto Educacional sobre o Sertão Sul Maranhense
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-10">
              <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
                <CustomLinkLight
                  link="https://memoria.bn.gov.br/DocReader/DocReader.aspx?bib=718130&Pesq=Balaiada&pagfis=154"
                  title="Hemeroteca e Acervo Digital da Biblioteca Digital da Fundação Biblioteca Nacional"
                />

                <div className="flex items-center justify-center gap-5">
                  <CustomLabel title="Mapas históricos" />
                  <CustomLabel title="Jornais" />
                </div>

                <p className="text-justify text-2xl">
                  <span className="font-semibold">
                    Mapas sobre as condições geográficas e sociais do sertão.
                    Jornais abordam questões sociais e políticas no Maranhão
                    Oitocentista.
                  </span>{' '}
                  Esses documentos, juntos, oferecem um panorama detalhado de
                  aspectos relacionados a memória, geografia e o contexto
                  sociopolítico e cultural do Maranhão oitocentista. Acesse os
                  documentos abaixo:
                </p>
                <div className="pl-5">
                  <ul className="list-inside list-disc pl-6 text-justify text-2xl font-light">
                    <li className="underline">
                      <a href="https://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart529483/cart529483.jpg">
                        Mapa da capitania do Maranhão
                      </a>{' '}
                    </li>
                    <li className="underline">
                      <a href="https://objdigital.bn.br/objdigital2/acervo_digital/div_cartografia/cart519673/cart519673.jpg">
                        Mapa da província do Maranhão em oito Comarcas
                      </a>
                    </li>
                    <li className="underline">
                      <a href="https://memoria.bn.gov.br/DocReader/DocReader.aspx?bib=718130&Pesq=Balaiada&pagfis=154">
                        O BemTevi - 1838
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
                <CustomLinkLight
                  link="https://www.docvirt.com/docreader.net/DocReader.aspx?bib=CRV_RevistaIHGB&id=451608820785&pagfis=1"
                  title="Revista Digital do Instituto Histório e Geográfico Brasileiro"
                />
                <div className="flex items-center justify-center gap-5">
                  <CustomLabel title="Produção Científica Acadêmica" />
                  <CustomLabel title="História" />
                  <CustomLabel title="História" />
                </div>

                <p className="text-justify text-2xl">
                  <span className="font-semibold">
                    Relatos das viagens de Francisco de Paula Ribeiro ao Sertão
                    sul maranhense. Descrição do território de Pastos Bons, nos
                    sertões do Maranhão.
                  </span>{' '}
                  O documento descreve as impressões e a descrição do território
                  do sertão maranhense, contemplando aspectos geográficos,
                  sociais e culturais.
                </p>
                <p className="text-justify italic">
                  *Documentos digitais não primários que podem ser consultados
                  no site na pasta nº 012 a partir da página 41 contemplando
                  aspectos geográficos, sociais e culturais.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-3 text-5xl font-light">
            WebQuest - História do Sertão Sul Maranhense
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-10 gap-2 text-justify text-2xl font-light">
            As WebQuests são atividades pedagógicas online que incentivam a
            pesquisa guiada e o aprendizado ativo. Pensadas especialmente para o
            ensino de História, essas propostas desafiam os alunos a se tornarem
            investigadores do passado, analisando fontes, conectando informações
            e construindo seu próprio entendimento sobre os eventos históricos.{' '}
            <br />
            Confira duas WebQuests temáticas sobre o Sertão Sul Maranhense:
          </p>

          <div className="space-y-5">
            <CustomLink
              title="Webquest: Viajantes do Tempo - Recontando a História do Sertão Maranhense."
              link="https://docs.google.com/document/d/1Gwu_mPodIkbvYf7r_kw4lcODdeP3BMZFan7Y4cjyg6g/edit?tab=t.0#heading=h.gjdgxs"
            />
            <CustomLink
              title="Webquest: Caminhos Históricos do Sertão Maranhense"
              link="https://docs.google.com/document/d/1g2st6rRnQt5EFYNaJQEAlf_BWDWE-2jdtPyWsIeTePA/edit?tab=t.0#heading=h.fvzoc156gfa4"
            />
          </div>
        </div>
      </div>
    </>
  )
}
