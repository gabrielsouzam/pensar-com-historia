import IndioVaqueiroImage from '@/assets/indio-maranhense.png'
import SertaoMaranhense from '@/assets/sertao-maranhense2.jpg'
import VaqueirosMaranhenses from '@/assets/vaqueiros-maranhense.png'

import { ColonizationCards } from './../maranhao-hiterland/components/cards-duplication'

export function MaranhaoHinterland() {
  return (
    <div className="font-sans">
      {/* Primeira Seção: O Sertão Maranhense */}
      <div
        className="relative h-[56.25rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${SertaoMaranhense})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(73, 47, 22, 1) 0%, rgba(73, 47, 22, 0.8) 30%, rgba(73, 47, 22, 0.6) 50%, rgba(73, 47, 22, 0.4) 70%, rgba(73, 47, 22, 0) 90%)`,
          }}
        ></div>

        <div
          className="absolute"
          style={{
            top: '40%',
            left: '90px',
            transform: 'translateY(-50%)',
          }}
        >
          <h1
            className="text-[64px] font-light leading-[87.16px]"
            style={{ fontWeight: 300, color: '#F5F5DC' }}
          >
            O Sertão <span className="font-bold">Maranhense</span>
          </h1>
          <p
            className="mt-4 text-[32px] font-light italic leading-9"
            style={{ fontWeight: 300, color: '#F5F5DC' }}
          >
            da ocupação à colonização
          </p>
        </div>
      </div>

      {/* Segunda Seção: Do índio ao vaqueiro */}
      <div
        className="relative h-[62.25rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IndioVaqueiroImage})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(73, 47, 22, 1) 0%, rgba(73, 47, 22, 0.8) 30%, rgba(73, 47, 22, 0.6) 50%, rgba(73, 47, 22, 0.4) 70%, rgba(73, 47, 22, 0) 90%)`,
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(73, 47, 22, 1) 0%, rgba(73, 47, 22, 0.8) 30%, rgba(73, 47, 22, 0.6) 50%, rgba(73, 47, 22, 0.4) 70%, rgba(73, 47, 22, 0) 90%)`,
          }}
        ></div>

        <div
          className="absolute ml-auto max-w-[500px]"
          style={{
            top: '40%',
            right: '80px',
            transform: 'translateY(-50%)',
          }}
        >
          <h2
            className="text-end text-[40px] font-semibold leading-tight"
            style={{ color: '#F5F5DC' }}
          >
            Do índio ao vaqueiro
          </h2>
          <p
            className="mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            O Maranhão é o terceiro estado do Nordeste com maior população
            indígena, com mais de 72% dos indígenas vivendo em territórios
            indígenas.
          </p>
          <p
            className="mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            As Terras Indígenas maranhenses se concentram especialmente na
            região leste (bioma da Amazônia Oriental) e no centro do estado
            (bioma do Cerrado). A maioria das etnias indígenas do Maranhão
            deixou de existir, seja por extermínio ou por assimilação.
          </p>
          <p
            className="mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            Quem sucede o índio como representante do sertão é o vaqueiro, visto
            que este foi o responsável pela criação do gado e pela manutenção da
            fazenda. Por ser a economia essencial regida pela criação do gado,
            não é difícil entender por que o vaqueiro desempenha um papel tão
            significativo na identidade cultural da região.
          </p>
        </div>
      </div>
      <div
        className="relative h-[91.125rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${VaqueirosMaranhenses})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(73, 47, 22, 1) 0%, rgba(73, 47, 22, 0.8) 30%, rgba(73, 47, 22, 0.6) 50%, rgba(73, 47, 22, 0.4) 70%, rgba(73, 47, 22, 0) 90%)`,
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(73, 47, 22, 1) 0%, rgba(73, 47, 22, 0.8) 30%, rgba(73, 47, 22, 0.6) 50%, rgba(73, 47, 22, 0.4) 70%, rgba(73, 47, 22, 0) 90%)`,
          }}
        ></div>

        <div
          className="absolute ml-auto max-w-[600px]"
          style={{
            top: '36%',
            left: '80px',
            transform: 'translateY(-50%)',
          }}
        >
          <h2
            className="text-[40px] font-semibold leading-tight"
            style={{ color: '#F5F5DC' }}
          >
            Colonização
          </h2>
          <p
            className="mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            O estado do Maranhão foi inicialmente colonizado por{' '}
            <span className="font-bold">franceses</span> e depois por{' '}
            <span className="font-bold">holandeses</span>, até a consolidação do
            domínio português, o que explica seu riquíssimo patrimônio
            histórico, cultural e arquitetônico.
          </p>
          <p
            className="mb-16 mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            A colonização do sertão maranhense foi um dos dois frentes de
            ocupação do território do Maranhão, juntamente com a frente
            litorânea...
          </p>
          <ColonizationCards />
          <p
            className="mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            No início do século XVIII, chegaram nos sertões do Maranhão, os
            primeiros vaqueiros baianos irradiados do vale do rio São Francisco
            que conseguiram romper a barreira natural do rio Parnaíba. Logo
            vendo a imensidão dos verdes pastos maranhenses, pois nunca
            avistados na caatinga nordestina, batizaram a região com o nome de
            Pastos Bons, e logo fundaram uma vila com mesmo nome, na chapada
            nordeste da serra do Itapecuru (CARDOSO, 1947)
          </p>
          <p
            className="mt-4 text-justify text-[16px] font-light leading-8"
            style={{ color: '#F5F5DC' }}
          >
            Durante algum tempo, a região de Pastos Bons abasteceu mercados em
            outras regiões, todavia, a pecuária nordestina começou a dar sinais
            de decadência a partir do final do século XVIII, com a ascensão da
            mesma atividade mineira e sulista.
          </p>
        </div>
      </div>
    </div>
  )
}
