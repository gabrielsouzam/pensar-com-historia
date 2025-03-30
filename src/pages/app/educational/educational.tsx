// import { Helmet } from 'react-helmet-async'

// import heroEducationalBackground from '@/assets/hero-educational.png'
// import webQuestImage from '@/assets/webquest-image.png'

// import { AvaliationCards } from '../web-quest/components/avaliation-cards'
// import { DescriptionButton } from '../web-quest/components/description-button'
// import { RecomendationCards } from '../web-quest/components/recomendation-cards'

// export function Educational() {
//   return (
//     <>
//       <Helmet title="Educacional" />
//       <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
//         <div
//           className="ml-[-0.1rem] h-[15.75rem] bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${heroEducationalBackground})` }}
//         >
//           <div
//             className="absolute inset-0 top-20 z-10 h-[15.75rem] w-full"
//             style={{
//               background: `linear-gradient(270deg, #483424 4.17%, rgba(73, 54, 38, 0.98) 7.61%,
//               rgba(86, 63, 44, 0.9) 22.34%, rgba(129, 95, 66, 0.482302) 61.27%, rgba(129, 95, 66, 0.482302) 61.27%,
//                rgba(143, 105, 73, 0.350123) 73.17%, rgba(169, 125, 87, 0.1) 95.68%)`,
//             }}
//           ></div>

//           <h1 className="absolute z-20 pl-[46rem] pt-24 text-5xl text-brown-100">
//             Metodologia <span className="italic">WebQuest</span>
//           </h1>
//         </div>

//         <div className="h-full px-32 pt-10 text-brown-800">
//           <div>
//             <h2 className="mb-3 text-5xl font-light">Sobre</h2>
//             <hr className="mb-10 border-t-2 border-brown-800" />

//             <p className="mb-16 text-2xl font-light">
//               <p>
//                 WebQuest, enquanto metodologia e conceito, foram criados pelo
//                 professor Bernie Dodge e seu colaborador Tom March em 1995, na
//                 San Diego State University, na Califórnia, visando dar suporte
//                 ao professor ao propor a seus alunos a realização de atividades
//                 que integrem recursos disponibilizados na internet.
//               </p>
//               <p>
//                 De acordo com Bernie Dodge (1995, p. 1) “A{' '}
//                 <span className="italic">WebQuest</span> é “uma investigação
//                 orientada na qual algumas ou todas as informações com as quais
//                 os aprendizes interagem são originadas de recursos da internet”.
//                 A ideia é ajudar os alunos a explorar os recursos que a web
//                 oferece, o que não é pouco, e ao mesmo tempo, fazer com que os
//                 docentes sejam capazes de ajudar seus alunos a não se perderem
//                 no leque quase ilimitado de informações e arquivos que a rede
//                 oferece nos diversos sítios eletrônicos.{' '}
//               </p>
//               <p>
//                 Antes de produzir uma WebQuest, é necessário ater-se a sua
//                 estrutura e aos seus componentes (Introdução, tarefa, processo,
//                 recursos, avaliação e conclusão) com suas descrições e
//                 finalidades, conforme observa-se a seguir:
//               </p>
//             </p>

//             <div className="mb-48 flex items-center justify-between px-16">
//               <div className="space-y-20">
//                 <DescriptionButton title="1. Introdução" align="left" />
//                 <DescriptionButton title="6. Conclusão" />
//                 <DescriptionButton title="5. Avaliação" align="left" />
//               </div>
//               <img
//                 className="h-[18rem] w-[18rem]"
//                 src={webQuestImage}
//                 alt="Image de webquest"
//               />
//               <div className="space-y-20">
//                 <DescriptionButton title="2. Tarefa" align="right" />
//                 <DescriptionButton title="3. Processo" />
//                 <DescriptionButton title="4. Recursos" align="right" />
//               </div>
//             </div>

//             <h2 className="mb-3 text-right text-5xl font-light">
//               Produzindo uma <span className="italic">WebQuest</span>
//             </h2>
//             <hr className="mb-10 border-t-2 border-brown-800" />

//             <p className="mb-14 text-right text-2xl font-light">
//               Criar uma WebQuest envolve identificar um tema relevante e definir
//               objetivos pedagógicos claros. O próximo passo é pesquisar e
//               selecionar recursos confiáveis, planejar as atividades e elaborar
//               um roteiro que guie os alunos. Por fim, a WebQuest pode ser
//               apresentada em uma plataforma digital ou documento online,
//               garantindo acessibilidade e organização.
//             </p>

//             <div className="mb-24 space-y-4 rounded-3xl bg-brown-300 px-12 py-10">
//               <h2 className="text-4xl font-semibold">Exemplo prático</h2>
//               <p className="text-2xl font-light">
//                 Um exemplo prático de{' '}
//                 <span className="font-normal italic">WebQuest</span> poderia ser
//                 sobre sustentabilidade, onde os alunos são desafiados a propor
//                 soluções para reduzir o desperdício de água em suas comunidades.
//                 A tarefa incluiria pesquisa sobre práticas sustentáveis, análise
//                 de dados locais e desenvolvimento de uma campanha de
//                 conscientização.
//               </p>
//             </div>

//             <h2 className="mb-3 text-5xl font-light">
//               Avaliando uma <span className="italic">WebQuest</span>
//             </h2>
//             <hr className="mb-7 border-t-2 border-brown-800" />

//             <p className="mb-12 text-2xl font-light">
//               Para avaliar uma{' '}
//               <span className="font-normal italic">WebQuest</span>, deve-se
//               levar em consideração as seguintes perspectivas
//             </p>

//             <AvaliationCards />

//             <h2 className="mb-3 text-right text-5xl font-light">
//               Recomendações ao Implementar uma{' '}
//               <span className="italic">WebQuest</span>
//             </h2>
//             <hr className="mb-7 border-t-2 border-brown-800" />

//             <p className="mb-12 text-right text-2xl font-light">
//               Para implementar uma <span className="italic">WebQuest</span> de
//               maneira eficaz, é fundamental considerar aspectos essenciais como
//               planejamento, engajamento dos alunos e a adaptação às suas
//               necessidades, além de garantir acessibilidade e monitoramento
//               constante para otimizar os resultados educacionais. Elencamos 7
//               tópicos de recomendações:
//             </p>

//             <RecomendationCards />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
