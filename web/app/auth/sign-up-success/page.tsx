import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black/40 border-white/10 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Check your email</CardTitle>
          <CardDescription className="text-gray-300">
            We&apos;ve sent you a verification link
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-md bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-400 text-center">
              Please check your email and click the verification link to complete your account setup.
            </p>
          </div>
          
          <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
