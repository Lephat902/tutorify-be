import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { QueueNames, StoredLocation } from "../../..";
import { BaseProxy } from "./base.proxy";

type UserPreferencesData = {
    classCategoryIds: string[];
    location: StoredLocation;
}
type UserPreferences = {
    userId: string,
    preferences: UserPreferencesData,
}

@Injectable()
export class UserPreferencesProxy extends BaseProxy {
    constructor(
        @Inject(QueueNames.USER_PREFERENCES) client: ClientProxy,
    ) {
        super(client);
    }

    async getUserPreferencesByUserId(userId: string, timeoutDuration?: number) {
        return this.sendRequest<UserPreferences>(
            'getUserPreferencesByUserId',
            userId,
            timeoutDuration
        );
    }
}