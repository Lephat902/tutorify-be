export function validateClassAndSessionAddress(
  isOnline: boolean,
  address: string,
  wardId: string,
  useDefaultAddress: boolean
) {
  if (useDefaultAddress) {
    return true;
  }
  if (!isOnline && (!address || !wardId)) {
    return false;
  }
  return true;
}
