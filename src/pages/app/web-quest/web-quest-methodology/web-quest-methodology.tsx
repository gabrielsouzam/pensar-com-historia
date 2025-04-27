import { Helmet } from 'react-helmet-async'

import { WebQuestTitle } from '../components/web-quest-title'
import { YouTubeVideo } from '../components/youtube-video'

export function WebQuestMethodology() {
  return (
    <>
      <Helmet title="Metodologia Webquest" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <WebQuestTitle title="Metodologia" />

        <div className="h-full px-32 pt-10 text-brown-800">
          <div>
            <h2 className="mb-3 text-5xl font-light">Sobre</h2>
            <hr className="mb-10 border-t-2 border-brown-800" />

            <p className="mb-16 text-justify text-2xl font-light">
              <p>
                <span className="italic">WebQuest</span>, enquanto metodologia e
                conceito, foram criados pelo professor Bernie Dodge e seu
                colaborador Tom March em 1995, na San Diego State University, na
                Califórnia, visando dar suporte ao professor ao propor a seus
                alunos a realização de atividades que integrem recursos
                disponibilizados na internet.
              </p>
              <p>
                De acordo com Bernie Dodge (1995, p. 1) “A WebQuest é “uma
                investigação orientada na qual algumas ou todas as informações
                com as quais os aprendizes interagem são originadas de recursos
                da internet”. A ideia é ajudar os alunos a explorar os recursos
                que a web oferece, o que não é pouco, e ao mesmo tempo, fazer
                com que os docentes sejam capazes de ajudar seus alunos a não se
                perderem no leque quase ilimitado de informações e arquivos que
                a rede oferece nos diversos sítios eletrônicos.
              </p>
            </p>

            <h2 className="mb-3 text-5xl font-light">Vídeo complementar</h2>
            <hr className="mb-10 border-t-2 border-brown-800" />
            <p className="mb-16 text-justify text-2xl font-light">
              Ao longo da sua jornada aqui na plataforma, você se deparará com
              uma playlist exclusiva de vídeos como material de suporte ao
              aprendizado e desenvolvimento de uma WebQuest
            </p>

            <YouTubeVideo videoId="pInmH3pF6Sg" />
          </div>
        </div>
      </div>
    </>
  )
}
