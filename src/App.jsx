import { Input } from "./components/input";
import { AppStyle } from "./style";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "./components/select";
import { useState } from "react";

import emailjs from "@emailjs/browser";

const App = () => {
  const [temCriança, setTemCriança] = useState(false);

  const schema = z.object({
    nome: z.string().min(2, { message: "Campo obrigatório!" }),
    contato: z
      .string()
      .min(11, { message: "Numero invalido" })
      .max(11, { message: "Numero invalido" }),
    origem: z.string().min(1, { message: "Campo obrigatório!" }),
    destino: z.string().min(1, { message: "Campo obrigatório!" }),
    horarioSaida: z.string().min(1, { message: "Campo obrigatório!" }),
    horarioRetorno: z.string().min(1, { message: "Campo obrigatório!" }),
    quantidadePessoas: z.string().optional(),
    temCrianca: z.string().optional(),
    idadeCrianca: z.string().optional(),
    temPedagio: z.string({ message: "Campo obrigatório!" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    let textoFormatado = "\n";
    for (const chave in data) {
      textoFormatado += `${chave}: ${data[chave]}\n`;
    }

    emailjs
      .send(
        "service_u117khs",
        "template_vqw9k98",
        {
          to_name: "Araujoujoara@hotmail.com",
          from_name: "AppAraujo",
          from_email: "Araujoujoara@hotmail.com",
          message: textoFormatado,
        },
        "OMr098E2D4a25g9xg"
      )
      .then((response) => {
        console.log("Email enviado com sucesso", response);
      })
      .catch((error) => {
        console.error("Erro ao enviar o email", error);
      });
  };

  return (
    <AppStyle>
      <h1>Você ligou Araujo chegou</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} name="nome" text="Seu nome" />
        <span>{errors.nome?.message && errors.nome.message}</span>

        <Input register={register} name="contato" text="Seu contato" />
        <span>{errors.contato?.message && errors.contato.message}</span>

        <Input register={register} name="origem" text="Local de partida" />
        <span>{errors.origem?.message && errors.origem.message}</span>

        <Input register={register} name="destino" text="Destino" />
        <span>{errors.destino?.message && errors.destino.message}</span>
        <Input
          register={register}
          name="horarioSaida"
          text="Qual o horário da saída"
          type={"time"}
        />
        <span>
          {errors.horarioSaida?.message && errors.horarioSaida.message}
        </span>

        <Input
          register={register}
          name="horarioRetorno"
          text="Qual o horário do retorno"
          type={"time"}
        />
        <span>
          {errors.horarioRetorno?.message && errors.horarioRetorno.message}
        </span>

        <Select
          placeHolder={"Quantas pessoas"}
          ListOptions={["1", "2", "3", "4", "5", "6"]}
          register={register}
          name="quantidadePessoas"
        />

        <span>
          {errors.quantidadePessoas?.message &&
            errors.quantidadePessoas.message}
        </span>

        <Select
          conditionForState={setTemCriança}
          placeHolder={"Tem alguma criança"}
          ListOptions={[false, true]}
          register={register}
          name="temCrianca"
        />

        <span>{errors.temCrianca?.message && errors.temCrianca.message}</span>

        {temCriança && (
          <Select
            placeHolder={"Idade da criança"}
            ListOptions={["Até 4 anos", "De 5 a 8 anos", "Acima de 8 anos"]}
            register={register}
            name="idadeCrianca"
          />
        )}

        {/* <Input
          register={register}
          name="idadeCrianca"
          text="Caso tenha qual a idade"
        /> */}

        <Select
          placeHolder={"Na sua rota tem pedágio"}
          ListOptions={["Não", "Sim"]}
          register={register}
          name="temPedagio"
        />

        {/* <Input
          register={register}
          name="temPedagio"
          text="Na sua rota tem pedágio"
        /> */}
        <span>{errors.temPedagio?.message && errors.temPedagio.message}</span>
        <button type="submit">Enviar</button>
      </form>
    </AppStyle>
  );
};

export default App;
