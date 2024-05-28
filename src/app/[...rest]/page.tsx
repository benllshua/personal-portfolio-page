'use client';
import { useColorStore } from '@/context/useColor';
import { Button, Container, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  const color = useColorStore((state) => state.color);

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" minHeight="90vh" direction="column" gap={2}>
        <Image
          src={`/images/illustrations/${color.folderName}/notFound.png`}
          alt="404 page Illustration"
          width={400}
          height={400}
        />
        <Link href={'/'}>
          <Button variant="contained" color="primary">
            Back Home
          </Button>
        </Link>
      </Grid>
    </Container>
  );
}
