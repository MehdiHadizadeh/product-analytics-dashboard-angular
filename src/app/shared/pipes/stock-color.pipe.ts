import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stockColor',
    standalone: false
})
export class StockColorPipe implements PipeTransform {
    transform(stock: number): string {
        if (stock < 20) return 'text-red-600';
        if (stock < 70) return 'text-yellow-600';
        return 'text-green-600';
    }
}