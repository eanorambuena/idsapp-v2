// components/students/studentsColumns.tsx
'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CourseStudentWithUserInfo } from '@/utils/queries'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'

type Props = {
  editingId: string | null
  editedStudent: any
  onEdit: (student: CourseStudentWithUserInfo) => void
  onChange: (field: string, value: string) => void
  onSave: () => void
  onCancel: () => void
  onDelete: (student: CourseStudentWithUserInfo) => void
}

export const studentsColumns = ({
  editingId,
  editedStudent,
  onEdit,
  onChange,
  onSave,
  onCancel,
  onDelete
}: Props): ColumnDef<CourseStudentWithUserInfo>[] => [
  {
    id: 'firstName',
    header: 'Nombres',
    cell: ({ row }) => {
      const student = row.original
      return editingId === student.id ? (
        <Input
          value={editedStudent.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          className='w-full'
        />
      ) : (
        student.userInfo.firstName
      )
    }
  },
  {
    id: 'lastName',
    header: 'Apellidos',
    cell: ({ row }) => {
      const student = row.original
      return editingId === student.id ? (
        <Input
          value={editedStudent.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          className='w-full'
        />
      ) : (
        student.userInfo.lastName
      )
    }
  },
  {
    id: 'email',
    header: 'Correo',
    accessorFn: (row) => row.userInfo.email,
    cell: ({ getValue }) => getValue<string>(),
    filterFn: 'includesString'
  },
  {
    accessorKey: 'group',
    header: 'Grupo',
    filterFn: (row, columnId, filterValue) => {
      const rowValue = Number(row.getValue(columnId))
      const inputValue = Number(filterValue)
      return filterValue === '' || rowValue === inputValue
    },
    cell: ({ row }) => {
      const student = row.original
      return editingId === student.id ? (
        <Input
          value={editedStudent.group}
          onChange={(e) => onChange('group', e.target.value)}
          className='w-24'
        />
      ) : (
        student.group
      )
    }
  },
  {
    id: 'actions',
    header: '',
    enableHiding: false,
    cell: ({ row }) => {
      const student = row.original
      if (editingId === student.id) {
        return (
          <div className='flex gap-2'>
            <Button variant='link' className='text-green-600 p-0 h-auto' onClick={onSave}>
              Guardar
            </Button>
            <Button variant='link' className='text-red-600 p-0 h-auto' onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        )
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='border bg-neutral-50 dark:bg-neutral-900 text-md shadow-md rounded-md text-neutral-900 dark:text-neutral-50'>
            <DropdownMenuItem onClick={() => onEdit(student)}>
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(student)} className='text-red-600 dark:text-red-400'>
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
