import Card from '@/components/Card'
import Fallback from '@/components/Fallback'
import EvaluationIcon from '@/components/icons/EvaluationIcon'
import UsersIcon from '@/components/icons/UsersIcon'
import SettingsIcon from '@/components/icons/SettingsIcon'
import { isProfessorServer } from '@/utils/isProfessorServer'
import { evaluationPath, studentsPath } from '@/utils/paths'
import { getCourse, getCurrentUser, getUserInfo } from '@/utils/queries'

export default async function Page({ params }: { params: { abbreviature: string, semester: string } }) {
  const user = await getCurrentUser()
  const userInfo = await getUserInfo(user.id)

  const course = await getCourse(params.abbreviature, params.semester)

  if (!course) return <Fallback>No se encontró el curso</Fallback>

  if (!userInfo || !userInfo.id) return <Fallback>Error al cargar la información del usuario</Fallback>

  const isCourseProfessor = await isProfessorServer({
    userInfoId: userInfo.id!,
    courseId: course.id
  })

  return (
    <div className='animate-in flex-1 flex flex-col gap-6 p-6 opacity-0 max-w-4xl px-3'>
      <h1 className='text-3xl font-bold'>{course.title ?? params.abbreviature} {params.semester}</h1>
      <main className='animate-in flex flex-wrap gap-6'>
        <Card icon={EvaluationIcon} title='Evaluaciones' path={evaluationPath(params)} />
        {isCourseProfessor && (
          <>
            <Card icon={UsersIcon} title='Estudiantes' path={studentsPath(params)} />
            <Card icon={UsersIcon} title='Profesores' path={`/cursos/${params.abbreviature}/${params.semester}/profesores`} />
            <Card icon={SettingsIcon} title='Configuración' path={`/cursos/${params.abbreviature}/${params.semester}/configuracion`} />
          </>
        )}
      </main>
    </div>
  )
}
