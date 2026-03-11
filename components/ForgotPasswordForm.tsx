"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { forgotPassword } from "@/app/auth/actions";

export default function ForgotPasswordForm() {
  const initialState = { message: "" };
  const [formState, formAction] = useActionState(forgotPassword, initialState);

  return (
    <form action={formAction}>
      <div className="grid gap-2">
        <Label htmlFor="email">メールアドレス</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@company.co.jp"
          name="email"
          required
        />
      </div>
      <Button className="mt-4 w-full" type="submit">
        パスワードをリセット
      </Button>
      {formState?.message && (
        <p className="py-2 text-center text-sm text-destructive">
          {formState.message}
        </p>
      )}
    </form>
  );
}
