import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Completion, Prisma } from '@prisma/client';

@Injectable()
export class CompletionService {
  constructor(private prisma: PrismaService) {}

  async createCompletion(data: {
    date: Date;
    habitId: number;
  }): Promise<Completion> {
    return this.prisma.completion.create({
      data: {
        date: data.date,
        habit: {
          connect: {
            id: data.habitId,
          },
        },
      },
    });
  }

  async findAllCompletions(): Promise<Completion[]> {
    return this.prisma.completion.findMany();
  }

  async findCompletionById(id: number): Promise<Completion | null> {
    return this.prisma.completion.findUnique({ where: { id } });
  }

  async updateCompletion(
    id: number,
    data: Prisma.CompletionUpdateInput,
  ): Promise<Completion> {
    return this.prisma.completion.update({
      where: { id },
      data,
    });
  }

  async deleteCompletion(id: number): Promise<Completion> {
    return this.prisma.completion.delete({ where: { id } });
  }
}
