import { QueueNames } from "../../enums";

export class ClassSessionDefaultAddressReturnedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-default-address-returned`;
}

export class ClassSessionDefaultAddressReturnedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly isOnline: boolean,
        readonly address: string,
        readonly wardId: string,
    ) { }
}

export class ClassSessionDefaultAddressReturnedEvent {
    readonly pattern: ClassSessionDefaultAddressReturnedEventPattern;

    constructor(
        readonly payload: ClassSessionDefaultAddressReturnedEventPayload,
    ) { 
        this.pattern = new ClassSessionDefaultAddressReturnedEventPattern();
    }
}
