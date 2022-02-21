import { LivrosService } from './livros-service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livros } from './livros-model';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livros[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livros {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livros) {
    return this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livros): Livros {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  deletar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
