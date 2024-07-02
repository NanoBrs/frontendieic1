import Pagina2 from "./Pagina2";
import { Perfil } from "./componentes/Perfil";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav> 
      <Link href="/Pagina1">Pagina1</Link>
      <Link href="/Pagina2"> Registrar </Link>
      <Link href="/Pagina3"> Registrar </Link>
    </nav>
     <Perfil nombre="Joselito" apellido="vaca" edad={22} />
     <Perfil nombre="Pablo" apellido="Marmol" edad={16}/>
    </>
  );
}
