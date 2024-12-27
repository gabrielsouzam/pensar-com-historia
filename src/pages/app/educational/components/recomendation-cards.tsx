import { RecomendationCardNumber } from './recomendation-card-number'

export function RecomendationCards() {
  return (
    <div className="mb-32 grid grid-cols-2 gap-9">
      <div>
        <RecomendationCardNumber number="1" />
        <div className="space-y-4 rounded-3xl bg-brown-300 px-12 py-10 text-center">
          <h2 className="text-4xl font-semibold">Planejamento e Organização</h2>
          <p className="text-2xl font-light">
            Planejar uma <span className="font-normal italic">WebQuest</span>{' '}
            requer definir objetivos claros e preparar materiais atualizados e
            acessíveis. É importante testar os links e recursos antes da
            aplicação para evitar interrupções no fluxo de atividades.
          </p>
        </div>
      </div>
      <div>
        <RecomendationCardNumber number="2" />
        <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
          <h2 className="text-4xl font-semibold">Adaptação ao Público-Alvo</h2>
          <p className="text-2xl font-light">
            Cada <span className="font-normal italic">WebQuest</span> deve ser
            adaptada ao nível de conhecimento e interesses dos alunos. Isso
            inclui usar uma linguagem adequada, escolher temas relevantes e
            considerar as habilidades tecnológicas do público.
          </p>
        </div>
      </div>
      <div>
        <RecomendationCardNumber number="3" />
        <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
          <h2 className="text-4xl font-semibold">Engajamento e Motivação</h2>
          <p className="text-2xl font-light">
            Para engajar os alunos, escolha temas atuais e insira elementos
            multimídia, como vídeos e gráficos. Incentivar a criatividade e
            permitir escolhas dentro do processo também aumenta o envolvimento.
          </p>
        </div>
      </div>
      <div>
        <RecomendationCardNumber number="4" />
        <div className="space-y-4 rounded-3xl bg-brown-300 px-12 py-10 text-center">
          <h2 className="text-4xl font-semibold">
            Colaboração e Interatividade
          </h2>
          <p className="text-2xl font-light">
            <span className="font-normal italic">WebQuests</span> funcionam
            melhor quando promovem o trabalho em grupo e a troca de ideias.
            Ferramentas digitais colaborativas, como Google Docs, podem
            facilitar a interação entre os participantes.
          </p>
        </div>
      </div>
      <div>
        <RecomendationCardNumber number="5" />
        <div className="space-y-4 rounded-3xl bg-brown-300 px-12 py-10 text-center">
          <h2 className="text-4xl font-semibold">Capacitação de Educadores</h2>
          <p className="text-2xl font-light">
            Professores precisam entender como planejar, criar e aplicar uma
            <span className="font-normal italic">WebQuest</span>. Para isso, é
            essencial oferecer treinamentos e compartilhar exemplos práticos que
            demonstrem o potencial dessa ferramenta no ensino.
          </p>
        </div>
      </div>
      <div>
        <RecomendationCardNumber number="6" />
        <div className="space-y-4 rounded-3xl bg-brown-400 px-12 py-10 text-center text-brown-50">
          <h2 className="text-4xl font-semibold">Monitoramento Contínuo</h2>
          <p className="text-2xl font-light">
            Acompanhar o progresso dos alunos durante a execução da{' '}
            <span className="font-normal italic">WebQuest</span>
            permite identificar dificuldades e oferecer suporte imediato. Além
            disso, o monitoramento contínuo facilita ajustes futuros na
            metodologia.
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <RecomendationCardNumber number="7" />
        <div className="space-y-4 rounded-3xl bg-brown-300 px-12 py-10 text-center">
          <h2 className="text-4xl font-semibold">
            Tecnologia e Acessibilidade
          </h2>
          <p className="text-2xl font-light">
            Certifique-se de que a{' '}
            <span className="font-normal italic">WebQuest</span> esteja
            disponível em formatos compatíveis com dispositivos móveis e que
            ofereça opções acessíveis para alunos com necessidades especiais,
            como transcrições ou leitores de tela.
          </p>
        </div>
      </div>
    </div>
  )
}
