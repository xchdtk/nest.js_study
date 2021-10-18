import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
@Module({
  imports: [MoviesModule, MongooseModule.forRoot('mongodb://localhost/nest-blog-project', { useNewUrlParser: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
