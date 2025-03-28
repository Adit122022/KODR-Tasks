import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ImageDetail = () => {
  const { id } = useParams();


  const image = useSelector((state) =>
    state.images.data.find((img) => img.id === id)
  );

  if (!image) return <div>Image not found!</div>;

  return (
    <div className="p-6 w-full h-screen flex  items-center justify-center">
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="w-1/3  aspect-square object-cover rounded-lg"
      />
      <div className="mt-4  px-36">
        <h2 className="text-lg font-bold">{image.description || "No Description"}</h2>
        <p className="text-sm text-gray-500">
          By {image.user.name} | {new Date(image.created_at).toDateString()}
        </p>
        <Link
          to={image.links.download}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default ImageDetail;
