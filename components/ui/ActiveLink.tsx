import { FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { IMenuItem } from '../../interfaces';

export const ActiveLink:FC<IMenuItem> = ({alias, anchor, icon,active=''}) => {//de tipo FC que extiende propiedades de la Interfaz IActiveLink mug-saucer
    const router = useRouter();
    return (
      <Link href={anchor} legacyBehavior>
        <a className={router.asPath === anchor ? `${active}-active` : ''}> {alias}</a>
      </Link>
    )
}
