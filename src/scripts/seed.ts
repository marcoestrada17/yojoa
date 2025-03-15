import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../users/users.service';
import { Role } from '../users/entities/roles.enum';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  await usersService.create({
    username: 'admin',
    password: 'admin123',
    role: Role.ADMIN,
  });

  console.log('Usuario admin creado!');
  await app.close();
}

seed();