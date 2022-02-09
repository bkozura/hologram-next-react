/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link 
    path="https://www.hologram.io/"
    sx={{
      variant: 'links.logo',
      display: 'inline-block', // Hologram override
      cursor: 'pointer',
      mx:'auto',
    }}
    {...rest}
    >
     <Image src={src} width="160px" alt="Hologram Logo"/>
    </Link>
  );
}
