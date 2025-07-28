import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { FusionLogo } from "@/components/fusion-logo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-black overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-50 transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-50 transform translate-y-1/2"></div>
      </div>
      
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/20">
          <div className="flex justify-between items-center px-6 py-4 text-sm">
            <div className="flex gap-5 items-center">
              <Link href={"/"} className="hover:opacity-80 transition-opacity">
                <FusionLogo />
              </Link>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col gap-20 items-center pt-24">
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          <main className="flex-1 flex flex-col gap-6 px-4">
            <h2 className="font-medium text-xl mb-4">Next steps</h2>
            {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
          </main>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
