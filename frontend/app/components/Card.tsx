// frontend/app/components/Card.tsx
interface CardProps {

  title: string;

  description: string;

  icon: React.ReactNode;

  onClick: () => void;

  buttonLabel: string;

  style?: React.CSSProperties; // Added style property

}


export default function Card({ title, description, icon, onClick, buttonLabel }: CardProps) {
  return (
    <div className="w-60 p-4 rounded-xl backdrop-blur-md bg-white/5 shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105">
      <div className="flex flex-col items-center justify-center h-full">
        {/* Icon */}
        <div className="mb-2 text-primaryText">{icon}</div>

        {/* Title */}
        <h2 className="text-lg font-medium text-white text-center mb-1">{title}</h2>

        {/* Description */}
        <p className="text-sm text-white/70 text-center mb-3">{description}</p>

        {/* Action Button */}
        <button
          onClick={onClick}
          className="mt-2 bg-gray-700 py-1.5 px-4 rounded-md text-white shadow-inner transition hover:bg-gray-600 focus:outline-none text-sm font-semibold"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
