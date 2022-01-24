import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import { useState, useEffect } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const repo: ClienteRepositorio = new ColecaoCliente();

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente);
    setVisivel("form");
  };
  const clienteExcluido = async (cliente: Cliente) => {
    await repo.excluir(cliente);
    obterTodos();
  };
  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente);
    obterTodos();
  };

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `}
    >
      <Layout titleText="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Button>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
