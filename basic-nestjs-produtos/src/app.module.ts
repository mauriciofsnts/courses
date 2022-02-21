import { LivrosService } from './livros-service';
import { LivrosController } from './livros-controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // to help load our .env
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
