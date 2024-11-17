import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async register(email: string, password: string, role: 'reader' | 'author') {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({ email, password: hashedPassword, role });
        return this.usersRepository.save(user);
    }

    async login(email: string, password: string) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
            // Здесь можно вернуть токен, если используешь JWT
            return user;
        }
        throw new Error('Invalid credentials');
    }
}
