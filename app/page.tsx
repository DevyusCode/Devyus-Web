import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:text-white dark:bg-black bg-img p-5 min-h-screen flex flex-col items-center justify-center">
      <section className="text-center">
        <h1 className="font-bold text-7xl">Devyus</h1>
        <p>Developer tools that make your life easier.</p>
      </section>
      <section className="flex flex-wrap justify-center">
        <a
          href=""
          className="grid grid-cols-[auto,1fr,auto] items-center p-4 m-4 border dark:border-slate-800 border-slate-300 rounded-lg max-w-[450px] app-el backdrop-blur-lg"
        >
          <Image
            src="PeyrSharp.svg"
            width={75}
            height={75}
            alt="PeyrSharp Logo"
            className="mr-2"
          />
          <span>
            <h3 className="font-bold text-lg">PeyrSharp</h3>
            <p>A C# library designed to make developers&apos; job easier.</p>
          </span>
          <ArrowRight className="icon mr-2" />
        </a>
        <a
          href=""
          className="grid grid-cols-[auto,1fr,auto] items-center p-4 m-4 border dark:border-slate-800 border-slate-300 rounded-lg max-w-[450px] app-el backdrop-blur-lg"
        >
          <Image
            src="Synethia.svg"
            width={75}
            height={75}
            alt="Synethia Logo"
            className="mr-2"
          />
          <span>
            <h3 className="font-bold text-lg">Synethia</h3>
            <p>
              A basic C# algorithm that can determine the behavior of a user
              with an application.
            </p>
          </span>
          <ArrowRight className="icon mr-2" />
        </a>
        <a
          href=""
          className="grid grid-cols-[auto,1fr,auto] items-center p-4 m-4 border dark:border-slate-800 border-slate-300 rounded-lg max-w-[450px] app-el backdrop-blur-lg"
        >
          <Image
            src="XValid.svg"
            width={75}
            height={75}
            alt="XValid Logo"
            className="mr-2"
          />
          <span>
            <h3 className="font-bold text-lg">XValid</h3>
            <p>
              A simple validator library for various things, such as email,
              credit card, ISBN and more .
            </p>
          </span>
          <ArrowRight className="icon mr-2" />
        </a>
      </section>
    </main>
  );
}
