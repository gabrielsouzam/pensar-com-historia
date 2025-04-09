import { zodResolver } from '@hookform/resolvers/zod'
import { At } from '@phosphor-icons/react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import aboustUsBg from '@/assets/about-us-bg.png'
import guanaProfile from '@/assets/guana-profile.png'
import lattesIcon from '@/assets/lattes-icon.svg'
import marceloProfile from '@/assets/marcelo-profile.png'

const messageFormSchema = z.object({
  name: z.string().min(1, { message: 'Por favor, insira seu nome.' }),
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório.' })
    .email({ message: 'Insira um e-mail válido.' }),
  theme: z.string().min(1, { message: 'Informe o tema do contato.' }),
  content: z.string().min(1, { message: 'Escreva sua mensagem.' }),
})

type messageFormData = z.infer<typeof messageFormSchema>

export function AboutUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<messageFormData>({
    resolver: zodResolver(messageFormSchema),
  })

  function handleSendMessage(data: messageFormData) {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    const now = new Date()
    const time = now.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const templateParams = {
      name: data.name,
      email: data.email,
      theme: data.theme,
      content: data.content,
      time,
    }

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response)
        toast.success('Mensagem enviada com sucesso!')
        reset()
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error)
        toast.error('Ocorreu um erro ao enviar. Tente novamente.')
      })
  }

  return (
    <div className="text-base-white flex h-full w-full flex-col">
      <div
        className="relative bg-cover bg-center bg-no-repeat px-32 py-24"
        style={{ backgroundImage: `url(${aboustUsBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#453526] to-[#A27E5C1A] opacity-100" />

        <div className="relative z-10">
          <div className="fle-col mb flex w-[40rem] flex-col gap-5">
            <h1 className="text-6xl font-normal">
              Quem <strong>somos?</strong>
            </h1>
            <span className="mb-20 text-3xl font-light italic">
              Conheça os rostos que estão por trás do <br /> portal pensa.com{' '}
              <strong>a História</strong>
            </span>
          </div>

          <div className="mb-24 w-full space-y-10 rounded-3xl border-4 border-brown-500 bg-brown-400 px-20 py-14 shadow-lg">
            <h2 className="text-3xl font-bold">
              Antonio Guanacuy Almeida Moura
            </h2>

            <div className="flex items-start justify-between gap-2">
              <p className="text-2xl">
                Doutorando em História pela Universidade Estadual do
                Maranhão-UEMA, licenciado em História pela Universidade Estadual
                do Piauí-UESPI. Mestre na área de Ensino de História pela
                Universidade Federal do Tocantins-UFT-Campus Araguaína. Docente
                Efetivo com Dedicação Exclusiva do Instituto Federal de
                Educação, Ciência e Tecnologia do Maranhão-Campus São João dos
                Patos. Pesquisa na(s) área(s): Ensino de História, Metodologias
                Ativas e Tecnologias Educacionais Digitais.
              </p>

              <img
                src={guanaProfile}
                alt="Foto de guanacuy"
                className="relative -top-52 left-28 rounded-full border-8 border-brown-600/70"
              />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <At size={24} />{' '}
                <a
                  href="antonio.guanacuy@ifma.edu.br"
                  className="mb text-2xl font-semibold underline"
                >
                  antonio.guanacuy@ifma.edu.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={lattesIcon} alt="" />
                <a
                  href="http://lattes.cnpq.br/2660971989902220"
                  className="mb text-2xl font-semibold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lattes.cnpq.br/2660971989902220
                </a>
              </div>
            </div>
          </div>

          <div className="mb-24 w-full space-y-10 rounded-3xl border-4 border-brown-500 bg-brown-400 px-20 py-14 shadow-lg">
            <h2 className="text-3xl font-bold">Marcelo Cheche Galves</h2>

            <div className="flex items-start justify-between gap-2">
              <p className="text-2xl">
                Doutor em História pela Universidade Federal Fluminense (2010) e
                pós-doutor pela Universidade Nova de Lisboa (2020). Professor,
                desde 2002, do Departamento de História da Universidade Estadual
                do Maranhão e, desde 2014, do Programa de Pós-graduação em
                História - mestrado e doutorado (PPGHIST). Atua nas áreas de
                História do Brasil e do Maranhão, no Oitocentos. Orienta
                pesquisas sobre história política, com ênfase na circulação de
                ideias e de impressos. É o atual Pró-reitor de Pesquisa e
                Pós-graduação da Universidade Estadual do Maranhão (2023-2026).
              </p>

              <img
                src={marceloProfile}
                alt="Foto de marcelo"
                className="relative -top-52 left-28 rounded-full border-8 border-brown-600/70"
              />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <At size={24} />{' '}
                <a
                  href="marcelochecheppg@gmail.com"
                  className="mb text-2xl font-semibold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  marcelochecheppg@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={lattesIcon} alt="" />
                <a
                  href="http://lattes.cnpq.br/6812330304018227"
                  className="mb text-2xl font-semibold underline"
                >
                  lattes.cnpq.br/6812330304018227
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brown-800 px-44 py-24">
        <h2 className="mb-5 text-6xl font-light">Entre em contato conosto!</h2>
        <h3 className="mb-16 text-3xl font-light italic">
          Preencha sua dúvida abaixo e lhe respoderemos via e-mail!
        </h3>

        <form
          className="flex flex-col items-center space-y-11"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <div className="w-full">
            <input
              {...register('name')}
              placeholder="Nome"
              className={`w-full rounded-lg bg-brown-150 px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${
                errors.name ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <input
              {...register('email')}
              placeholder="E-mail"
              className={`w-full rounded-lg bg-brown-150 px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${
                errors.email ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <input
              {...register('theme')}
              placeholder="Tema de contato"
              className={`w-full rounded-lg bg-brown-150 px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${
                errors.theme ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.theme && (
              <span className="text-sm text-red-500">
                {errors.theme.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <textarea
              {...register('content')}
              placeholder="Mensagem"
              className={`h-80 w-full rounded-lg bg-brown-150 px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${
                errors.content ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.content && (
              <span className="text-sm text-red-500">
                {errors.content.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full bg-brown-300 px-28 py-5 text-center text-3xl font-semibold text-brown-800 shadow-2xl"
          >
            enviar
          </button>
        </form>
      </div>
    </div>
  )
}
