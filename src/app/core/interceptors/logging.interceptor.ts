import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const startTime = Date.now();
        console.log(`🚀 ${req.method} ${req.url}`);

        return next.handle(req).pipe(
            tap({
                next: () =>
                    console.log(`${req.method} ${req.url} (${Date.now() - startTime}ms)`),
                error: err =>
                    console.error(` ${req.method} ${req.url}`, err)
            })
        );
    }
}
