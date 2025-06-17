import ProtectedHeader from "../ui/ProtectedHeader";
import Sidebar from "../ui/Sidebar";
import styles from './Layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
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