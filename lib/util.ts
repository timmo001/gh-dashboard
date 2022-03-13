import { NextApiRequest, NextApiResponse } from "next";
import moment, { Moment } from "moment";

export function groupByKey<T>(
  array: Array<T>,
  key: string
): { [key: string]: Array<T> } {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
}

export function arrayOfDatesBetweenDates(
  startDate: string,
  endDate: string
): Array<Moment> {
  var dates = [];

  var currDate = moment(startDate).startOf("day");
  var lastDate = moment(endDate).startOf("day");

  while (currDate.add(1, "days").diff(lastDate) < 0)
    dates.push(currDate.clone());

  return dates;
}
