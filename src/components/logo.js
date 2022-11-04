/** @jsxRuntime classic */
/** @jsx jsx */
import { IconButton, Image, jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <img src="https://i.postimg.cc/B6t3cs37/logo.png" alt="Logotipo" width="60"/>
    //<Link path="/" sx={styles.logo} {...props}>
//      <LogoSvg />
      //<Image src="../assets/images/logo.png" variant="avatar" />
    //</Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    maxWidth: [null, null, null, 185, null, 'none'],
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
