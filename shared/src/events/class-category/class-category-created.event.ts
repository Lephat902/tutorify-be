export class ClassCategoryCreatedEventPattern {
    readonly pattern: string = 'class-category.class-category-created';
}

export class ClassCategoryCreatedEventPayload {
    constructor(
        readonly classCategoryId: string,
        readonly levelId: string,
        readonly subjectId: string,
    ) { }
}

export class ClassCategoryCreatedEvent {
    readonly pattern: ClassCategoryCreatedEventPattern;

    constructor(
        readonly payload: ClassCategoryCreatedEventPayload,
    ) { 
        this.pattern = new ClassCategoryCreatedEventPattern();
    }
}