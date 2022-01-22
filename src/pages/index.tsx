import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import { useState } from "react";
export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const clientes = [
    new Cliente("Ana", 33, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Pedro", 23, "3"),
    new Cliente("José", 54, "4"),
  ];

  const clienteSelecionado = (cliente: Cliente) => {
    console.log(cliente.nome);
  };
  const clienteExcluido = (cliente: Cliente) => {
    console.log(`Excluído:  ${cliente.nome}`);
  };
  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
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
              <Button
                cor="green"
                className="mb-4"
                onClick={() => setVisivel("form")}
              >
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
            cliente={clientes[0]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
