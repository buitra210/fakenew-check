'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingsCount?: number;
  className?: string;
  showPageNumbers?: boolean;
}

function generatePagination(
  currentPage: number,
  totalPages: number,
  siblingsCount: number = 1
): (number | 'ellipsis')[] {
  const totalPageNumbers = siblingsCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingsCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis', totalPages];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingsCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, 'ellipsis', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingsCount = 1,
  className,
  showPageNumbers = true,
}: PaginationProps) {
  const paginationRange = React.useMemo(
    () => generatePagination(currentPage, totalPages, siblingsCount),
    [currentPage, totalPages, siblingsCount]
  );

  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('flex items-center justify-center gap-1', className)}
    >
      <PaginationButton
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </PaginationButton>

      {showPageNumbers &&
        paginationRange.map((page, index) =>
          page === 'ellipsis' ? (
            <PaginationEllipsis key={`ellipsis-${index}`} />
          ) : (
            <PaginationButton
              key={page}
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </PaginationButton>
          )
        )}

      <PaginationButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <ChevronRight className="h-4 w-4" />
      </PaginationButton>
    </nav>
  );
}

interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function PaginationButton({
  className,
  isActive,
  disabled,
  children,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium transition-all',
        'hover:bg-[#1a1b1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-40',
        isActive && 'bg-[#1a1b1f] text-white relative',
        !isActive && !disabled && 'text-muted-foreground hover:text-foreground',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {isActive && (
        <span
          className="absolute inset-0 rounded-md pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(77, 229, 197, 0.2) 0%, rgba(106, 171, 251, 0.2) 50%, rgba(145, 51, 255, 0.2) 100%)',
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden
      className={cn(
        'flex h-8 w-8 items-center justify-center text-muted-foreground',
        className
      )}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
    </span>
  );
}

export { Pagination, PaginationButton, PaginationEllipsis };
export type { PaginationProps };

















