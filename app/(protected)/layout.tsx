import ProtectedHeader from "../ui/ProtectedHeader";
import Sidebar from "../ui/Sidebar";
import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  console.log('🌱 LAYOUT - PROTECTED');

  return (
      <>
          <ProtectedHeader />
          <Sidebar />
          
          <main className={ styles.main }>
              { children }
          </main>
      </>
  );
}