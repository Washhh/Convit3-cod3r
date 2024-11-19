import Page from "@/components/template/Page";
import { Evento } from "@/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Page className="w-full">
      <div>Inicio</div>
    </Page>
  );
}
