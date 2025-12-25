import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail-component',
  standalone: false,
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product$!: Observable<Product>;

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap(params => this.productService.getProductById(+params['id']))
    );
  }
}
