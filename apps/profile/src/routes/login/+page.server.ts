import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookies, request, fetch }) => {
    cookies.set('authenticated', 'true', { path: '/' });
    throw redirect(302, '/');
  }
};