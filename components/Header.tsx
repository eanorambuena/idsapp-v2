'use client'

import useCurrentUser from '@/utils/hooks/useCurrentUser'
import HoverableLink from '@/components/HoverableLink'
import { ResizableNavbar } from '@/components/ResizeableNavbar'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

async function signInWithAuth0(email: string) {
  try {
    await fetch('/api/auto-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
  } catch (e) {
    console.error(e)
  }
}

export default function Header() { 
  const { user, isLoading, error } = useCurrentUser()
  const { user: auth0User, isLoading: iL } = useUser()

  const supabase = createClient()

  useEffect(() => {
    if (!auth0User || !auth0User.email) {
      return
    }
    (async () => {
      if (!auth0User || !auth0User.email) {
        return
      }
      await signInWithAuth0(auth0User.email)
    })()
  }, [auth0User, supabase.auth])

  const noUserOrUserInfoFallback = (
    <ResizableNavbar items={[]} />
  )
  
  if (isLoading || error || !user) return noUserOrUserInfoFallback

  const navItems = [
    {
      name: 'Cursos',
      link: '/cursos',
    },
    {
      name: 'Perfil',
      link: '/perfil',
    },
    {
      name: 'Instrucciones',
      link: '/instrucciones',
    },
    {
      name: 'Ayuda',
      link: 'mailto:soporte.idsapp@gmail.com',
    }
  ]

  return (
    <ResizableNavbar items={navItems} />
  )
}
