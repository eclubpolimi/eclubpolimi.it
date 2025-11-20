import 'es-module-lexer';
import './chunks/astro-designed-error-pages_KAzL39HU.mjs';
import 'kleur/colors';
import './chunks/astro/server_C27Lqkz0.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_DdIb9CVw.mjs';

const onRequest$1 = async (ctx, next) => {
  const { request } = ctx;
  new URL(request.url);
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
