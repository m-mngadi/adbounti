"use server";
import Waitlist from "@/models/Waitlist";
import { dbConnect as connect } from "@/lib/db";

export interface messageType {
  title: string;
  description: string;
}

export async function addToWaitlist(
  prevState: void | {
    email: string;
    message: messageType;
    trigger: Number;
  },
  formData: FormData
) {
  const emailAddress = formData.get("emailAddress");
  const userType = formData.get("userType");

  return await connect()
    .then(async () => {
      const query = await Waitlist.findOne({ emailAddress });
      if (query?.emailAddress) {
        return {
          email: "",
          message: {
            title: "",
            description: "You have already joined the waitlist.",
          },
          trigger: 1,
        };
      } else {
        await Waitlist.create({ emailAddress, userType });
        return {
          email: "",
          message: {
            title: "",
            description: "Thank you, you have been added to the waitlist :)",
          },
          trigger: 1,
        };
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new Error(`${error}`);
      }
    });
}
