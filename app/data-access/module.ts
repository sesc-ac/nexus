import reciptIcon from '@/public/icons/receipt.svg';
import productIcon from '@/public/icons/box_edit.svg';
import syncIcon from '@/public/icons/sync.svg';
import menuBookIcon from '@/public/icons/menu_book.svg';

export function getModules(){
    return [
        {name: 'Cardápio Digital', href: '/nutricao/cardapio', icon: menuBookIcon, group: 'Nutrição'},
        {name: 'Cupons Fiscais', href: '/gecon/cupons', icon: reciptIcon, group: 'GECON'},
        {name: 'Produtos', href: '/gecon/produtos', icon: productIcon, group: 'GECON'},
        {name: 'Sincronização', href: '/getic/sincronizacao', icon: syncIcon, group: 'GETIC'},
    ];
}