"use client";
import {
  IconChevronRight,
  IconExternalLink,
  IconChevronLeft,
} from "@tabler/icons-react";
import { DatePickerWithRange } from "@/components/beta/DatePicker";
import { confirmFormDetails } from "@/actions/confirmFormDetails";
import { useDateRangePicker } from "@/components/beta/DatePicker";
import { addDays, differenceInCalendarDays } from "date-fns";
import { useState } from "react";
import Link from "next/link";

const CreateBountiPage = () => {
  const distributionCycleItems = [
    {
      label: "End of Duration",
      value: "endOfDuration",
    },
    {
      label: "Daily",
      value: "daily",
    },
    {
      label: "Weekly",
      value: "weekly",
    },
  ];

  const { selectedDateRange, handleDateSelect } = useDateRangePicker();
  const [stepOneVisible, setStepOneVisible] = useState(true);
  const [stepTwoVisible, setStepTwoVisible] = useState(false);

  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <div className="flex">
            {stepOneVisible && (
              <Link href="/dashboard" className="flex text-gray-500">
                <IconChevronLeft />
                Back
              </Link>
            )}
          </div>
          <div className="flex flex-grow relative mx-auto max-w-xl w-full px-4 py-2 bg-white rounded-lg">
            <form action={confirmFormDetails} className="w-full">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-center text-pretty bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent uppercase ">
                    {stepOneVisible
                      ? "New Bounti"
                      : "Please confirm that all details are correct."}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-normal font-light">Bounti title</span>
                  {stepOneVisible && (
                    <input
                      type="text"
                      name="bountiTitle"
                      className="rounded-md h-9 px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-normal font-light">
                    CTA redirect URL
                  </span>
                  {stepOneVisible && (
                    <input
                      type="text"
                      name="ctaUrl"
                      className="rounded-md h-9 px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-normal font-light">Description</span>
                  {stepOneVisible && (
                    <textarea
                      name="description"
                      rows={12}
                      className="rounded-md resize-none px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
                    ></textarea>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-normal font-light">Requirements</span>
                  {stepOneVisible && (
                    <textarea
                      name="requirements"
                      className="rounded-md resize-none px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
                      rows={12}
                    ></textarea>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-normal font-light">
                    Start - End Date{" "}
                    {stepTwoVisible && (
                      <span className="font-bold inline">
                        {`[ ${
                          selectedDateRange === undefined ||
                          selectedDateRange.from === undefined ||
                          selectedDateRange.to === undefined
                            ? ""
                            : differenceInCalendarDays(
                                selectedDateRange?.to,
                                selectedDateRange?.from
                              )
                        } day(s) ]`}
                      </span>
                    )}
                  </span>

                  {stepOneVisible && (
                    <>
                      <DatePickerWithRange
                        className="focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
                        handleDateSelect={handleDateSelect}
                        selectedDateRange={selectedDateRange}
                      />
                      <input
                        type="text"
                        name="startDate"
                        value={
                          selectedDateRange === undefined ||
                          selectedDateRange.from === undefined
                            ? ""
                            : addDays(selectedDateRange.from, 1)
                                .toISOString()
                                .split("T")[0]
                        }
                        hidden
                        readOnly
                      />
                      <input
                        type="text"
                        name="endDate"
                        value={
                          selectedDateRange === undefined ||
                          selectedDateRange.to === undefined
                            ? ""
                            : addDays(selectedDateRange.to, 1)
                                .toISOString()
                                .split("T")[0]
                        }
                        hidden
                        readOnly
                      />
                    </>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-normal font-light">
                    Rewards distribution cycle
                  </span>
                  {stepOneVisible && (
                    <select
                      name="distributionCycle"
                      className="rounded-md resize-y px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="endOfDuration">End of Durantion</option>
                    </select>
                  )}
                </div>
                <div className="flex flex-col">
                  {stepOneVisible && (
                    <div className="flex w-full justify-end gap-4">
                      <button
                        type="submit"
                        onClick={() => {
                          setStepOneVisible(false);
                          setStepTwoVisible(true);
                        }}
                        className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600"
                      >
                        Next
                        <IconChevronRight />
                      </button>
                    </div>
                  )}
                  {stepTwoVisible && (
                    <div className="flex w-full justify-between gap-4">
                      <button
                        className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg text-sm text-gray-500 border border-gray-500 hover:cursor-pointer"
                        onClick={() => {
                          setStepOneVisible(true);
                          setStepTwoVisible(false);
                        }}
                      >
                        Back
                      </button>
                      <button className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600">
                        Proceed to Stripe
                        <IconExternalLink />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBountiPage;
