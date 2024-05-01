import { useState } from "react";
import { addDays, format } from "date-fns";
import { IconCalendar } from "@tabler/icons-react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const useDateRangePicker = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >({ from: undefined, to: undefined });

  const handleDateSelect = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange);
  };

  return {
    selectedDateRange,
    handleDateSelect,
  };
};

export const DatePickerWithRange = ({ ...props }) => {
  const { className, selectedDateRange, handleDateSelect } = props;

  const disabledDays = [
    { from: new Date(1900, 1, 1), to: addDays(new Date(), -1) },
  ];

  return (
    <div className={"grid gap-2"}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={`w-full justify-start text-left font-normal ${className} ${
              !selectedDateRange && "text-muted-foreground"
            }`}
          >
            <IconCalendar className="mr-2 h-4 w-4" />
            {selectedDateRange?.from ? (
              selectedDateRange.to ? (
                <>
                  {format(selectedDateRange?.from, "LLL dd, y")} -{" "}
                  {format(selectedDateRange?.to, "LLL dd, y")}
                </>
              ) : (
                format(selectedDateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={selectedDateRange?.from}
            selected={selectedDateRange}
            onSelect={handleDateSelect}
            numberOfMonths={1}
            disabled={disabledDays}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
