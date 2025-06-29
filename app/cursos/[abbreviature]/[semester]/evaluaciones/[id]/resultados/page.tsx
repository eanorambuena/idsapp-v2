import Fallback from '@/components/Fallback'
import { evaluationPath } from '@/utils/paths'
import { getCourse, getCourseStudents, getCurrentUser, getEvaluationByParams, getGrades } from '@/utils/queries'
import { redirect } from 'next/navigation'
import { ResultsDisplay } from './ResultsDisplay'

interface Props {
  params: {
    abbreviature: string
    semester: string
    id: string
  }
  searchParams: {
    sendReport: boolean
    page: string
  }
}

export default async function Page({ params, searchParams }: Props) {
  await getCurrentUser()

  const course = await getCourse(params.abbreviature, params.semester)
  if (!course) return <Fallback>No se encontró el curso</Fallback>

  const students = await getCourseStudents({ course })
  if (!students || students?.length === 0)
    return <Fallback>No hay estudiantes inscritos en el curso</Fallback>

  const evaluation = await getEvaluationByParams(params)
  if (!evaluation) return <Fallback>No se encontró la evaluación</Fallback>
  
  return (
    <div className='animate-in flex-1 flex flex-col gap-6 p-8 opacity-0'>
      <h1 className='text-3xl font-bold'>Resultados {evaluation.title}</h1>
      {new Date(evaluation.deadLine) > new Date() && (
        <p className='text-red-500 w-full'>Advertencia: La evaluación aún no ha finalizado</p>
      )}
      <ResultsDisplay evaluation={evaluation} students={students} />
    </div>
  )
}
