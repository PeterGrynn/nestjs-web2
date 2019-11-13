import { Controller, Get, Param } from '@nestjs/common';

@Controller('images')
export class ImagesController {
    @Get()
    findAll(): string{
        return 'You are in images api';
    }
    @Get(':id')
    findOne(@Param() param): string{
        return `images nr: ${param.id}`;
    }
}
