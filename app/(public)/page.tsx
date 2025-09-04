import Link from "next/link";
import { getModules } from "../data-access/module";
import styles from './page.module.css'
import Image from "next/image";
import LogoutWrapper from "../ui/LogoutWrapper";
import logoutLogo from '@/public/icons/logout.svg';

export default async function Page() {
  console.log('📄 PAGE - PUBLIC');

  const modules = getModules();

  return (
    <>
      <nav className={ styles.navigation }>
        {modules.map((module, index) => (
          <Link 
            className={ styles.link } 
            href={ module.href }
            key={ index } 
          >
              {module.icon ? 
                <Image 
                  alt={ module.name } 
                  className={ styles.icon } 
                  src={ module.icon } 
                />
              : null}
              
              <p><b>{ module.name }</b></p>
          </Link>
        ))}

        <LogoutWrapper>
          <p className={`${styles.link} ${styles.logoutLink}`}>
            <Image 
              alt="Sair" 
              className={ styles.icon } 
              src={ logoutLogo } 
            />

            Sair
          </p>
        </LogoutWrapper>
      </nav>
    </>
  );
}