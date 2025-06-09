'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Erro Crítico</h1>
          <p className="text-lg mb-6">Ocorreu um erro grave na aplicação.</p>
          <button
            onClick={reset}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
} 