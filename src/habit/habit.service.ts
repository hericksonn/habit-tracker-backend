import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Habit, Prisma } from '@prisma/client';

@Injectable()
export class HabitService {
  constructor(private prisma: PrismaService) {}

  async createHabit(data: Prisma.HabitCreateInput): Promise<Habit> {
    return this.prisma.habit.create({ data });
  }

  async findAllHabits(): Promise<Habit[]> {
    return this.prisma.habit.findMany();
  }

  async findHabitById(id: number): Promise<Habit | null> {
    return this.prisma.habit.findUnique({ where: { id } });
  }

  async updateHabit(id: number, data: Prisma.HabitUpdateInput): Promise<Habit> {
    return this.prisma.habit.update({
      where: { id },
      data,
    });
  }

  async deleteHabit(id: number): Promise<Habit> {
    return this.prisma.habit.delete({ where: { id } });
  }
}
