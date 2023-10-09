import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
// 异常赛选器
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const res: any = exception.getResponse();
    // { message: [ '邮箱格式不正确' ], error: 'Bad Request', statusCode: 400 }

    const returnMessage = () => {
      if (typeof res === 'string') {
        return res;
      } else if (typeof res.message === 'object') {
        let result = res.message?.join(',');
        return result;
      }
    };

    response.status(status).json({
      status,
      data: null,
      timestamp: new Date().toISOString(),
      path: request.url,
      success: false,
      message: returnMessage(),
    });
  }
}
