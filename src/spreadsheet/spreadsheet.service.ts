import { Injectable } from '@nestjs/common';
import { CreateSpreadsheetDto } from './dto/create-spreadsheet.dto';
import { UpdateSpreadsheetDto } from './dto/update-spreadsheet.dto';

@Injectable()
export class SpreadsheetService {
  create(createSpreadsheetDto: CreateSpreadsheetDto) {
    return 'This action adds a new spreadsheet';
  }

  findAll() {
    return `This action returns all spreadsheet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spreadsheet`;
  }

  update(id: number, updateSpreadsheetDto: UpdateSpreadsheetDto) {
    return `This action updates a #${id} spreadsheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} spreadsheet`;
  }
}
