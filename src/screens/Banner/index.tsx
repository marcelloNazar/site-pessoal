import { Container } from './styles';

interface BannerProps {
  title: string;
  type: string;
  imgUrl: string;
}

export default function Banner({ title, type, imgUrl }: BannerProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
