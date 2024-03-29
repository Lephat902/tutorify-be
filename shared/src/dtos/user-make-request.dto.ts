import { UserRole } from '../enums';

export interface UserMakeRequest {
    readonly userId: string;
    readonly userRole: UserRole;
}