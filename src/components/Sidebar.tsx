import { BoxesIcon, ChartColumnBig, ChartColumnDecreasing, CircleCheckBig, HomeIcon, LogOut, Repeat2, SquarePen } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="bg-zinc-900 min-w-48 h-full flex-col pt-8">
            <div className=" flex flex-col gap-5">
                <h1 className="font-bold text-zinc-300 text-xl pl-5">Inventrack</h1>
                <div className="h-0.5 w-full bg-zinc-600"></div>
            </div>

            <div className="flex flex-col gap-10 pl-5 pt-5 text-zinc-400">
                <div className="hover:text-zinc-100 flex gap-2">
                    <BoxesIcon size={22}/>
                    <a href="/relacaoprodutos">Produtos</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <SquarePen size={20}/>
                    <a href="/cadastroproduto">Cadastro de produtos</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <Repeat2 size={22}/>
                    <a href="/entradasaida">Movimentação de Estoque</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <ChartColumnDecreasing size={22}/>
                    <a href="/historicomovimentacao">Histórico de Movimentações</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <LogOut size={20}/>
                    <a href="/login">Sair</a>
                </div>
            </div>
        </aside>
    );
}