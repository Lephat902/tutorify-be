import { ClientProxy } from "@nestjs/microservices";
import { catchError, firstValueFrom, of, timeout } from "rxjs";

function identity(x: any) {
    return x;
}

export abstract class BaseProxy {
    protected client: ClientProxy;

    constructor(client: ClientProxy) {
        this.client = client;
    }

    protected sendRequest<T>(cmd: string, data: any, timeoutDuration?: number): Promise<T> {
        const request = this.client.send<T>({ cmd }, data);
        return firstValueFrom(request.pipe(
            timeoutDuration ? timeout(timeoutDuration) : identity,
            catchError(error => {
                console.error('Error occurred:', error);
                return of(null);
            })
        ));
    }    
}