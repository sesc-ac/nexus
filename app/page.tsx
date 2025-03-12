// import styles from "./page.module.css";
import { fetchSales } from "./lib/data";
import { Button } from "./ui/Button";
import PageContainer from "./ui/PageContainer";
import PageTitle from "./ui/PageTitle";

export default async function Page() {
  // const sales = await fetchSales();

  return (
    <>
      <PageTitle
        title="Sistema Integrado"
        subtitle="Um sistema, várias soluções."
      />

      <PageContainer>
        <h1>Hello World</h1>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque debitis nulla magnam, ratione cum porro repudiandae ut quas cumque nostrum voluptatibus recusandae ipsum iste laudantium praesentium blanditiis maiores. Magnam, blanditiis!</p>

        <Button>Botão</Button>

        <form action="">
          <div>
            <label htmlFor="">Label</label>
            <input type="text" />
          </div>

          <div>
            <input type="radio" name="" id="" />
            <label htmlFor="">Label</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">Label</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">Label</label>
          </div>

          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Label</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Label</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Label</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Label</label>
          </div>
        </form>
      </PageContainer>
    </>
  );
}