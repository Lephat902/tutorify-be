import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { QueueNames } from "../..";

@Injectable()
export class BroadcastService {
  private readonly microservice_clients: Map<QueueNames, ClientProxy> = new Map();

  constructor() {
    for (const queueNameKey in QueueNames) {
      const currentQueueNameVal = QueueNames[queueNameKey];
      const client: ClientProxy = ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URI],
          queue: currentQueueNameVal,
          queueOptions: {
            durable: false
          }
        }
      });
      this.microservice_clients[currentQueueNameVal] = client;
    }
  }

  async broadcastEventToAllMicroservices(
    event: any,
    data: any,
    excluding?: QueueNames[]
  ) {
    console.log(`broadcasting event...`, { event, data, excluding });
    for (const queueNameKey in QueueNames) {
      const currentQueueNameVal = QueueNames[queueNameKey];
      const ignoreMicroservice = excluding?.includes(currentQueueNameVal);
      if (ignoreMicroservice) {
        continue;
      }
      const client = this.microservice_clients[currentQueueNameVal];
      client.emit(event, data || {});
    }
  }

  async broadcastEventToSelectMicroservices(
    event: any,
    data: any,
    microserviceNamesList: QueueNames[]
  ) {
    console.log(`broadcasting event...`, { event, data, microserviceNamesList });
    for (const microservice of microserviceNamesList) {
      const client: ClientProxy = this.microservice_clients[microservice];
      if (!client) {
        console.log(`no client found by: ${microservice}; continuing...`);
        continue;
      }
      client.emit(event, data || {});
    }
  }
}
