import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { StudyModule } from './study/study.module';
@Module({
  imports: [MoviesModule, StudyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
