import type {MiddlewareHandler} from 'astro';

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const {request} = ctx;
  const url = new URL(request.url);

  if (import.meta.env.DEV && url.pathname === '/-wf/ready') {
    const resHeaders = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return new Response(JSON.stringify({ready: true}), {
      headers: resHeaders,
    });
  }

  return next();
};
