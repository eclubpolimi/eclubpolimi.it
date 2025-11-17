import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/startupchallenge/2025',
      permanent: false,
    },
  };
};

// This component will never render due to the redirect
const StartupChallenge = () => null;

export default StartupChallenge;
