import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { HabitModule } from './habit/habit.module';
import { ReminderModule } from './reminder/reminder.module';
import { CompletionModule } from './completion/completion.module';

@Module({
  imports: [UserModule, HabitModule, ReminderModule, CompletionModule],
  providers: [PrismaService],
})
export class AppModule {}
