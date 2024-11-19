import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
} from '@nestjs/common';
import { ServiceService } from './service.service';
// import { CreateServiceDto } from './dto/create-service.dto';
// import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get('/books')
  getAllBooks() {
    return this.serviceService.getAllBooks();
  }

  @Get('/books/:id')
  getBookById(@Param('id') id: string) {
    return this.serviceService.getBookById(+id);
  }

  @Delete('/books/:id')
  @HttpCode(204)
  deleteBook(@Param('id') id: string) {
    this.serviceService.deleteBook(+id);
  }

  @Post('/books')
  @HttpCode(201)
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('isbn') isbn: string,
    @Body('publishYear') publishYear: number,
  ) {
    return this.serviceService.createBook(title, author, isbn, publishYear);
  }

  @Patch('/books/:id')
  @HttpCode(200)
  updateBook(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('isbn') isbn: string,
    @Body('publishYear') publishYear: number,
    @Body('reserved') reserved: boolean,
  ) {
    return this.serviceService.updateBook(
      +id,
      title,
      author,
      isbn,
      publishYear,
      reserved,
    );
  }
}
