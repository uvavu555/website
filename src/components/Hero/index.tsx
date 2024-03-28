import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-slate-500 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div
          className="absolute left-0 top-0 z-[-1] h-full w-full bg-gradient-to-r from-blue-500 to-blue-400 dark:from-slate-500 dark:to-slate-400"
          style={{
            backgroundImage: "url(/images/home/image1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(3px)",
          }}
        />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="font-display mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl">
                  Creating dream homes
                  <br />
                  that last a lifetime
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/projects"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
