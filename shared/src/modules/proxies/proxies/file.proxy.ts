import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { QueueNames } from "../../..";
import { BaseProxy } from "./base.proxy";

@Injectable()
export class FileProxy extends BaseProxy {
    constructor(
        @Inject(QueueNames.FILE) client: ClientProxy,
    ) {
        super(client);
    }

    deleteMultipleFiles(fileIds: string[]): Promise<object> {
        return this.sendRequest('deleteMultipleFiles', fileIds);
    }
}