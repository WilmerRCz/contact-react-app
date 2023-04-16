import React from 'react'

interface Props {
  title: string
}
function TitleSection ({ title }: Props) {
  return (
    <h1 className="font-bold text-4xl text-black dark:text-white flex justify-center items-center text-center">
      {title}
    </h1>
  )
}

export default TitleSection
