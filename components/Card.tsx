import Link from 'next/link'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

export interface CardProps {
  icon?: React.FunctionComponent<{ size: number }>
  title?: string
  path?: string
  className?: string
  children?: React.ReactNode
}

export default function Card({ icon, path, title, className, children } : CardProps) {
  if (!path) {
    return (
      <CardContainer>
        <CardBody className={`w-fit h-fit max-w-xl bg-gray-50 flex flex-col gap-4 justify-center items-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border ${className}`}>
          {(icon || title) &&(
            <CardItem className='flex flex-col justify-center items-center'>
              {icon && icon({ size: 48 })}
              {title && <h3 className="text-xl font-bold">{title}</h3>}
            </CardItem>
          )}
          {children}
        </CardBody>
      </CardContainer>
    )
  }

  return (
    <Link
      href={path}
    >
      <Card icon={icon} title={title} className={className}>
        {children}
      </Card>
    </Link>
  )
}
