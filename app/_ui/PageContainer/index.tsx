import { ReactNode } from "react";
import styles from "./PageContainer.module.css";

export default function PageContainer({ 
    children 
}: { 
    children: ReactNode 
}) {
  return (
    <div className={styles.pageContainer}>
      {children}
    </div>
  );
}