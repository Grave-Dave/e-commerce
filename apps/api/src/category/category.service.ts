import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {
  }
  // create(createCategoryInput: CreateCategoryInput) {
  //   return 'This action adds a new category';
  // }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }
  //
  // update(id: number, updateCategoryInput: UpdateCategoryInput) {
  //   return `This action updates a #${id} category`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
