import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as xlsx from 'xlsx';
import { File } from 'multer';
import { PrismaService } from 'src/prisma.service';
import { CreateSpreadsheetDto } from './dto/create-spreadsheet.dto';

@Controller('spreadsheet')
export class SpreadsheetController {
  constructor(private prisma: PrismaService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSpreadsheet(@UploadedFile() file: File) {
    const workbook = xlsx.read(file.buffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    const data = rows.map((row) => [row[0], row[1]]);

    const headers = data[0].map((header) => header.toLowerCase()); // extract headers
    const formattedData: CreateSpreadsheetDto[] = data.slice(1).map((row) => {
      return headers.reduce((acc, header, index) => {
        acc[header] = isNaN(row[index]) ? row[index] : Number(row[index]);
        return acc;
      }, {});
    });
    await this.prisma.poco.createMany({
      data: formattedData.map((row) => ({
        poco: row.poco,
        cadastro: row.cadastro,
      })),
    });
    return formattedData;
  }
}
