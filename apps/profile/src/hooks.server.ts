import { redirect } from '@sveltejs/kit';

const publicRoutes = ['/login'];

export const handle = async ({ event, resolve }) => {
  const authenticated = event.cookies.get('authenticated');

  if (!authenticated && !publicRoutes.some(r => r === event.url.pathname)) {
    throw redirect(302, '/login');
  }

  return await resolve(event);
};