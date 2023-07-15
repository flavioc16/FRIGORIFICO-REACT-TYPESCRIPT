import Header from "../../components/Header";

export interface IClientProps {
}

export default function Client (props: IClientProps) {
  return (
    <div>
        <Header/>
      <h1>Clientes</h1>
    </div>
  );
}
