import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import CourseCard from "@/components/CourseCard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Card from "@/components/Card"
import PlusIcon from "@/components/icons/PlusIcon"

export default async function CursosPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return redirect("/login")

  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="flex-1 w-full flex flex-col gap-5 items-center">
      <Header />
      <div className="animate-in flex-1 flex flex-col gap-6 p-6 opacity-0 max-w-4xl px-3">
        <h1 className='text-3xl font-bold'>Cursos</h1>
        <main className="grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
          <Card icon={PlusIcon} title="Nuevo Curso" path="/cursos/nuevo" />
          {courses?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}
