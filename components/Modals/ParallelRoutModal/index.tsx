'use client'

import { useEffect, useRef, useCallback, ComponentPropsWithoutRef } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'

import { cn } from '@/utils'

const modalRoot = document.getElementById('modal-root')

interface ParallelRoutModalProps extends ComponentPropsWithoutRef<'div'> {}

export default function ParallelRoutModal({ children, className = '', ...props }: ParallelRoutModalProps) {
    const router = useRouter()

    const dialogRef = useRef<HTMLDialogElement>(null)

    const closeHandler = useCallback(() => {
        router.back()
    }, [router])

    useEffect(() => {
        !dialogRef.current?.open && dialogRef.current?.showModal()
    }, [])

    return modalRoot
        ? createPortal(
              <div
                  {...props}
                  className={'fixed inset-0 z-10 mx-auto bg-black/60'}
                  onClick={closeHandler}
              >
                  <dialog
                      ref={dialogRef}
                      className={cn('sm:w-10/12 md:w-8/12 lg:w-1/2', className)}
                      onClose={closeHandler}
                  >
                      {children}
                  </dialog>
              </div>,
              modalRoot
          )
        : null
}
