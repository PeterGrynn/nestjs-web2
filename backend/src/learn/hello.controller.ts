import { Controller, Get, Param} from '@nestjs/common';

@Controller('hello')
export class HelloController {
    @Get()
    findAll(): string {
        return 'Hello world';
    }

    @Get(':id')
    huj(@Param() param): string {
        return `Hello world numer:`;
    }
}
