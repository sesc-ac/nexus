'use client' // Error boundaries must be Client Components
 
import { Button } from '@/app/_ui/Button'
import Flexbox from '@/app/_ui/Flexbox'
import { useEffect } from 'react'
import PageContainer from './_ui/PageContainer'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <PageContainer>
      <h2>Erro interno</h2>
      <p><b>Mensagem:</b> {error.message}</p>

      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        >
        Recarregar a Página
      </Button>
    </PageContainer>
  )
}