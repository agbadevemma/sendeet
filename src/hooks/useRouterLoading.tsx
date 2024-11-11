'use client';

import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { useEffect, useCallback } from 'react';

type NavigateOptions = {
  scroll?: boolean;
};

export function useRouterWithLoading() {
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      // Start the loading bar
      Router.events.emit('routeChangeStart', '');
    };

    const end = () => {
      // Complete the loading bar
      Router.events.emit('routeChangeComplete', '');
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
    };
  }, []);

  const push = useCallback((url: string, options?: NavigateOptions) => {
    Router.events.emit('routeChangeStart', url);
    router.push(url, options);
  }, [router]);

  const replace = useCallback((url: string, options?: NavigateOptions) => {
    Router.events.emit('routeChangeStart', url);
    router.replace(url, options);
  }, [router]);

  const back = useCallback(() => {
    Router.events.emit('routeChangeStart', '');
    router.back();
  }, [router]);

  return {
    ...router,
    push,
    replace,
    back,
  };
}
