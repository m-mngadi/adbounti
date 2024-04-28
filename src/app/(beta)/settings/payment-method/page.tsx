import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const PaymentMethodPage = () => {
  return (
    <>
      <div className="relative flex flex-grow rounded-lg drop-shadow-lg">
        <div className="flex flex-grow flex-col p-4 gap-2">
          <div className="flex flex-grow relative">
            <div className="flex size-full">
              <Tabs
                defaultValue="paymentMethod"
                className="flex flex-col md:flex-row w-full md:gap-4"
              >
                <TabsList className="flex md:flex-col h-fit bg-transparent w-[240px]">
                  <Link href="/settings/accounts" className="w-full">
                    <TabsTrigger value="accounts" className="w-full">
                      Accounts
                    </TabsTrigger>
                  </Link>
                  <Link href="/settings/payment-method" className="w-full">
                    <TabsTrigger value="paymentMethod" className="w-full">
                      Payment method
                    </TabsTrigger>
                  </Link>
                </TabsList>
                <TabsContent
                  value="accounts"
                  className="size-full bg-white rounded-lg md:mt-0 p-4"
                >
                  Social media accounts will be linked here. TikTok(MVP
                  release), Youtube Shorts(Coming Soon), Instagram Reels(Coming
                  Soon)
                </TabsContent>
                <TabsContent
                  value="paymentMethod"
                  className="size-full bg-white rounded-lg md:mt-0 p-4"
                >
                  PayPal account to be attached here, plan to use Stripe.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodPage;
