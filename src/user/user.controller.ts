import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findUserById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(+id);
  }
}
