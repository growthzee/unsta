export default function PriorityAccess() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-[#fcf8fa]">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Enquiry Form */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-outline-variant shadow-xs reveal-init opacity-0 translate-y-8 transition-all duration-800">
          <h3 className="font-display text-3xl font-bold text-primary mb-2">
            Priority Access
          </h3>
          <p className="font-sans text-sm md:text-base text-on-surface-variant mb-8">
            Register your interest to secure early access to our premium
            portfolio.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  className="peer w-full h-[56px] bg-[#F1F5F9] border border-transparent rounded-xl px-4 pt-4 pb-2 focus:ring-2 focus:ring-secondary/50 focus:bg-white focus:outline-hidden transition-all placeholder-transparent"
                  id="name"
                  placeholder="Name"
                  type="text"
                />
                <label
                  className="absolute left-4 top-2 text-xs text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer w-full h-[56px] bg-[#F1F5F9] border border-transparent rounded-xl px-4 pt-4 pb-2 focus:ring-2 focus:ring-secondary/50 focus:bg-white focus:outline-hidden transition-all placeholder-transparent"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
                <label
                  className="absolute left-4 top-2 text-xs text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  className="peer w-full h-[56px] bg-[#F1F5F9] border border-transparent rounded-xl px-4 pt-4 pb-2 focus:ring-2 focus:ring-secondary/50 focus:bg-white focus:outline-hidden transition-all placeholder-transparent"
                  id="phone"
                  placeholder="Phone"
                  type="tel"
                />
                <label
                  className="absolute left-4 top-2 text-xs text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer w-full h-[56px] bg-[#F1F5F9] border border-transparent rounded-xl px-4 pt-4 pb-2 focus:ring-2 focus:ring-secondary/50 focus:bg-white focus:outline-hidden transition-all placeholder-transparent"
                  id="location"
                  placeholder="Location"
                  type="text"
                />
                <label
                  className="absolute left-4 top-2 text-xs text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  htmlFor="location"
                >
                  Preferred Location
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                className="peer w-full bg-[#F1F5F9] border border-transparent rounded-xl px-4 pt-6 pb-2 focus:ring-2 focus:ring-secondary/50 focus:bg-white focus:outline-hidden transition-all placeholder-transparent resize-none"
                id="message"
                placeholder="Message"
                rows={4}
              />
              <label
                className="absolute left-4 top-2 text-xs text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                htmlFor="message"
              >
                Additional Requirements
              </label>
            </div>

            <button
              className="w-full bg-primary text-white px-8 py-4 rounded-xl hover:bg-secondary transition-colors duration-300 font-display text-sm tracking-widest uppercase cursor-pointer"
              type="button"
            >
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Newsletter */}
        <div
          className="flex flex-col justify-center reveal-init opacity-0 translate-y-8 transition-all duration-800"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-secondary text-3xl">
              mark_email_unread
            </span>
          </div>
          <h3 className="font-display text-4xl font-bold text-primary mb-4">
            Get Launch Updates
          </h3>
          <p className="font-sans text-lg text-on-surface-variant mb-8 leading-relaxed">
            Subscribe to our newsletter to receive the latest news, market
            insights, and exclusive invitations to private viewings before the
            official launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-grow bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 h-[56px] focus:outline-hidden focus:ring-2 focus:ring-secondary/50 font-sans text-primary"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-transparent border-2 border-primary text-primary px-8 py-3 h-[56px] rounded-xl hover:bg-primary hover:text-white transition-colors duration-300 font-display text-sm tracking-widest uppercase whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
