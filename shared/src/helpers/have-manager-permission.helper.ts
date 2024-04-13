import { UserRole } from "../enums";

export function haveManagerPermission(userRole: UserRole) {
    return userRole === UserRole.ADMIN || userRole === UserRole.MANAGER;
}