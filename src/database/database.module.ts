import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'Marco',
        password: 'Estarda18',
        database: 'yojoa',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, 
    })
]
})
export class DatabaseModule {}