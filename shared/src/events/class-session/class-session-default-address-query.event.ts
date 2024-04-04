import { LocationDto } from "../../dtos";
import { QueueNames } from "../../enums";

export class ClassSessionDefaultAddressQueryEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-default-address-query`;
}

export class ClassSessionDefaultAddressQueryEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly classId: string,
    ) { }
}

export class ClassSessionDefaultAddressQueryEvent {
    readonly pattern: ClassSessionDefaultAddressQueryEventPattern;

    constructor(
        readonly payload: ClassSessionDefaultAddressQueryEventPayload,
    ) { 
        this.pattern = new ClassSessionDefaultAddressQueryEventPattern();
    }
}
