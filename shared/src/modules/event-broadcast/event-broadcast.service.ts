import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { QueueNames } from "../..";

@Injectable()
export class BroadcastService {
  private readonly microservice_clients: { [key: string]: ClientProxy } = {};

  constructor() {
    for (const microservice in QueueNames) {
      const client: ClientProxy = ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URI],
          queue: QueueNames[microservice as keyof typeof QueueNames],
          queueOptions: {
            durable: false
          }
        }
      });
      this.microservice_clients[microservice] = client;
    }
  }

  async broadcastEventToAllMicroservices(
    event: any,
    data: any,
    excluding?: QueueNames[]
  ) {
    console.log(`broadcasting event...`, { event, data, excluding });
    for (const microservice in QueueNames) {
      console.log(microservice);
      const currentQueueNameVal = QueueNames[microservice as keyof typeof QueueNames]
      const ignoreMicroservice = excluding?.includes(currentQueueNameVal);
      if (ignoreMicroservice) {
        continue;
      }
      const client = this.microservice_clients[microservice];
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
