import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductList from './components/product-list';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

// const ProductList = React.lazy(() => import('./components/product-list'));

export default async function Home({ searchParams }: { searchParams: { restaurantId: string } }) {
    return (
        <>
            <section className="bg-white">
                <div className="container flex items-center justify-between py-24">
                    <div>
                        <h1 className="text-7xl font-black font-sans leading-2">
                            Super Delicious Pizza in <br />
                            <span className="text-primary">Only 45 Minutes!</span>
                        </h1>
                        <p className="text-2xl mt-8 max-w-lg leading-snug">
                            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
                        </p>
                        <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
                            Get your pizza now
                        </Button>
                    </div>
                    <div>
                        <Image alt="pizza-main" src={'/pizza-main.png'} width={400} height={400} />
                    </div>
                </div>
            </section>
            {/* todo: add skeleton component */}
            <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
                <ProductList searchParams={searchParams} />
            </Suspense>
        </>
    );
}