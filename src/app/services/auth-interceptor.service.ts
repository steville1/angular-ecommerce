import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // Specify the URL(s) you want to protect

    const endpoint = environment.tastfultreasureApiUrl;
   
    const protectedUrls = [
      endpoint + '/orders',
      endpoint + '/checkout/purchase',
    ];
    if (protectedUrls.some(url => req.url.includes(url))) {
      const authToken = this.authService.getToken();
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
  

    /**
     * Pass the token through all request
     * 
     * 
     *     
    const authToken = this.authService.getToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next.handle(authReq);
  }
}
**/
