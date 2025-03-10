import Layout from "@/modules/common/layouts/layout";

export default function ContactPage(){
    return (
        <Layout>
        <section className="mt-5 flex flex-col gap-3">
        <div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16462.03297748102!2d-58.53395444182248!3d-34.478017055683345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb040d363f587%3A0x78e513cecbc25f7f!2sHip%C3%B3dromo%20de%20San%20Isidro!5e1!3m2!1ses!2sau!4v1740450989893!5m2!1ses!2sau" 
            width="600" 
            height="400" 
            style={{marginRight : 'spacing' + 'em', width: 'full', margin : 'auto' }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
        <form className="flex flex-col gap-5 mt-4">
          <label className="text-white font-semibold text-2xl" htmlFor="name">
            Contact Form
          </label>
          <div className="flex gap-5">
            <input
              className="bg-transparent p-4 w-full rounded-xl border border-neutral-600 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
              type="text"
              name="name"
              id=""
              placeholder="Full name"
            />
            <input
              className="bg-transparent p-4 w-full rounded-xl border border-neutral-600 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
              type="email"
              name="email"
              id=""
              placeholder="Email address"
            />
          </div>
          <textarea
            className="bg-transparent p-4 w-full rounded-xl border border-neutral-600 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
            name="message"
            id=""
            placeholder="your message"
          ></textarea>
          <div className="flex justify-end">
            <button className="flex gap-3 text-lg text-yellow-200 bg-gradient-to-br from-neutral-800 to-neutral-900 py-3 px-5 rounded-xl shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>

              Send Message
            </button>
          </div>
        </form>
      </section>
        </Layout>
    )
}