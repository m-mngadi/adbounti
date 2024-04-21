"use client";
import { addToWaitlist } from "@/actions/addToWaitlist";
import { useToast } from "@/components/ui/use-toast";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Waitlist = () => {
  const resetForm = () => {
    const form: HTMLFormElement | null = document.querySelector("form#wl_form");
    form?.reset();
  };

  const { toast } = useToast();

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 z-50 pb-36">
      <form
        id="wl_form"
        action={addToWaitlist}
        className="block w-full md:flex-row min-w-80 max-w-xl z-50"
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value === "") setIsEmpty(true);
                else setIsEmpty(false);
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
                          isEmpty == false,
                      },
                      {
                        "bg-gray-200 text-gray-800 cursor-not-allowed":
                          isEmpty == true,
                      }
                    )}
                    disabled={isEmpty}
                    type="submit"
                    onClick={() => {
                      const emailField: HTMLInputElement | null =
                        document.querySelector("input#wl_emailAddress");
                      if (emailField?.validity.valid) {
                        setTimeout(() => {
                          resetForm();
                          setIsEmpty(true);
                          toast({
                            title: "",
                            variant: "success",
                            description: "Added to waitlist!",
                          });
                        }, 100);
                      }
                    }}
                  >
                    Let me in!
                  </button>
                </TooltipTrigger>
                <TooltipContent className={clsx({ hidden: isEmpty !== true })}>
                  <p>Enter your email first</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Waitlist;
