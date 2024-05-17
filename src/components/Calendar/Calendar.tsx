/** https://www.npmjs.com/package/react-calendar */

import * as ReactCalendar from "react-calendar";
import "./Calendar.css";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export type CalendarProps = ReactCalendar.CalendarProps;
export const Calendar: React.FC<CalendarProps> = (props) => {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="flex flex-row flex-wrap items-start p-4 bg-white">
      <main className="flex flex-col max-w-full grow w-[280px]">
        <ReactCalendar.Calendar
          prevLabel={<CaretLeft size={32} weight="fill" />}
          prev2Label={null}
          nextLabel={<CaretRight size={32} weight="fill" />}
          next2Label={null}
          formatShortWeekday={(locale, date) => weekDays[date.getDay()]}
          calendarType="gregory"
          {...props}
        />
      </main>
    </div>
  );
};
