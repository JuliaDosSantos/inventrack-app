export interface Movimentacao {
  id: number;
  dataHora: string;
  tipoMovimentacao: string;
  IdProduto: number;
  nomeDoProduto: string;
  categoria: string;
  quantidade: number;
  estoqueAnterior: number;
  estoqueAtual: number;
}