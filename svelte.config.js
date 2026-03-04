import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/banklab-mvp'
    },
    prerender: {
      entries: ['*'],
      handleMissingId: 'ignore',
      handleHttpError: ({ status, path, referrer, message }) => {
        if (status === 404) {
          // This is a known issue with the base path
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
