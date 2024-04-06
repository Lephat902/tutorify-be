import { Module } from '@nestjs/common';
import { AddressProxy } from './proxies/address.proxy';
import { FileProxy } from './proxies/file.proxy';
import { MailerProxy } from './proxies/mailer.proxy';
import { UserPreferencesProxy } from './proxies/user-preferences.proxy';
import { VerificationTokenProxy } from './proxies/verification-token.proxy';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueNames } from '../../enums';
import { ConfigService } from '@nestjs/config';
import { AuthProxy } from './proxies/auth.proxy';

const Proxies = [
    AddressProxy,
    AuthProxy,
    FileProxy,
    MailerProxy,
    UserPreferencesProxy,
    VerificationTokenProxy,
]

@Module({
    imports: [
        ClientsModule.registerAsync(
            Object.values(QueueNames).map(name => ({
                name,
                inject: [ConfigService],
                useFactory: async (configService: ConfigService) => ({
                    transport: Transport.RMQ,
                    options: {
                        urls: [configService.get<string>('RABBITMQ_URI')],
                        queue: name,
                        queueOptions: {
                            durable: false,
                        },
                    },
                })
            }))
        ),
    ],
    providers: Proxies,
    exports: [
        ...Proxies,
        ClientsModule,
    ],
})
export class ProxiesModule { }