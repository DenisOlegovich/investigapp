'use client'

import { ComponentPropsWithoutRef, MouseEvent, useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/utils'
import CloseIcon from '@/components/icons/CloseIcon'

type BaseClientModalAnatomy = 'closeButton' | 'overlay' | 'dialog'
export interface BaseClientModalProps extends ComponentPropsWithoutRef<'div'> {
    isOpen?: boolean
    onClose: () => void
    isCloseOnOverlayClick?: boolean
    isCloseOnEscape?: boolean
    showCloseButton?: boolean
    anatomy?: Partial<Record<BaseClientModalAnatomy, string>>
}

export default function BaseClientModal({
    isOpen,
    onClose,
    isCloseOnOverlayClick = true,
    isCloseOnEscape = true,
    className,
    children,
    showCloseButton = true,
    anatomy: {
        overlay: overlayClassName = '',
        dialog: dialogClassName = '',
        closeButton: closeButtonClassName = '',
    } = {},
    ...props
}: BaseClientModalProps) {
    const [mounted, setIsMounted] = useState<boolean>()
    const overlayRef = useRef<HTMLDivElement>(null)
    const modalRoot = useMemo(() => (mounted ? document.getElementById('modal-root') : null), [mounted])

    const closeHandler = useCallback(() => {
        onClose && onClose()
    }, [onClose])

    const clickOverlayHandler = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            isCloseOnOverlayClick && e.target === overlayRef.current && closeHandler()
        },
        [closeHandler, isCloseOnOverlayClick]
    )

    const keyDownEscapeHandler = useCallback(
        (e: Event & { key: string }) => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        isCloseOnEscape && document.addEventListener('keydown', keyDownEscapeHandler)

        return () => {
            isCloseOnEscape && document.removeEventListener('keydown', keyDownEscapeHandler)
        }
    }, [isCloseOnEscape, keyDownEscapeHandler])

    return isOpen && modalRoot
        ? createPortal(
              <div
                  ref={overlayRef}
                  {...props}
                  className={cn('fixed inset-0 z-[100] mx-auto bg-black/60', overlayClassName)}
                  onClick={clickOverlayHandler}
              >
                  <div
                      className={cn(
                          'absolute z-20',
                          'w-full',
                          'max-w-[1440px]',
                          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                          'bg-white',
                          'p-sm sm:p-xl',
                          'rounded-[1.6rem]',
                          { 'pt-[5rem] sm:pt-[7.2rem] md:pt-[8.8rem]': showCloseButton },
                          className,
                          dialogClassName
                      )}
                  >
                      {showCloseButton && (
                          <button
                              className={cn(
                                  'absolute',
                                  'top-sm sm:top-xl',
                                  'right-sm sm:right-xl',
                                  'w-base sm:w-lg',
                                  'h-base sm:h-lg',
                                  'text-grey',
                                  closeButtonClassName
                              )}
                              onClick={onClose}
                          >
                              <CloseIcon className="size-full" />
                          </button>
                      )}
                      {children}
                  </div>
              </div>,
              modalRoot
          )
        : null
}
