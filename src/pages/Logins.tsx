import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { email } from "zod/v4-mini";

export function Login() {

    const { isLogged, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/relacaoprodutos");
        }
    }, [isLogged, navigate]);

    const formSchema = z.object({
        email: z
            .string()
            .email(),
        password: z.string(),
    });

    type FormType = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormType) => {
        signIn(data.email, data.password);
        navigate("/relacaoprodutos");
    };

    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-96 h-96 bg-zinc-600 flex flex-col p-10 gap-5 rounded-md items-center">
                <h1 className="text-white font-bold text-xl">Login</h1>

                <div className="h-0.5 w-full bg-zinc-800"/>

                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4 rounded-2xl bg-zinc-600 text-zinc-300"
                    >
                        <label>
                            <span className="text-xs text-zinc-200">E-mail:</span>
                            <input
                                className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                placeholder="Digite seu e-mail"
                                {...register("email")}
                            />
                        </label>

                        <label>
                            <span className="text-xs text-zinc-200">Senha:</span>
                            <input
                                className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                placeholder="Digite sua senha"
                                type="password"
                                {...register("password")}
                            />
                        </label>

                        <button className="w-full px-4 py-2 bg-zinc-300 rounded text-zinc-900 mt-2">
                           Entrar
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}