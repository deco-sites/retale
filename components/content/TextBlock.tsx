export interface Props {
    title?: string;
    /* @format textarea */
    content?: string;
}

const TextBlock = ({ title, content }: Props) => {
    return (
        <div className="bg-white">
            <div class="container py-16 lg:px-16">
            <div class="bg-gray-100 p-8 lg:p-28 rounded-2xl">
                <h1 className="text-3xl font-medium mb-4">{title}</h1>
                <p className="text-gray-600">{content}</p>
            </div>
            </div>
        </div>
    );
}

export default TextBlock;