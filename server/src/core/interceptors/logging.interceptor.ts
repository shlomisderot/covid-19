import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const im = context.getArgByIndex(0); // get IncominMessage
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`Incomin message from: ${im.ip}, method: ${im.method}, action: ${im.url}, time: ${Date.now() - now}ms`)));
  }
}
