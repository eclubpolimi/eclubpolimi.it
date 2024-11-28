type Props<T> = {
  props: T;
};

type Redirect = {
  redirect: {
    destination: string;
    permanent: boolean;
  };
};

type ServerSideHookResponse<T> = Props<T> | Redirect;

const useServerSideAPI = async <T>(
  callback: () => Promise<T>,
): Promise<ServerSideHookResponse<T>> => {
  return await callback()
    .then((data: T) => ({
      props: data,
    }))
    .catch(() => ({
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }));
};

export default useServerSideAPI;
