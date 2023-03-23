import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpreadsheetModule } from './spreadsheet/spreadsheet.module';

@Module({
  imports: [SpreadsheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
