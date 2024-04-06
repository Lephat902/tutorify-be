import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { BaseProxy } from "./base.proxy";
import { QueueNames } from "../../../enums";

@Injectable()
export class AuthProxy extends BaseProxy {
    constructor(
        @Inject(QueueNames.AUTH) client: ClientProxy,
    ) {
        super(client);
    }

    async getUserById(userId: string, timeoutDuration?: number) {
        return this.sendRequest(
            'getUserById',
            userId,
            timeoutDuration
        );
    }
}