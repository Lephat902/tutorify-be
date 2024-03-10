import { LocationDto } from "../../dtos";
import { QueueNames } from "../../enums";

export class ClassSessionAddressVerifiedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-address-verified`;
}

export class ClassSessionAddressVerifiedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly isValidAddress: boolean,
        readonly location: LocationDto,
    ) { }
}

export class ClassSessionAddressVerifiedEvent {
    readonly pattern: ClassSessionAddressVerifiedEventPattern;

    constructor(
        readonly payload: ClassSessionAddressVerifiedEventPayload,
    ) { 
        this.pattern = new ClassSessionAddressVerifiedEventPattern();
    }
}
