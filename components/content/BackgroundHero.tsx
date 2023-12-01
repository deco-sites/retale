export interface Props {
  title?: string;
  subtitle?: string;
}

export default function BackgroundHero({ title, subtitle }: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-white text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
