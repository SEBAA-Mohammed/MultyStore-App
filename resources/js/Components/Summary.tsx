// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";

import { Button } from '@/Components/ui/button';
import { Currency } from '@/Components/ui/currency';
import { useCart } from '@/Contexts/cart-context';
import { useToast } from '@/Components/ui/use-toast';

export function Summary() {
  //   const searchParams = useSearchParams();
  const { items, removeAll } = useCart();
  const { toast } = useToast();

  // useEffect(() => {
  //   if (searchParams.get('success')) {
  //   toast({ title: 'Success', description: 'Payment completed.' });
  //     removeAll();
  //   }

  //   if (searchParams.get('canceled')) {
  //   toast({
  //     variant: 'destructive',
  //     title: 'Canceled',
  //     description: 'Something went wrong.',
  //   });
  //   }
  // }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  //   const onCheckout = async () => {
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
  //       productIds: items.map((item) => item.id),
  //     });

  //     window.location = response.data.url;
  //   };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        className="w-full mt-6"
        // onClick={onCheckout}
        disabled={items.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
}