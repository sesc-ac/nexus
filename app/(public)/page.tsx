import Link from "next/link";
import { getModules } from "../data-access/module";
import styles from './page.module.css'
import Image from "next/image";

export default async function Page() {
  console.log('📄 PAGE - PUBLIC');

  const modules = getModules();

  return (
    <>
      <nav className={ styles.navigation }>
        {modules.map((module, index) => (

          <Link className={ styles.link } key={ index } href={ module.href }>
              <Image className={ styles.icon } alt={ module.name } src={ module.icon } />
              <p><b>{ module.name }</b></p>
          </Link>
        ))}
      </nav>
    </>
  );
}