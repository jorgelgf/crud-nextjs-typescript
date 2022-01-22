import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Button";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente.nome ?? "");
  const [idade, setIdade] = useState(props.cliente.id ?? 0);
  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Código" valor={id} /> : false}
      <Entrada
        className="mb-5"
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
      />
      <Entrada
        className="mb-5"
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="flex mt-7 justify-end">
        <Botao
          className=" mr-2"
          cor="blue"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
