import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HabitService } from './habit.service';
import { Prisma } from '@prisma/client';

@Controller('habits')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Post()
  create(@Body() createHabitData: Prisma.HabitCreateInput) {
    return this.habitService.createHabit(createHabitData);
  }

  @Get()
  findAll() {
    return this.habitService.findAllHabits();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitService.findHabitById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabitData: Prisma.HabitUpdateInput,
  ) {
    return this.habitService.updateHabit(+id, updateHabitData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitService.deleteHabit(+id);
  }
}
