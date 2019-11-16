import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

const simpleObject = {
  adin: 'adin',
  dwa: 'dwa', 
  tri: 'tri'
}

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return {
      id: '12',
      number: '123'
    };
  }

  @Get('hi')
  hi(@Request() req) {
    return 'hello hi';
  }
  
}