import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { Prisma } from '@prisma/client';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Post()
  create(@Body() createReminderData: Prisma.ReminderCreateInput) {
    return this.reminderService.createReminder(createReminderData);
  }

  @Get()
  findAll() {
    return this.reminderService.findAllReminders();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reminderService.findReminderById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateReminderData: Prisma.ReminderUpdateInput,
  ) {
    return this.reminderService.updateReminder(+id, updateReminderData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reminderService.deleteReminder(+id);
  }
}
