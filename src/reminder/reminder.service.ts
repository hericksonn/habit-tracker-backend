import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Reminder, Prisma } from '@prisma/client';

@Injectable()
export class ReminderService {
  constructor(private prisma: PrismaService) {}

  async createReminder(data: Prisma.ReminderCreateInput): Promise<Reminder> {
    return this.prisma.reminder.create({ data });
  }

  async findAllReminders(): Promise<Reminder[]> {
    return this.prisma.reminder.findMany();
  }

  async findReminderById(id: number): Promise<Reminder | null> {
    return this.prisma.reminder.findUnique({ where: { id } });
  }

  async updateReminder(
    id: number,
    data: Prisma.ReminderUpdateInput,
  ): Promise<Reminder> {
    return this.prisma.reminder.update({
      where: { id },
      data,
    });
  }

  async deleteReminder(id: number): Promise<Reminder> {
    return this.prisma.reminder.delete({ where: { id } });
  }
}
