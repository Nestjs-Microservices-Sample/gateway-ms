import { ClientProxy, RpcException } from '@nestjs/microservices';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

import { catchError, Observable } from 'rxjs';

import { NATS_SERVICE } from '../../../core/config';

import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../interfaces';
import { ProductPatterns } from '../enums';

@Controller('products')
export class ProductsController {
  public constructor(
    @Inject(NATS_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  @Get()
  public GetProducts(): Observable<Product[]> {
    return this.client.send(ProductPatterns.ListProduct, {});
  }

  @Get(':id')
  public GetProductById(@Param('id') id: string): Observable<Product> {
    return this.client.send(ProductPatterns.GetProductById, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Post()
  public CreateProducts(@Body() input: CreateProductDto): Observable<Product> {
    return this.client.send(ProductPatterns.CreateProduct, { ...input });
  }
}
