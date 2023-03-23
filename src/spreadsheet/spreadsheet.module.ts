import { Module } from '@nestjs/common';
import { SpreadsheetService } from './spreadsheet.service';
import { SpreadsheetController } from './spreadsheet.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SpreadsheetController],
  providers: [SpreadsheetService, PrismaService],
})
export class SpreadsheetModule {}
