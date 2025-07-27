import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black/40 border-white/10 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Authentication Error</CardTitle>
          <CardDescription className="text-gray-300">
            There was a problem signing you in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-400 text-center">
              Something went wrong during authentication. Please try again.
            </p>
          </div>
          
          <div className="space-y-2">
            <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
              <Link href="/auth/login">
                Try Again
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10">
              <Link href="/">
                Go Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
