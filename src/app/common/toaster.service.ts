import { Injectable } from '@angular/core';

declare let toaster: any

@Injectable()
export class ToasterService {
    success(message: string, title?: string) {
        toaster.success(message, title);
    }

    warning(message: string, title?: string) {
        toaster.warning(message, title);
    }

    error(message: string, title?: string) {
        toaster.error(message, title);
    }
}