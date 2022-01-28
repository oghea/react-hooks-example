import Population from '@/components/Population';

export default function App() {
  return (
    <div className="py-10 px-20 bg-grey min-h-screen">
      <div className="container">
        <h1 className="text-basic-blue text-5xl mb-24">Population der Staaten</h1>
        <Population />
      </div>
    </div>
  );
}
