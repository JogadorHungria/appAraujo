import { Input } from "./components/input";
import { AppStyle } from "./style";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const App = () => {
  const schema = z.object({
    origem: z.string().min(1, { message: "Campo obrigatório!" }),
    destino: z.string().min(1, { message: "Campo obrigatório!" }),
    horarioSaida: z.string().min(1, { message: "Campo obrigatório!" }),
    horarioRetorno: z.string().min(1, { message: "Campo obrigatório!" }),
    quantidadePessoas: z.string().refine((value) => value >= 1 && value <= 6, {
      message: "A quantidade de pessoas deve estar entre 1 e 6.",
    }),
    temCrianca: z.string(),
    idadeCrianca: z.string(),
    temPedagio: z.string({ message: "Campo obrigatório!" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const teste = (e) => {
    console.log(e);
  };

  return (
    <AppStyle>
      <h1>Você ligou araujo chegou</h1>

      <form onSubmit={handleSubmit(teste)}>
        <Input register={register} name="origem" text="Local de partida" />
        <span>{errors.origem?.message && errors.origem.message}</span>
        <Input register={register} name="destino" text="Destino" />
        <span>{errors.destino?.message && errors.destino.message}</span>
        <Input
          register={register}
          name="horarioSaida"
          text="Qual o horário da saída ?"
        />
        <span>
          {errors.horarioSaida?.message && errors.horarioSaida.message}
        </span>
        <Input
          type={"number"}
          register={register}
          name="quantidadePessoas"
          text="Quantas pessoas irão?"
        />
        {
          <span>
            {errors.quantidadePessoas?.message &&
              errors.quantidadePessoas.message}
          </span>
        }
        <Input
          register={register}
          name="temCrianca"
          text="Tem alguma criança?"
        />
        <span>{errors.temCrianca?.message && errors.temCrianca.message}</span>
        <Input
          register={register}
          name="idadeCrianca"
          text="Se tiver qual idade?"
        />
        <span>
          {errors.idadeCrianca?.message && errors.idadeCrianca.message}
        </span>
        <Input
          register={register}
          name="horarioRetorno"
          text="Qual o horário do retorno?"
        />

        <span>
          {errors.horarioRetorno?.message && errors.horarioRetorno.message}
        </span>

        <Input
          register={register}
          name="temPedagio"
          text="Na sua rota tem pedágio?"
        />
        <span>{errors.temPedagio?.message && errors.temPedagio.message}</span>
        <button type="submit">Enviar</button>
      </form>
    </AppStyle>
  );
};

export default App;
