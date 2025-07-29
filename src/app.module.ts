// app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImagesController } from './images/images.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // folder tempat gambar disimpan
      serveRoot: '/uploads', // URL path prefix
    }),
  ],
  controllers: [ImagesController],
})
export class AppModule {}
