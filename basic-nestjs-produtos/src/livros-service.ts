import { Injectable } from '@nestjs/common';
import { Livros } from './livros-model';

@Injectable()
export class LivrosService {
  livros: Livros[] = [
    new Livros('LIV01', 'Livro TDD e BDD na prática', 29.09),
    new Livros('LIV02', 'Livro Lógica de programação', 51.5),
    new Livros('LIV03', 'Livro Especialista em Front end', 150.0),
    new Livros('LIV04', 'Livro Código limpo', 235.0),
    new Livros('LIV05', 'Livro Iniciando com ReactJS', 40.0),
  ];

  obterTodos(): Livros[] {
    return this.livros;
  }

  obterUm(id: number): Livros {
    return this.livros[0];
  }

  criar(produto: Livros) {
    this.livros.push(produto);
  }

  alterar(produto: Livros): Livros {
    return produto;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}
