"use client";

import { useFormState } from "react-dom";
import { addToWaitlist } from "@/actions/addToWaitlist";
import clsx from "clsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { ChangeEvent, useEffect, useState } from "react";

const WaitlistForm = () => {
  const [formState, formAction] = useFormState(addToWaitlist, {
    email: "",
    message: "",
  });
  const [emailAddress, setEmailAddress] = useState(formState!.email);

  const { toast } = useToast();
  useEffect(() => {
    setEmailAddress(formState!.email);
    toast({
      title: "",
      variant: "success",
      description: formState!.message,
    });
  }, [formState]);

  return (
    <form
      action={formAction}
      className="block w-full md:flex-row min-w-80 max-w-xl"
    >
      <span className="block text-base font-bold text-slate-700 mb-2">
        Join our waitlist
      </span>
      <div className="block md:flex w-full md:gap-4">
        <div className="flex-grow min-w-64">
          <input
            id="wl_emailAddress"
            className="border rounded-lg h-12 w-full px-4 py-2"
            type="email"
            name="emailAddress"
            placeholder="Enter your email"
            value={emailAddress}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmailAddress(e.target.value);
            }}
          />
        </div>
        <div className="flex relative items-center justify-center min-w-44 mt-3 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={clsx(
                    "h-12 w-full px-4 py-2 md:size-full  rounded-lg font-bold",
                    {
                      "bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-600":
                        emailAddress !== "",
                    },
                    {
                      "bg-gray-200 text-gray-800 cursor-not-allowed":
                        emailAddress === "",
                    }
                  )}
                  disabled={emailAddress === ""}
                  type="submit"
                >
                  Let me in!
                </button>
              </TooltipTrigger>
              <TooltipContent className={clsx({ hidden: emailAddress !== "" })}>
                <p>Enter your email first</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </form>
  );
};

export default WaitlistForm;
