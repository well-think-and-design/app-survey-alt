"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { signup } from "@/app/auth/actions";

export default function SignupForm() {
  const initialState = { message: "" };
  const [formState, formAction, pending] = useActionState(signup, initialState);

  return (
    <form action={formAction}>
      <div className="grid gap-2">
        <Label htmlFor="name">氏名</Label>
        <Input
          id="name"
          type="text"
          placeholder="山田 太郎"
          name="name"
          required
        />
      </div>
      <div className="mt-2 grid gap-2">
        <Label htmlFor="email">メールアドレス</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@company.co.jp"
          name="email"
          required
        />
      </div>
      <div className="mt-2 grid gap-2">
        <Label htmlFor="password">パスワード</Label>
        <Input id="password" type="password" name="password" required />
      </div>
      <Button className="mt-4 w-full" type="submit" aria-disabled={pending}>
        {pending ? "送信中..." : "アカウント作成"}
      </Button>
      {formState?.message && (
        <p className="py-2 text-center text-sm text-destructive">
          {formState.message}
        </p>
      )}
    </form>
  );
}
