import Contact from "./Contact";

function SectionContact() {
  return (
    <div className="bg-bgContact min-h-[420px] bg-no-repeat object-cover p-2 flex max-[992px]:items-center rounded-md max-[992px]:flex-col gap-5">
      <div className="flex-[.5] mt-12 max-[992px]:mt-0  flex flex-col  items-center  px-3 gap-2 max-[992px]:gap-1 max-[992px]:items-start ">
        <h1 className="capitalize text-colorDark text-3xl max-[992px]:text-lg">
          an easy way to contact with us
        </h1>
        <p className="text-sm text-colorDark max-[992px]:text-xs">
          send us a message if you have any problem or you want to ask a for
          anything
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default SectionContact;
