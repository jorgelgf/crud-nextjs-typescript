import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
export default function Home() {
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

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `}
    >
      <Layout titleText="Cadastro Simples">
        <div className="flex justify-end">
          <Button cor="green" className="mb-4">
            Cadastrar
          </Button>
        </div>

        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
}
