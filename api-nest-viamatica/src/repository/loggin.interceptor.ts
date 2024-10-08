import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const start = Date.now();

    console.log(`Request - ${method} ${url} - Iniciado`);

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - start;
        console.log(
          `Request - ${method} ${url} - Finalizado en ${responseTime}ms`,
        );
      }),
    );
  }
}
