import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import TestModule from './modules/test/test.module';
import UserModule from './modules/user/user.module';
import SessionModule from './modules/session/session.module';
import GalleryModule from './modules/gallery/gallery.module';
import AuthMiddleware from './common/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from './common/config/auth.config';

@Module({
  imports: [
    TestModule,
    UserModule,
    SessionModule,
    GalleryModule,
    JwtModule.register({
      global: true,
      secret: authConfig.secret,
      signOptions: { expiresIn: authConfig.expiresIn },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('gallery');
  }
}
