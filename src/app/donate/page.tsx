import CommonLayout from "@/components/common-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function DonatePage() {
  return (
    <CommonLayout className="flex-1 flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Support Our Parish
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Your generous donations help us maintain our church, support our
                ministries, and serve our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#c9a227]" />
                Make a Donation
              </CardTitle>
              <CardDescription>
                Choose an amount that works for you. Every contribution, no
                matter the size, makes a difference in our parish community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 flex-wrap">
                {/* @ts-ignore */}
                <stripe-buy-button
                  buy-button-id="buy_btn_1QtercGbBi0LwuLYcjGHxGDX"
                  publishable-key="pk_test_51Iz5ZbGbBi0LwuLY4z9b7TPghCnu7AcUaFSRoLiyfhjHntDd4bYOxCyMDqq5dPHMlPcQRzVYij1WHQnWIFQciwcv00tVdTIIe3"
                >
                  {/* @ts-ignore */}
                </stripe-buy-button>

                {/* @ts-ignore */}
                <stripe-buy-button
                  buy-button-id="buy_btn_1QHBPgGbBi0LwuLYddIDMepg"
                  publishable-key="pk_test_51Iz5ZbGbBi0LwuLY4z9b7TPghCnu7AcUaFSRoLiyfhjHntDd4bYOxCyMDqq5dPHMlPcQRzVYij1WHQnWIFQciwcv00tVdTIIe3"
                >
                  {/* @ts-ignore */}
                </stripe-buy-button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </CommonLayout>
  );
}
