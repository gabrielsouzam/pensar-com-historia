import webQuestTitleImage from '@/assets/web-quest-title-image.png'

interface WebQuestTitleProps {
  title: string
}

export function WebQuestTitle({ title }: WebQuestTitleProps) {
  return (
    <div
      className="ml-[-0.1rem] mr-16 flex h-[15.75rem] justify-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${webQuestTitleImage})` }}
    >
      <div
        className="absolute inset-0 top-20 z-10 h-[15.75rem] w-full"
        style={{
          background: `linear-gradient(270deg, #483424 4.17%, rgba(73, 54, 38, 0.98) 7.61%,
      rgba(86, 63, 44, 0.9) 22.34%, rgba(129, 95, 66, 0.482302) 61.27%, rgba(129, 95, 66, 0.482302) 61.27%,
       rgba(143, 105, 73, 0.350123) 73.17%, rgba(169, 125, 87, 0.1) 95.68%)`,
        }}
      ></div>

      <h1 className="absolute z-20 max-w-[54rem] pt-24 text-right text-5xl text-brown-100">
        {title} <span className="italic">WebQuest</span>
      </h1>
    </div>
  )
}
