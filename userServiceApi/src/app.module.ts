import { Module } from '@nestjs/common';
import { ApiControllerController } from './api-controller/api-controller.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [ApiControllerController, UsersController],
  providers: [UsersService],
})
export class AppModule {}
