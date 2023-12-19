import about from "../assets/about.jpg";

function About() {
  return (
    <div className="flex justify-end items-center gap-5 min-h-screen max-[768px]:flex-col-reverse">
      <div className="flex flex-col flex-1 max-[768px]:flex-initial gap-3 ">
        <span className="text-sm font-semibold text-colorBlue">
          About Brand
        </span>
        <h1 className="font-semibold text-colorDark text-2xl">
          Hello, With 10+ Years Of Experience
        </h1>
        <p className="opacity-70 text-colorDark font-semibold ">
          Tech is a company specialized in selling electronics accessories with
          scrutiny in providing only high quality products and a real guarantee
          of replacement for any defective product. No product is sold without a
          warranty.
        </p>
      </div>
      <div className="flex-1 max-[768px]:flex-initial">
        <img src={about} alt="About Brand/png" />
      </div>
    </div>
  );
}

export default About;
