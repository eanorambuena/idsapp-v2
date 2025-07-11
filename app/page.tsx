import Link from 'next/link'

export default async function Index() {
  return (
    <div className='bg-center min-h-screen max-w-screen bg-cover bg-[url(../public/background-compressed.webp)] bg-gray-800 bg-blend-multiply flex items-center justify-center'>
      <main className='flex flex-col gap-4 px-14 mx-auto text-center py-24 lg:py-56'>
        <h1 className="sr-only">Instituto para el Desarrollo Sustentable App</h1>
        <h2 className='text-4xl md:text-6xl text-balance font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 lg:text-7xl'>
          Convocando saberes para el cuidado de la Tierra
        </h2>
        <p className='mb-8 text-lg font-normal text-balance text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
          En esta plataforma del Instituto para el Desarrollo Sustentable podrás encontrar las coevaluaciones de todos los cursos.
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
          <Link href='/cursos'className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900'>
            Ir a los Cursos
            <svg className='w-3.5 h-3.5 ms-2 rtl:rotate-180' aria-hidden='true'  fill='none' viewBox='0 0 14 10'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
            </svg>
          </Link>
          <a
            href='https://desarrollosustentable.uc.cl/'
            target='_blank'
            className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 transition-colors duration-300'
            rel='noreferrer noopener'
          >
            Más información del IDS
          </a>  
        </div>
      </main>
    </div>
  )
}
