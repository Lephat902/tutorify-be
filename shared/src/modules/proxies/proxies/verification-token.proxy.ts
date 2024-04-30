import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { QueueNames } from "../../..";
import { firstValueFrom } from "rxjs";

@Injectable()
export class VerificationTokenProxy {
    constructor(
        @Inject(QueueNames.VERIFICATION_TOKEN) private readonly client: ClientProxy,
    ) { }

    verify(token: string) {
        return firstValueFrom(
            this.client.send<string>({ cmd: 'verify' }, token)
        );
    }

    createNewToken(userId: string) {
        return firstValueFrom(
            this.client.send<string>({ cmd: 'insert' }, userId)
        );
    }

    deleteAllTokenOfUser(userId: string) {
        return firstValueFrom(
            this.client.send<string>({ cmd: 'deleteAll' }, userId)
        );
    }
}