import { format, parseISO } from 'date-fns';
import React from 'react';

type DatePropsType = { dateString: string };

export const Date: React.ComponentType<DatePropsType> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};
