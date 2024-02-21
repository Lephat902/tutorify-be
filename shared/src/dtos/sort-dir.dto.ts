enum SortingDirectionEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}
export class SortingDirectionDto {
    readonly dir?: SortingDirectionEnum = SortingDirectionEnum.ASC;
}