import { UhOhIcon } from './icons/UhOhIcon'

interface Props {
  children: React.ReactNode
}

export default function Fallback({ children } : Props) {
  return (
    <section className='animate-in flex-1 flex flex-col gap-6 p-6 opacity-0 max-w-4xl px-3'>
      <h1 className='text-3xl font-bold'>
        {children}
      </h1>
      <UhOhIcon />
    </section>
  )
}
