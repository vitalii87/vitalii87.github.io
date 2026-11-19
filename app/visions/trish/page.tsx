import { PhilosophicalEssayPage, philosophicalEssayMetadata } from '../../components/PhilosophicalEssayPage';

export const metadata = philosophicalEssayMetadata('en', 'trish');

export default function Page() {
  return <PhilosophicalEssayPage lang="en" slug="trish" />;
}
