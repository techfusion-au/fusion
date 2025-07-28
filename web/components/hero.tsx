import { FusionLogo } from "./fusion-logo";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center text-center">
      <h1 className="sr-only">Fusion - Where your entire digital presence meets in perfect harmony</h1>
      <p className="text-4xl lg:text-6xl !leading-tight mx-auto max-w-4xl font-bold">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Where your entire
        </span>
        <br />
        <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          digital presence
        </span>
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          {" "}meets
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          in{" "}
        </span>
        <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          perfect harmony
        </span>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
