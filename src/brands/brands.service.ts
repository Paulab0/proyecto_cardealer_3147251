import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {

 constructor(
  private prisma: PrismaService
 ){}

  create(body: any) {
    return this.prisma.brands.create({
      data: body
    })
  }

  findAll() {
    return this.prisma.brands.findMany({ 
      orderBy: { name: 'asc' }
    })
  }

  findOne(id: number) {
    return this.prisma.brands.findFirst({
      where: { id: id }
    })
  
  }

  async update(id: number,
    body:any) { return await this.prisma.brands.update({
      where: { id: id },
      data: body
    })
  }

  async remove(id: number) {
    await this.prisma.brands.delete({
      where: { id: id }
    })
    return {
      "exito" : true,
      "mensaje" : "Eliminado correctamente",
      "id" : id
    };
  }
}
