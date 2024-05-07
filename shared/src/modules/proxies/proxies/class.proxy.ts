import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { QueueNames } from '../../../enums';
import { BaseProxy } from './base.proxy';

@Injectable()
export class ClassProxy extends BaseProxy {
  constructor(
    @Inject(QueueNames.CLASS_AND_CATEGORY) client: ClientProxy,
  ) {
    super(client);
  }

  async getClassById<T>(id: string): Promise<T> {
    return this.sendRequest('getClassById', id);
  }
}
