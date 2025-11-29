import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onOpenChange, title, description, children, className }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
        <Dialog.Content
          className={cn(
            'fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white dark:bg-gray-900 p-6 shadow-2xl focus:outline-none data-[state=open]:animate-scale-in data-[state=closed]:animate-fade-out',
            className
          )}
        >
          {(title || description) && (
            <div className="mb-5">
              {title && (
                <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {title}
                </Dialog.Title>
              )}
              {description && (
                <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400">
                  {description}
                </Dialog.Description>
              )}
            </div>
          )}
          {children}
          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
