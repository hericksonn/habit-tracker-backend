import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompletionService } from './completion.service';
import { Completion } from '@prisma/client';

@Controller('completions')
export class CompletionController {
  constructor(private readonly completionService: CompletionService) {}

  @Post()
  async create(
    @Body() completionData: { date: Date; habitId: number },
  ): Promise<Completion> {
    return this.completionService.createCompletion(completionData);
  }

  @Get()
  async findAll(): Promise<Completion[]> {
    return this.completionService.findAllCompletions();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Completion> {
    return this.completionService.findCompletionById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() completionData: Completion,
  ): Promise<Completion> {
    return this.completionService.updateCompletion(+id, completionData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Completion> {
    return this.completionService.deleteCompletion(+id);
  }
}
