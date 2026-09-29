"use client";

import Link from "next/link";
import {
    Card,
    CardHeader,
    CardContent as CardBody,
    Input,
    Button,
    Label,
    Form,
} from "@heroui/react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import Logo from "@/components/Logo";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        const { data: signInData, error: signInError } =
            await authClient.signIn.email({
                email: data.email,
                password: data.password,
            });

        if (signInData) {
            router.push("/");
            router.refresh("/")
            toast.success("Login successful!");
        } else if (signInError) {
            toast.error(signInError.message || "Invalid email or password!");
        }
    };

    return (
        <div>
            <Card className="w-full max-w-lg border border-white/5 bg-slate-950/70 backdrop-blur-xl shadow-2xl p-4 mx-auto my-3">
                <CardHeader className="flex flex-col gap-1 items-center pb-6 text-center">
                    <Logo />
                    <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-pink-500 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Sign in to your Ticketo account to continue.
                    </p>
                </CardHeader>
                <CardBody className="gap-4">
                    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="flex items-center gap-2 w-full bg-slate-900/50 border border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500 rounded-lg px-3">
                            <FaEnvelope className="text-slate-400 text-sm shrink-0" />
                            <Input
                                {...register("email", { required: "Email is required" })}
                                id="email"
                                placeholder="john@example.com"
                                type="email"
                                className="w-full border-none bg-transparent"
                            />
                        </div>

                        <Label htmlFor="password">Password</Label>
                        <div className="flex items-center gap-2 w-full bg-slate-900/50 border border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500 rounded-lg px-3">
                            <FaLock className="text-slate-400 text-sm shrink-0" />
                            <Input
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                id="password"
                                placeholder="••••••••"
                                type="password"
                                className="w-full border-none bg-transparent"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold h-12 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
                            radius="lg"
                        >
                            Sign In
                        </Button>
                    </Form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-white/5" />
                        <span className="mx-4 text-xs text-slate-500 font-semibold uppercase">
                            Or Sign In With
                        </span>
                        <div className="flex-grow border-t border-white/5" />
                    </div>

                    <Button
                        variant="bordered"
                        className="w-full border-white/10 hover:bg-white/5 hover:border-white/20 text-white font-semibold h-11"
                        radius="lg"
                        startContent={<FaGoogle className="text-pink-500" />}
                    >
                        Google OAuth
                    </Button>

                    <p className="text-center text-sm text-slate-400 mt-6">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-pink-500 hover:text-pink-400 font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </CardBody>
            </Card>
        </div>
    );
}
