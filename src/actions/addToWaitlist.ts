"use server";

import Waitlist from "@/models/Waitlist";
import { dbConnect as connect } from "@/lib/db";

export async function addToWaitlist(
  prevState: void | { email: string; message: string },
  formData: FormData
) {
  const emailAddress = formData.get("emailAddress");

  return await connect()
    .then(async () => {
      const query = await Waitlist.findOne({ emailAddress });
      if (query?.emailAddress) {
        return {
          email: "",
          message: "You have already joined the waitlist.",
        };
      } else {
        await Waitlist.create({ emailAddress });
        return {
          email: "",
          message: "Added to the waitlist.",
        };
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(`${error}`);
      }
    });
}
