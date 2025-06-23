import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import AuthButton from '@/components/AuthButton'

interface User {
  picture: string
  name: string
}

interface UserDropdownMenuProps {
  user: User
}

export function UserDropdownMenu({ user }: UserDropdownMenuProps) {
  const isUserDataAvailable = user !== undefined

  return (
    isUserDataAvailable && (
      <DropdownMenu>
        <DropdownMenuTrigger className="!border-none !active:!border-none focus:!border-none">
          <img src={user.picture} alt={user.name} className="size-10 rounded-full border-2 border-[#265F1A]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[9999] [&_*]:!text-md [&_*]:!text-gray-800 [&_*:hover]:!text-emerald-500">
          <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Link to="/perfil">Mi Perfil</Link></DropdownMenuItem>
          <DropdownMenuItem>
            <AuthButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  )
}
