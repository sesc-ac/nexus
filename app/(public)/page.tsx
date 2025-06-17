import Link from "next/link";
import { getModules } from "../data-access/module";
import styles from './Page.module.css'
import Image from "next/image";
import Box from "../ui/Box";
import Flexbox from "../ui/Flexbox";

export default async function Page() {
  const modules = getModules();

  return (
    <>
      <nav className={ styles.navigation }>

        {modules.map((module, index) => (

          <Link className={ styles.link } key={ index } href={ module.href }>
            {/* <Box>
              <Flexbox> */}
                <Image className={ styles.icon } alt={ module.name } src={ module.icon } />

                <p className="lg"><b>{ module.name }</b></p>
              {/* </Flexbox>
            </Box> */}
          </Link>
        ))}
      </nav>
    </>
  );
}