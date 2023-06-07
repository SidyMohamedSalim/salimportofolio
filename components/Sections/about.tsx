import { TitleSection } from "../TitleSection"

/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] opacity-30  shadow-xl  ring-1 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <TitleSection title="About Me" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9">
            <p>
              Hi, I&apos;m Salim Diallo. Delighted to meet you. Since the start
              of my journey as an Independent Developer more than 5 years ago
              years, I worked remotely for agencies, consulted startups and
              collaborated with talented people to create digital products for
              professional and consumer use. I am quietly confident, naturally
              curious and I constantly working to improve my Skills and to
              remain up to date at a time.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="/profil2.png"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-sky-600">Salim Diallo</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="">CEO of Ohm Vision</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
