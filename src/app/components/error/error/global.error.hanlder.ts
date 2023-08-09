import { Injectable, ErrorHandler } from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor(private route: Router){}

    handleError(error: any): void {
        
        if(error instanceof HttpErrorResponse){
            this.route.navigateByUrl("/error");
            console.error(error);
        }else{
            this.route.navigateByUrl("/error");
            console.error(error);
        }
    }

}