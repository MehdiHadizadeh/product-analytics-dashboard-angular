import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  template: `
    <div class="flex justify-center items-center gap-2">
      <button
        (click)="onPageChange(currentPage - 1)"
        [disabled]="currentPage === 1"
        class="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
               hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
      >
        Previous
      </button>
      
      <span class="px-4 py-2 dark:text-white">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      
      <button
        (click)="onPageChange(currentPage + 1)"
        [disabled]="currentPage === totalPages"
        class="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
               hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
      >
        Next
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}