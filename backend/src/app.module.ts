import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module.ts';
import { User } from './auth/user.entity.ts';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres', // или другой тип БД
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1',
            database: 'test',
            entities: [User ],
            synchronize: true, // не используйте в продакшене
        }),
        AuthModule,
    ],
})
export class AppModule {}
