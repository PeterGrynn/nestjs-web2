import { Injectable } from '@nestjs/common';

const hello = {
  name: 'Szymon', 
  surname: 'Jankowski',
  height: '185cm',
  iq: 132
}

@Injectable()
export class AppService {
  getHello(): Object {
    return hello;
  }
}
