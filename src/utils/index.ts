import dayjs from 'dayjs';

export const formatDate = (date: string): string => {
  return dayjs(date).format('MMMM D, YYYY');
}

export const truncateText = (text: string, length: number, splitword: boolean): string => {
  if (text.length > length) {
    if (splitword) {
      return text.substring(0, text.lastIndexOf(' ', length)) + '...';
    }
    return text.substring(0, length) + '...';
  }
  return text;
}
