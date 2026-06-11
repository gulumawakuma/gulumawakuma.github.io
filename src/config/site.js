export function getBookingUrl() {
  const url = import.meta.env.VITE_BOOKING_URL?.trim();
  return url || null;
}
