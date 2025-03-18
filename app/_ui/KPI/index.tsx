import styles from './KPI.module.css';

export default function KPI({
    title, 
    value
}: {
    title: string,
    value: string
}){
    const className = `${styles.kpi}`;
    return(
        <div className={ className }>
            <p className={ styles.kpi__title }>{ title }</p>
            <p className={ styles.kpi__value }>{ value }</p>
        </div>
    );
}