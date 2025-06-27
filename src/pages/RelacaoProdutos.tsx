import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { xid } from "zod/v4-mini";
import { Product } from "../model/product";

export function RelacaoProdutos() {

    const { isLogged, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);

    const sampleProducts: Product[] = [
        { id: 1, nomeDoProduto: 'Notebook', preco: 3500, categoria: 'Eletrônicos', quantidade: 30 },
        { id: 2, nomeDoProduto: 'Teclado Mecânico', preco: 250, categoria: 'Periféricos', quantidade: 20 },
        { id: 3, nomeDoProduto: 'Monitor 24"', preco: 899, categoria: 'Display', quantidade: 10 },
    ];

    interface Props {
        products: Product[];
    }

    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-6/12 h-[340px] bg-zinc-600 flex flex-col p-10 gap-5 rounded-md items-center">
                <h1 className="text-white font-bold text-xl">Produtos</h1>

                <div className="h-0.5 w-full bg-zinc-800" />

                <div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-zinc-700">
                            <thead>
                                <tr className="bg-zinc-800">
                                    <th className="px-4 py-2 border">ID</th>
                                    <th className="px-4 py-2 border">Nome</th>
                                    <th className="px-4 py-2 border">Preço</th>
                                    <th className="px-4 py-2 border">Categoria</th>
                                    <th className="px-4 py-2 border">Quantidade</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sampleProducts.map((product) => (
                                    <tr key={product.id} className="bg-zinc-700 hover:bg-zinc-600">
                                        <td className="px-4 py-2 border">{product.id}</td>
                                        <td className="px-4 py-2 border">{product.nomeDoProduto}</td>
                                        <td className="px-4 py-2 border">R$ {product.preco.toFixed(2)}</td>
                                        <td className="px-4 py-2 border">{product.categoria}</td>
                                        <td className="px-4 py-2 border">{product.quantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}