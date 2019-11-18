import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

const simpleObject = {
  adin: 'adin',
  dwa: 'dwa', 
  tri: 'tri'
}

@Controller()
export class AppController {

  @Get()
  hi(@Request() req) {
    return 'hello hi';
  }
  
}