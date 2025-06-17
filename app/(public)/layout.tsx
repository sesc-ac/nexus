import Image from 'next/image';
import nexusLogo from '@/public/nexus.svg';
import Flexbox from '../ui/Flexbox';
import styles from './Layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <main className={ styles.main }>
            <Flexbox alignCenter column>
                <Image
                    alt="Logotipo do Nexus"
                    className={ styles.nexusLogo }
                    src={ nexusLogo }
                />

                <p className="lg clr-text-light"><b>Versão: ALFA</b></p>
            </Flexbox>

            { children }
        </main>
    );
}