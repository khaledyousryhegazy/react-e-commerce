import { useState } from "react";

function PaymentDetails() {
  const [isValid, setIsValid] = useState(false);
  const [isMmyyValid, setIsMmyyValid] = useState(false);
  const [isCvcValid, setIsCvcValid] = useState(false);

  // /^[0-9]{3,4}$/g cvc
  // ^(\d{1,2})\/(\d{2})$ mm/yy
  //   const visaRegEx = /^(4|5)\d{15}$/g;
  //   const mmyy = document.getElementById("mm-yy");
  //   const cvc = document.getElementById("cvc");

  const handleVisaNums = (num) => {
    num = num.toString().replace(/[\s-]/g, "").match();
    if (/^\d{16}$/g.test(num.input)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleVisaMmyy = (num) => {
    num = num.toString().replace(/[\s-]/g, "").match();
    if (/^(\d{1,2})\/(\d{2})$/g.test(num.input)) {
      setIsMmyyValid(true);
    } else {
      setIsMmyyValid(false);
    }
  };

  const handleVisaCvc = (num) => {
    num = num.toString().replace(/[\s-]/g, "").match();
    if (/^[0-9]{3,4}$/.test(num.input)) {
      setIsCvcValid(true);
    } else {
      setIsCvcValid(false);
    }
  };

  // On button validation sweetalert

  return (
    <div className="mt-10 border rounded-md p-3">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div className="">
        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <input
            type="text"
            id="email"
            name="email"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="your.email@gmail.com"
          />
        </div>
        <label
          htmlFor="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Card Holder
        </label>
        <div className="relative">
          <input
            type="text"
            id="card-holder"
            name="card-holder"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your full name here"
          />
        </div>
        <label htmlFor="card" className="mt-4 mb-2 block text-sm font-medium">
          Card Details
        </label>
        <div className="flex gap-3 max-[576px]:flex-col">
          <div className="relative max-[576px]:w-full max-[576px]:flex-grow-0 w-7/12 flex-shrink-0">
            <input
              type="text"
              id="card"
              name="card"
              className={` ${
                isValid ? "text-colorBlue" : "text-red-500"
              } w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              onChange={(e) => {
                handleVisaNums(e.target.value);
              }}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            id="mm-yy"
            name="mm-yy"
            className={` ${
              isMmyyValid ? "text-colorBlue" : "text-red-500"
            } w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
            placeholder="MM/YY"
            onChange={(e) => {
              handleVisaMmyy(e.target.value);
            }}
          />
          <input
            type="text"
            id="cvc"
            name="cvc"
            className={`${
              isCvcValid ? "text-colorBlue" : "text-red-500"
            } w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
            placeholder="CVC"
            onChange={(e) => {
              handleVisaCvc(e.target.value);
            }}
          />
        </div>
        <label
          htmlFor="billing-address"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Billing Address
        </label>
        <div>
          <div>
            <input
              type="text"
              id="billing-address"
              name="billing-address"
              className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Street Address"
            />
          </div>
        </div>
      </div>
      <button className="mt-4 mb-8 w-full rounded-md bg-colorBlue px-6 py-3 font-medium text-white">
        Order Now
      </button>
    </div>
  );
}

export default PaymentDetails;
