import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import ProviderSigninBlock from "@/components/ProviderSigninBlock";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="mx-auto w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex justify-center py-4">
            <Link href="/">
              <Image src="/logo.png" alt="AppSurvey" width={50} height={50} />
            </Link>
          </div>
          <CardTitle className="font-heading text-2xl font-bold">
            アカウント作成
          </CardTitle>
          <CardDescription>
            新しいアカウントを作成してください
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignupForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                または
              </span>
            </div>
          </div>
          <ProviderSigninBlock />
        </CardContent>
        <CardFooter className="flex-col text-center">
          <Link
            className="w-full text-sm text-muted-foreground"
            href="/login"
          >
            アカウントをお持ちの方はこちら
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
