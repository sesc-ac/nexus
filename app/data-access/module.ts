import reciptIcon from '@/public/icons/receipt.svg';
import productIcon from '@/public/icons/box_edit.svg';
import syncIcon from '@/public/icons/sync.svg';
import menuBookIcon from '@/public/icons/menu_book.svg';
import accountCircleIcon from '@/public/icons/account_circle.svg';

export function getModules(){
    console.log('💿 DAL - GET MODULES');
    
    return [
        {
            group: 'Central',
            href: '/central/cardapio', 
            icon: menuBookIcon, 
            name: 'Cardápio Digital', 
            
        },
        
        {
            group: 'GECON',
            href: '/gecon/cupons', 
            icon: reciptIcon, 
            name: 'Cupons Fiscais', 
            
        },
        
        {
            group: 'GECON',
            href: '/gecon/produtos', 
            icon: productIcon, 
            name: 'Produtos', 
            
        },
        
        {
            group: 'GETIC',
            href: '/getic/sincronizacao', 
            icon: syncIcon, 
            name: 'Sincronização', 
            
        },
        
        {
            group: 'GETIC',
            href: '/getic/usuarios', 
            icon: accountCircleIcon,
            name: 'Usuários', 
        },
    ];
}