import { Module } from '@nestjs/common';
import { MemsController } from './mems.controller';
import { MemsService } from './mems.service';

@Module({
    imports: [],
    controllers: [MemsController],
    providers: [MemsService],
})

export class MemsModule {}