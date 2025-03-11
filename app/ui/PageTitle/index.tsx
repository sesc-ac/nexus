import styles from "./PageTitle.module.css";

export default function PageTitle(){
    return(
        <div className={ styles.pageTitle }>
            <h1 className={ styles.title }>Título da página</h1>
            <p className={ styles.subtitle }>Uma descrição para a página</p>
        </div>
    );
}