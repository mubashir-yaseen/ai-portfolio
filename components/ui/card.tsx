export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white shadow-md p-4 rounded-lg">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-gray-800">{children}</div>;
}
