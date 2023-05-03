import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import { hash, compare } from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ user: User }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return { user };
  }

  async login(loginDto: LoginDto): Promise<{
    email: string;
    accessToken: string;
    refreshToken: string;
  }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const jwtPayload = { username: user.email, sub: user._id };

    const accessToken = this.jwtService.sign(jwtPayload, { expiresIn: '15m' });

    const refreshToken = this.jwtService.sign(jwtPayload, {
      expiresIn: '7d',
    });

    await this.userModel.updateOne({ _id: user._id }, { refreshToken }).exec();

    return { email: user.email, accessToken, refreshToken };
  }

  async refresh(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    console.log({ refreshToken });
    const decoded = this.jwtService.verify(refreshToken);
    const user = await this.userModel.findOne({ _id: decoded.sub }).exec();

    if (!user || user.refreshToken !== refreshToken) {
      throw new Error('Invalid refresh token');
    }

    const payload = { username: user.email, sub: user._id };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    const newRefreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    await this.userModel
      .updateOne({ _id: user._id }, { refreshToken: newRefreshToken })
      .exec();

    return {
      accessToken: accessToken,
      refreshToken: newRefreshToken,
    };
  }
}
