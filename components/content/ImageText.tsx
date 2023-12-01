import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: string;
  content: string;
  image: ImageWidget;
  reverse?: boolean;
}
const ImageText = ({ title, content, image, reverse }: Props) => {
  return (
    <div
      class={`flex flex-wrap md:flex-nowrap items-center justify-center bg-gray-50 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img
        class="min-h-[490px] md:w-1/2 w-full h-full object-cover"
        src={image}
        alt="Product"
      />
      <div class="md:w-1/2 p-12">
        <div class="max-w-md mx-auto">
          <h2 class="text-2xl font-bold mb-4">{title}</h2>
          <p class="text-gray-600 mb-2">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
