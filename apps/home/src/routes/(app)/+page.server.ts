import { redirect } from '@sveltejs/kit';

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('authenticated', { path: '/' });
    throw redirect(302, '/');
  }
};