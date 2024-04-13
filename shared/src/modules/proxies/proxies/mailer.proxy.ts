import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { QueueNames } from "../../..";
import { firstValueFrom } from "rxjs";

type User = {
    firstName: string;
    email: string;
}

@Injectable()
export class MailerProxy {
    constructor(
        @Inject(QueueNames.MAILER) private readonly client: ClientProxy,
    ) { }

    async sendUserConfirmation(newUser: User, token: string) {
        await firstValueFrom(
            this.client.send<string>({ cmd: 'sendUserConfirmation' }, {
                user: { name: newUser.firstName, email: newUser.email },
                token,
            })
        );
    }

    async sendNewPassword(user: User, newPassword: string) {
        await firstValueFrom(
            this.client.send<string>({ cmd: 'sendNewPassword' }, {
                user: { name: user.firstName, email: user.email },
                newPassword,
            })
        );
    }
}