import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { xid } from "zod/v4-mini";
import { Product } from "../model/product";
import { Movimentacao } from "../model/movimentacao";

export function HistoricoMovimentacao() {

    const { isLogged, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);

    const sampleProducts: Movimentacao[] = [
        {id: 1, dataHora: '26/06/2025', tipoMovimentacao: 'Entrada', IdProduto: 1, nomeDoProduto: 'Notebook', categoria: 'Eletrônicos', quantidade: 30, estoqueAnterior: 0, estoqueAtual: 30},
        {id: 2, dataHora: '26/06/2025', tipoMovimentacao: 'Entrada', IdProduto: 2, nomeDoProduto: 'Teclado Mecânico', categoria: 'Periféricos', quantidade: 20, estoqueAnterior: 0, estoqueAtual: 20},
        {id: 3, dataHora: '26/06/2025', tipoMovimentacao: 'Saída', IdProduto: 3, nomeDoProduto: 'Monitor 24"', categoria: 'Display', quantidade: 20, estoqueAnterior: 30, estoqueAtual: 10}
    ]

    interface Props {
        products: Product[];
    }

    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-10/12 h-[450px] bg-zinc-600 flex flex-col p-10 gap-10 rounded-md items-center mr-48">
                <h1 className="text-white font-bold text-xl">Histórico de Movimentações</h1>

                <div className="h-0.5 w-full bg-zinc-800" />

                <div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-zinc-700">
                            <thead>
                                <tr className="bg-zinc-800">
                                    <th className="px-4 py-2 border">ID</th>
                                    <th className="px-4 py-2 border">Data/Hora</th>
                                    <th className="px-4 py-2 border">Tipo de Movimentação</th>
                                    <th className="px-4 py-2 border">ID Produto</th>
                                    <th className="px-4 py-2 border">Produto</th>
                                    <th className="px-4 py-2 border">Categoria</th>
                                    <th className="px-4 py-2 border">Quant. Movimentada</th>
                                    <th className="px-4 py-2 border">Estoque Anterior</th>
                                    <th className="px-4 py-2 border">Estoque Atualizado
                                        
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {sampleProducts.map((product) => (
                                    <tr key={product.id} className="bg-zinc-700 hover:bg-zinc-600">
                                        <td className="px-4 py-2 border">{product.id}</td>
                                        <td className="px-4 py-2 border">{product.dataHora}</td>
                                        <td className="px-4 py-2 border">{product.tipoMovimentacao}</td>
                                        <td className="px-4 py-2 border">{product.IdProduto}</td>
                                        <td className="px-4 py-2 border">{product.nomeDoProduto}</td>
                                        <td className="px-4 py-2 border">{product.categoria}</td>
                                        <td className="px-4 py-2 border">{product.quantidade}</td>
                                        <td className="px-4 py-2 border">{product.estoqueAnterior}</td>
                                        <td className="px-4 py-2 border">{product.estoqueAtual}</td>
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