// src/images/images.controller.ts
import { Controller, Get } from '@nestjs/common';
import * as wintechData from '../wintechData.json'; // sesuaikan path

@Controller('images')
export class ImagesController {
  @Get()
  getImages() {
    return wintechData;
  }
}
