import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-lg mb-6">A página que você está procurando não existe ou foi movida.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
} 