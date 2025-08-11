import Image from 'next/image';
import nexusLogo from '@/public/nexus.svg';
import Flexbox from '../ui/Flexbox';
import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    console.log('🌱 LAYOUT - PUBLIC');

    return (
        <main className={ styles.main }>
            <Flexbox alignCenter column>
                <Image
                    alt="Logotipo do Nexus"
                    className={ styles.nexusLogo }
                    src={ nexusLogo }
                />

                <p className="md clr-text-light"><b>Versão: BETA</b></p>
            </Flexbox>

            { children }
        </main>
    );
}