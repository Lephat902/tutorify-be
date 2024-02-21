import { Module } from '@nestjs/common';
import { BroadcastService } from './event-broadcast.service';

@Module({
    providers: [BroadcastService],
    exports: [BroadcastService]
})
export class BroadcastModule { }
