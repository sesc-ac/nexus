import SalesItem from "./SalesItem";
import styles from './SalesGrid.module.css';

export default function SalesGrid(){
    return(
        <div className={ styles.salesGrid }>
            <SalesItem
                category='Comerciário'
                costumer='Jeferson Barbosa'
                id='3546'
                saleTime='07:58:30'
                saleValue='5000'
            />
            <SalesItem
                category='Comerciário'
                costumer='Jeferson Barbosa'
                id='3546'
                saleTime='07:58:30'
                saleValue='5000'
            />
            <SalesItem
                category='Comerciário'
                costumer='Jeferson Barbosa'
                id='3546'
                saleTime='07:58:30'
                saleValue='5000'
            />

            <SalesItem 
                category='Comerciário'
                costumer='Jeferson Barbosa'
                id='3546'
                saleTime='07:58:30'
                saleValue='5000'
            />

            <SalesItem 
                category='Comerciário'
                costumer='Jeferson Barbosa'
                id='3546'
                saleTime='07:58:30'
                saleValue='5000'
            />

            <SalesItem 
                category='Comerciário'
                costumer='Jeferson Barbosa'
                id='3546'
                saleTime='07:58:30'
                saleValue='5000'
            />
        </div>
    );
}