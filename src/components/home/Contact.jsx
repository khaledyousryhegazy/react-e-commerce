function Contact() {
  const mail = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const handleInputs = () => {
    mail.value = "";
    subject.value = "";
    message.value = "";
  };

  return (
    <section className="flex items-center w-full flex-1 bg-colorWhite rounded-md ">
      <div className="px-5 py-2 w-full ml-auto">
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-colorDark "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border outline-none text-gray-900 text-sm rounded-md block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-colorDark"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="3"
              className="shadow-sm bg-gray-50 border outline-none text-gray-900 text-sm rounded-md block w-full p-2.5 resize-none"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            onClick={handleInputs}
            className="py-3 px-5 w-full text-sm font-medium text-center text-colorBlue rounded-md outline-none bg-colorBlurBlue hover:text-colorWhite hover:bg-colorBlue transition-[0.3s]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
