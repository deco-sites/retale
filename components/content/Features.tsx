import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Feature {
  title: string;
  description: string;
}

export interface Props {
  features: Feature[];
}

const Features = ({ features }: Props) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Características
        </h2>
        <div className="flex gap-6 overflow-scroll scrollbar-none">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 flex items-end w-64 h-64"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M23.4337 17.8167L20.0003 16.25L23.4337 14.6834L25.0003 11.25L26.567 14.6834L30.0003 16.25L26.567 17.8167L25.0003 21.25L23.4337 17.8167ZM6.66699 24.5834L8.23366 21.15L11.667 19.5834L8.23366 18.0167L6.66699 14.5834L5.10033 18.0167L1.66699 19.5834L5.10033 21.15L6.66699 24.5834ZM14.167 16.25L15.9837 12.2334L20.0003 10.4167L15.9837 8.60004L14.167 4.58337L12.3503 8.60004L8.33366 10.4167L12.3503 12.2334L14.167 16.25ZM7.50033 35.4167L17.5003 25.4L24.167 32.0667L38.3337 16.1334L35.9837 13.7834L24.167 27.0667L17.5003 20.4L5.00033 32.9167L7.50033 35.4167Z"
                    fill="#0D1717"
                  />
                </svg>
                <h3 className="font-bold text-lg text-gray-800 mt-6">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
