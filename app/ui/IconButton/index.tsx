import Image from 'next/image';
import styles from './IconButton.module.css';
import openPanelIcon from '@/public/icons/right_panel_open.svg';
import closePanelIcon from '@/public/icons/right_panel_close.svg';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: 'openPanel' | 'closePanel',
    size?: 'lg',
};

export default function IconButton({ icon, size, ...rest  }: IconButtonProps) {    
    const className = `
        ${styles.iconButton}
        ${styles[size || '']}
    `
    let srcIcon = '';
    
    switch(icon) {
        case 'openPanel':
            srcIcon = openPanelIcon;
            break;
        
        case 'closePanel':
            srcIcon = closePanelIcon;
            break;
    }

    return(
        <button 
            className={ className }
            { ...rest }
        >
            <Image 
                alt="Botão com ícone"
                src={ srcIcon }
            />
        </button>
    );
}