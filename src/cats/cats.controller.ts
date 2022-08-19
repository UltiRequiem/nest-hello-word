import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

const cats = ['Veronika', 'Diego', 'Micaela', 'Rosa'];

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string[] {
    return cats;
  }

  @Get('random')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getRandom(@Req() _request: Request): string {
    return cats[Math.floor(Math.random() * cats.length)];
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() body: CreateCatDto): string {
    console.log(body);

    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  wild() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5' };
    }
  }

  @Get(':id')
  findOne(@Param() params: Record<string, string>): string {
    console.log(params.id);
    console.log(typeof params.id);

    return `This action returns a #${params.id} cat`;
  }
}

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
