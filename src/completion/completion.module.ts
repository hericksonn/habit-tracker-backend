import { Module } from '@nestjs/common';
import { CompletionService } from './completion.service';
import { CompletionController } from './completion.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CompletionController],
  providers: [CompletionService, PrismaService],
})
export class CompletionModule {}
