"use client";
import {
  IconChevronRight,
  IconExternalLink,
  IconChevronLeft,
} from "@tabler/icons-react";
import { DatePickerWithRange } from "@/components/beta/DatePicker";
import { confirmFormDetails } from "@/actions/confirmFormDetails";
import { useDateRangePicker } from "@/components/beta/DatePicker";
import { addDays, differenceInCalendarDays, format } from "date-fns";
import { useEffect, useState } from "react";
import Link from "next/link";

const CreateBountiPage = () => {
  const [stepOneFormData, setStepOneFormData] = useState<FormData>(
    {} as FormData
  );

  const [isStepOne, setIsStepOne] = useState(true);

  const handlerStepOne = (formData: FormData) => {
    if (formData) {
      setStepOneFormData(formData);
      setIsStepOne(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <div className="flex">
            {isStepOne && (
              <Link href="/dashboard" className="flex text-gray-500">
                <IconChevronLeft />
                Back
              </Link>
            )}
          </div>
          <div className="flex flex-grow relative mx-auto max-w-xl w-full px-4 py-2 bg-white rounded-lg">
            {isStepOne ? (
              <StepOne formActionHandler={handlerStepOne} />
            ) : (
              <StepTwo formData={stepOneFormData} backAction={setIsStepOne} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const StepOne = ({ formActionHandler }: any) => {
  const { selectedDateRange, handleDateSelect } = useDateRangePicker();

  return (
    <form action={formActionHandler} className="w-full">
      <div className="flex flex-col gap-3">
        {/* <div className="flex flex-col">
          <span className="text-xl font-semibold text-center text-pretty bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent uppercase ">
            New Bounti
          </span>
        </div> */}
        <div className="flex flex-col">
          <span className="text-normal">Bounti title</span>
          <input
            type="text"
            name="bountiTitle"
            className="rounded-md h-9 px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-normal">Description</span>
          <textarea
            name="description"
            rows={12}
            className="rounded-md resize-none px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <span className="text-normal">Requirements</span>
          <textarea
            name="requirements"
            className="rounded-md resize-none px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
            rows={12}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <span className="text-normal">URL</span>
          <input
            type="text"
            name="ctaUrl"
            className="rounded-md h-9 px-4 py-2 focus:border-x-orange-500 focus:border-x-4 border-x-2 border-y-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-normal">
            Start - End Date{" "}
            <input
              type="text"
              name="numberOfDays"
              value={
                selectedDateRange === undefined ||
                selectedDateRange.from === undefined ||
                selectedDateRange.to === undefined
                  ? ""
                  : differenceInCalendarDays(
                      selectedDateRange?.to,
                      selectedDateRange?.from
                    )
              }
              hidden
              readOnly
            />
          </span>
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
                : addDays(selectedDateRange.from, 1).toISOString().split("T")[0]
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
                : addDays(selectedDateRange.to, 1).toISOString().split("T")[0]
            }
            hidden
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <div className="flex w-full justify-end gap-4">
            <button
              type="submit"
              className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600"
            >
              Next
              <IconChevronRight />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const StepTwo = (props: { formData: FormData; backAction: any }) => {
  const { formData, backAction } = props;
  return (
    <div className="flex flex-col w-full gap-4">
      <p className="mx-auto text-lg uppercase font-medium">
        Confirm bounti details
      </p>
      <p
        data-summary={`Bounti title: 
        ${formData.get("bountiTitle")}

      Description: 
      ${formData.get("description")}

      Requirements: 
      ${formData.get("requirements")}

      URL: 
      ${formData.get("ctaUrl")}

      Start date: ${format(
        new Date(formData.get("startDate") as string),
        "LLL dd, y"
      )}
      End date: ${format(
        new Date(formData.get("endDate") as string),
        "LLL dd, y"
      )}

      Duration: ${formData.get("numberOfDays")} day(s) @ $25/day

      `}
        className="text-balance whitespace-pre-line before:content-[attr(data-summary)]"
      ></p>
      <p className="text-pretty text-rose-500 font-bold">
        Warning: Please ensure all details are as intended. You will not be able
        to take down the bounty once payment has been made. There will be no
        refund for bounties that have been posted.
      </p>
      <div className="flex w-full justify-between">
        <div className="flex w-full justify-start gap-4">
          <button
            className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg text-sm border border-gray-400 text-gray-400"
            onClick={() => {
              backAction(true);
            }}
          >
            <IconChevronLeft />
            Back
          </button>
        </div>
        <div className="flex w-full justify-end gap-4">
          <button className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600">
            Next
            <IconChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBountiPage;
