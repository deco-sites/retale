export interface Props {
  name?: string;
  description?: string;
}

const ProductDetailsGallery = ({ name, description }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Label</span>
          <div className="flex space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              {/* <HeartIcon className="h-6 w-6" /> */}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              {/* <ShareIcon className="h-6 w-6" /> */}
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4 mb-2">{name}</h1>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex items-baseline space-x-2">
          <p className="text-xl font-semibold">8x R$57,30</p>
          <p className="text-sm line-through text-gray-400">R$999,00</p>
          <p className="text-xl font-semibold text-blue-600">R$998,00</p>
        </div>
        <p className="text-xs text-gray-400 mb-4">Ver parcelas</p>
        <div className="flex items-center mb-4">
          {/* Star rating and review count here */}
        </div>
        <p className="text-red-500 text-sm mb-4">12 sold in last 15 hours</p>
        <div className="mb-4">{/* Color options here */}</div>
        <div className="mb-4">{/* Size options here */}</div>
        <div className="flex items-center mb-6">
          <button className="text-sm px-2 border rounded">-</button>
          <input
            type="text"
            className="w-12 text-center border-t border-b"
            value="10"
            readOnly
          />
          <button className="text-sm px-2 border rounded">+</button>
        </div>
        <div className="flex space-x-2">
          <button className="btn btn-primary flex-1">Add to Cart</button>
          <button className="btn btn-secondary flex-1">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGallery;
