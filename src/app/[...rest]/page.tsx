import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Illustration from 'public/illustrations/404 Error-amico.svg';

export default function NotFoundPage() {
  return (
    <Container>
      <Image src={Illustration} alt="404 page Illustration" width={300} />
      <div className="flex items-center justify-center gap-8">
        <h1 className="text-xl font-bold">
          Not Found
          <Link href={'/'}>Back Home</Link>
        </h1>
      </div>
    </Container>
  );
}
