// Dependencies
import { Platform } from 'react-native';
import * as dayjs from 'dayjs';
import * as ES from 'dayjs/locale/es';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function formatDateISO8601(date: string) {
  dayjs.locale(ES);
  const dayjsDate = dayjs.default(date);
  return dayjsDate.format('DD [de] MMMM, YYYY');
}
