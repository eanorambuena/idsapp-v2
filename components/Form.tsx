"use client"

import { useState } from "react"
import Question from "@/components/Question"

export type Evaluation = {
  title: string
  instructions: string
  deadLine: string
  sections: Record<string, string>
  questions: Record<string, any>
}

export default function Form({ evaluation }: { evaluation: Evaluation }) {
  const [values, setValues] = useState({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e)
  }

  const deadLineDay = evaluation.deadLine?.split('-')[2]
  const deadLineMonth = evaluation.deadLine?.split('-')[1]
  const deadLineYear = evaluation.deadLine?.split('-')[0]

  return (
    <form onSubmit={ handleSubmit } className='w-full sm:max-w-4xl mx-auto flex flex-col gap-6 bg-slate-100 dark:bg-slate-800 p-6'>
      <h1 className='text-2xl font-bold dark:text-gray-100'>{ evaluation.title }</h1>
      <p className='dark:text-gray-100'>{ evaluation.instructions }</p>
      <p className='dark:text-gray-100'>Fecha límite: { evaluation.deadLine ? `${deadLineDay} / ${deadLineMonth} / ${deadLineYear}` : 'Cargando' } </p>
      { Object.entries(evaluation.sections).map(([sectionKey, sectionValue]) => (
        <fieldset key={ sectionKey } className='w-full'>
          <legend className='text-lg font-bold dark:text-gray-100'>{ sectionValue as any }</legend>
          { Object.entries(evaluation.questions ?? {}).map(([questionKey, question]) => (
            <Question
              id={`${sectionKey}-${questionKey}`}
              key={`${sectionKey}-${questionKey}`}
              question={ question as any }
              sectionKey={ sectionKey }
            />
          ))}
        </fieldset>
      ))}
      <button type='submit' className='w-full bg-purple-950 text-white font-bold py-2 rounded-md'>Enviar</button>
    </form>
  )
}
