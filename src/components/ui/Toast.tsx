import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = ToastPrimitive.Viewport;

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Toast({ title, description, variant = 'default', open, onOpenChange }: ToastProps) {
  const variantStyles = {
    default: 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800',
    success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
  };

  return (
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-slide-up data-[state=closed]:animate-fade-out data-[swipe=end]:animate-fade-out',
        variantStyles[variant]
      )}
    >
      <div className="grid gap-1">
        {title && (
          <ToastPrimitive.Title className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
      <ToastPrimitive.Close className="absolute right-2 top-2 rounded-md p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
        <X className="h-4 w-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}

export function ToastContainer() {
  return (
    <ToastViewport className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]" />
  );
}
