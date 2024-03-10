export function validateClassAndSessionAddress(isOnline: boolean, address: string, wardId: string) {
  if (!isOnline && (!address || !wardId)) {
    return false;
  }
  return true;
}
