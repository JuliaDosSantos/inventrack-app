import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ComboBox from "../components/ComboBox";
import api from "../service/api";

export function EntradaSaida() {

    const { isLogged, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);

    const formSchema = z.object({
        codigo: z.string(),
        nomeProduto: z.string(),
        tipoMovimentacao: z.string(),
        quantidade: z.number(),
    });

    type FormType = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormType) => {
        api.get("/produto/find-by-id/" + String(data.codigo))
        .then(response => {
            console.log(response);
            var qnt = response.data.quantidade;
            var qntAnterior = qnt;
            if (data.tipoMovimentacao === 'Entrada') {
                qnt = qnt + data.quantidade;
            } else {
                qnt = qnt - data.quantidade;
            }

            api.put("/produto/alterar", {
                id: response.data.id,
                nome: response.data.nome,
                categoria: response.data.categoria,
                quantidade: qnt,
                preco: response.data.preco,
                data: response.data.data
            })
            .then(response => {
            }).catch(err => {
            })

            api.post("/historico/create", {
                tipoMovimentacao: data.tipoMovimentacao,
                idProduto: data.codigo,
                produto: response.data.nome,
                categoria: response.data.categoria,
                "quantidade": data.quantidade,
                "estoqueAnterior": qntAnterior,
                "estoqueAtualizado": qnt
            })
            .then(response => {
            }).catch(err => {
            })
            
        }).catch(err => {

        })
    };

    const optionsTipoMovimentacao = [
        { value: 'Entrada', label: 'Entrada' },
        { value: 'Saída', label: 'Saída' },
    ];


    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-2/5 h-[450px] bg-zinc-600 flex flex-col p-10 gap-5 rounded-md items-center">
                <h1 className="text-white font-bold text-xl">Movimentação de Produtos</h1>

                <div className="h-0.5 w-full bg-zinc-800" />

                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4 rounded-2xl bg-zinc-600 text-zinc-300"
                    >
                        <div className="flex gap-2">
                            <label className="flex flex-col mt-1 gap-1">
                                <span className="text-xs text-zinc-200">Código do Produto:</span>
                                <input
                                    className="w-36 px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite o código"
                                    {...register("codigo", { valueAsNumber: true })}
                                />
                            </label>

                            <label>
                                <span className="text-xs text-zinc-200">Nome do produto:</span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite o nome do produto"
                                    {...register("nomeProduto")}
                                />
                            </label>
                        </div>


                        <Controller
                            control={control}
                            name="tipoMovimentacao"
                            render={({ field }) => (
                                <ComboBox
                                    options={optionsTipoMovimentacao}
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    label="Tipo de Movimentação:"
                                />
                            )}
                        />


                        <label>
                            <span className="text-xs text-zinc-200">Quantidade:</span>
                            <input
                                className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                placeholder="Digite a quantidade"
                                {...register("quantidade", { valueAsNumber: true })}
                            />
                        </label>

                        <div className="flex justify-center mt-2">
                            <button type="submit" className="w-24 px-4 py-2 bg-zinc-300 rounded text-zinc-900 mt-2">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}