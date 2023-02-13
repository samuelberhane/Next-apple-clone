import Head from "next/head";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { Footer, Header } from "../components";
import { BagItem, BagRecommendation } from "../components/bag";
import { recommendation } from "../utils/bagRecommendation";
import { useGlobalContextProvider } from "../contexts/BagContext";

const Bag = () => {
  const [index, setIndex] = useState(3);
  const { bagItems } = useGlobalContextProvider();
  let total = 0;

  // get total price from the bag
  bagItems?.map((item) => {
    total += parseFloat(item.price);
  });

  return (
    <div>
      <Head>
        <title>Bag - Apple Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-4 py-2 md:px-12 lg:px-20 mt-4 md:mt-8">
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">
          Review your bag.
        </h1>
        <p className="text-lg mt-2">Free delivery and free returns.</p>
        <div className="flex gap-2 py-2 px-2 md:px-8 lg:px-12 bg-gray-100 mt-3 rounded md:mt-5 md:py-3">
          <div className="relative h-8 w-8">
            <Image src="/img/logo.jpg" alt="logo" layout="fill" />
          </div>
          <p className="md:text-sm text-[11px]">
            Items not purchased with a one time payment may be eligible for
            $9.00/mo.per month at 0% APRfootnote when you check out with Apple
            Card Monthly Installments.{" "}
            <span className="text-blue-500">Learn more</span>{" "}
          </p>
        </div>
        {!bagItems.length > 0 ? (
          <div>
            <h1 className="font-bold mt-3 text-lg md:text-xl lg:text-2xl">
              Your Apple Bag Is Empty.
            </h1>
          </div>
        ) : (
          <div className="mt-4 md:mt-6 max-w-3xl mx-auto">
            {bagItems?.map((item, index) => (
              <BagItem key={index} item={item} />
            ))}
            <div className="flex items-center flex-col sm:flex-row py-3 justify-between">
              <div className="relative w-[80px] h-[80px] md:h-[140px] md:w-[140px]" />
              <div className="w-[90%] sm:w-[75%]">
                <div className="pb-2">
                  <div className="flex items-center justify-between">
                    <h2>Subtotal</h2>
                    <p>${total}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2>Shipping</h2>
                    <p>Free</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2>
                      Estimated tax for:{" "}
                      <span className="text-blue-500">Enter zip code</span>{" "}
                    </h2>
                    <p>$ -</p>
                  </div>
                </div>
                <div className="flex justify-between border-t-2 pt-2 font-bold md:text-lg">
                  <h1>Total</h1>
                  <h1>${total}</h1>
                </div>
                <div className="flex justify-end mb-6">
                  <p className="text-blue-500">
                    Get Daily Cash with Apple Card
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <h2 className="font-light  py-3 border-y-2">
            Need some help? <span className="text-blue-600">Chat now</span>{" "}
            (Opens in a new window)or call 1800&#8211;MY&#8211;APPLE.
          </h2>
          <h1 className="font-bold mt-3 md:mt-5 text-2xl md:text-3xl lg:text-5xl text-center mb-3 md:mb-5">
            You may like
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {recommendation?.slice(0, index)?.map((item, index) => (
              <BagRecommendation item={item} key={index} />
            ))}
          </div>
          {index < recommendation?.length && (
            <div className="flex justify-center">
              <button
                className="text-sm mt-2 font-bold text-blue-500 hover:text-blue-400"
                onClick={() => setIndex((prev) => prev + 3)}
              >
                Show More Products
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bag;
