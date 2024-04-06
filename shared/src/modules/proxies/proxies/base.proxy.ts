import { ClientProxy } from "@nestjs/microservices";
import { catchError, firstValueFrom, of, timeout } from "rxjs";

export abstract class BaseProxy {
    protected client: ClientProxy;

    constructor(client: ClientProxy) {
        this.client = client;
    }

    protected sendRequest<T>(cmd: string, data: any, timeoutDuration?: number): Promise<T> {
        const request = this.client.send<T>({ cmd }, data);
        if (timeoutDuration) {
            request.pipe(timeout(timeoutDuration));
        }
        return firstValueFrom(request
            .pipe(
                catchError(error => {
                    console.error('Error occurred:', error);
                    return of(null);
                })
            ));
    }
}