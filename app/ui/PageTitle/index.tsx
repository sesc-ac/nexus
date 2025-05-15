import styles from "./PageTitle.module.css";

export default function PageTitle({
    title,
    subtitle
}: { 
    title: string,
    subtitle?: string 
}){
    return(
        <div className={ styles.pageTitle }>
            <h1 className={ styles.title }>{ title }</h1>
            <p className={ styles.subtitle }>{ subtitle }</p>
        </div>
    );
}