import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { xid } from "zod/v4-mini";
import ComboBox from "../components/ComboBox";
import api from "../service/api";

export function CadastroProduto() {

    const { isLogged, signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);

    const formSchema = z.object({
        nomeProduto: z.string(),
        categoria: z.string(),
        quantidade: z.number(),
        preco: z.number()
    });

    type FormType = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormType) => {
        api.post("/produto/create", {
            nome: data.nomeProduto,
            categoria: data.categoria,
            quantidade: data.quantidade,
            preco: data.preco
        })
            .then(response => {
            }).catch(err => {

            })
    };

    const optionsCategoria = [
        { value: 'Acessórios e Suportes', label: 'Acessórios e Suportes' },
        { value: 'Armazenamento', label: 'Armazenamento' },
        { value: 'Áudio e Vídeo', label: 'Áudio e Vídeo' },
        { value: 'Cabo e Conectores', label: 'Cabo e Conectores' },
        { value: 'Componentes Internos', label: 'Componentes Internos' },
        { value: 'Computadores e Notebooks', label: 'Computadores e Notebooks' },
        { value: 'Gamers', label: 'Gamers' },
        { value: 'Impressoras e Suprimentos', label: 'Impressoras e Suprimentos' },
        { value: 'Monitores e Telas', label: 'Monitores e Telas' },
        { value: 'Periféricos', label: 'Periféricos' },
        { value: 'Redes e Conectividade', label: 'Redes e Conectividade' },

    ];

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

                            <Controller
                                control={control}
                                name="categoria"
                                render={({ field }) => (
                                    <ComboBox
                                        options={optionsCategoria}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        label="Categoria:"
                                    />
                                )}
                            />

                        </div>

                        <div className="flex gap-8">
                            <label className="w-72">
                                <span className="text-xs text-zinc-200">Quantidade:</span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite a quantidade"
                                    {...register("quantidade", { valueAsNumber: true })}
                                />
                            </label>

                            <label className="w-72">
                                <span className="text-xs text-zinc-200">Preço: </span>
                                <input
                                    className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded"
                                    placeholder="Digite o preço"
                                    {...register("preco", { valueAsNumber: true })}
                                />
                            </label>
                        </div>

                        <div className="w-full flex items-center justify-center mt-2">
                            <button type="submit" className="w-40 px-4 py-2 bg-zinc-300 rounded text-zinc-900 mt-3">
                                Salvar
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}