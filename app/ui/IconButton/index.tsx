import Image from 'next/image';
import styles from './IconButton.module.css';
import openPanelIcon from '@/public/icons/right_panel_open.svg';
import closePanelIcon from '@/public/icons/right_panel_close.svg';
import editIcon from '@/public/icons/edit.svg';
import deleteIcon from '@/public/icons/delete.svg';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: 'closePanel' | 'delete' | 'edit' | 'openPanel',
    size?: 'lg',
};

export default function IconButton({ icon, size, ...rest  }: IconButtonProps) {    
    const className = `
        ${styles.iconButton}
        ${styles[size || '']}
    `
    let srcIcon = '';
    
    switch(icon) {
        case 'closePanel':
            srcIcon = closePanelIcon;
            break;
        case 'delete':
            srcIcon = deleteIcon;
            break;

        case 'edit':
            srcIcon = editIcon;
            break;
            
        case 'openPanel':
            srcIcon = openPanelIcon;
            break;
    }

    return(
        <button 
            className={ className }
            { ...rest }
        >
            <Image 
                alt="Botão com ícone"
                className={ styles.icon }
                src={ srcIcon }
            />
        </button>
    );
}