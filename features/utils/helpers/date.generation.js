import moment from 'moment';

export default function addDays(days) {
  const now = moment().add(days, 'days');
  return now.format('DD/MM/YYYY');
}
