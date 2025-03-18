// import styles from "./page.module.css";
import { Button } from "./_ui/Button";
import PageContainer from "./_ui/PageContainer";
import PageTitle from "./_ui/PageTitle";

export default function Page() {
  return (
    <>
      <PageTitle
        title="Sistema Integrado v1.0"
        subtitle="A solução integrada do Departamento Regional do Acre."
      />

      <PageContainer>
        <h2>Módulos</h2>

        <ul>
          <li>Cupons Fiscais</li>
        </ul>
      </PageContainer>
    </>
  );
}