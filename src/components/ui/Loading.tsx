import { cn } from '../../utils/cn';

interface LoadingProps {
  className?: string;
}

export function LoadingSpinner({ className }: LoadingProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export function LoadingSkeleton({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        'animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg',
        className
      )}
      style={{
        backgroundSize: '1000px 100%',
      }}
    />
  );
}

interface CardSkeletonProps {
  count?: number;
}

export function CardSkeleton({ count = 3 }: CardSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4">
          <LoadingSkeleton className="h-48 w-full" />
          <LoadingSkeleton className="h-6 w-3/4" />
          <LoadingSkeleton className="h-4 w-full" />
          <LoadingSkeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
}
