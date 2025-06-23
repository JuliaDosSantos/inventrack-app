import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { xid } from "zod/v4-mini";

export function CadastroProduto() {

    const { isLogged, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);

    const formSchema = z.object({
        nomeProduto: z.string(),
        codigo: z.number(),
        categoria: z.string(),
        quantidade: z.number(),
        preco: z.number(),
        data: z.string()
    });

    type FormType = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = () => {
        signIn();
    };

    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-6/12 h-[340px] bg-zinc-600 flex flex-col p-10 gap-5 rounded-md items-center">
                <h1 className="text-white font-bold text-xl">Cadastro de Produtos</h1>

                <div className="h-0.5 w-full bg-zinc-800" />

                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full gap-6 bg-zinc-600 text-zinc-300"
                    >
                        <div className="flex gap-8">
                            <label className="w-72">
                                <span className="text-xs text-zinc-200">Nome do Produto: </span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite o produto"
                                    {...register("nomeProduto")}
                                />
                            </label>

                            <label className="w-72">
                                <span className="text-xs text-zinc-200">Categoria: </span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite a categoria"
                                    {...register("categoria")}
                                />
                            </label>
                        </div>

                        <div className="flex gap-8">
                            <label className="w-72">
                                <span className="text-xs text-zinc-200">Quantidade:</span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite a quantidade"
                                    {...register("quantidade")}
                                />
                            </label>

                            <label className="w-72">
                                <span className="text-xs text-zinc-200">Preço: </span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite o preço"
                                    {...register("preco")}
                                />
                            </label>
                        </div>

                        <div className="w-full flex items-center justify-center mt-2">
                            <button className="w-40 px-4 py-2 bg-zinc-300 rounded text-zinc-900 mt-3">
                                Salvar
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}