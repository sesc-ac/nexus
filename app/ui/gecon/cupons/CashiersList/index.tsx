import { getCashiers } from "@/app/data-access/cashier";
import styles from './CashierList.module.css';

export default async function CashiersList() {
    const cashiers = await getCashiers();

    return(
        <ul className={ styles.cashierList }>
            {cashiers.map((cashier: any) => {
                return(
                    <li className={ styles.cashierItem } key={cashier.SQCAIXA}>
                        <h3>{cashier.NMPESSOA}</h3>
                        <p>{cashier.DTABERTURA}</p>
                        <p>{cashier.DTFECHAMEN}</p>
                    </li>
                );
            })}
        </ul>
    );
}