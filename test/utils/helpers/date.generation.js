import moment from 'moment';

export default function addDays(days) {
    let now = moment().add(days, 'days');;
    return now.format('DD/MM/YYYY');
}