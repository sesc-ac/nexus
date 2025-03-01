import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <p>
          This is a Next.js with TypeScript template.
        </p>

        <button>Botão</button>

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
            <label htmlFor=""></label>
            <input type="checkbox" name="" id="" />
            <label htmlFor=""></label>
            <input type="checkbox" name="" id="" />
            <label htmlFor=""></label>
            <input type="checkbox" name="" id="" />
            <label htmlFor=""></label>
          </div>
        </form>
      </main>
    </div>
  );
}
