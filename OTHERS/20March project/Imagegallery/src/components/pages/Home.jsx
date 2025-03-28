import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setPage } from '../features/imageSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error, currentPage, totalPages } = useSelector( (state) => state.images );

  useEffect(() => {
    dispatch(fetchImages({ query: 'nature', page: currentPage }));
  }, [dispatch, currentPage]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchImages({ query: e.target.value, page: 1 }));
      dispatch(setPage(1));
    }
  };

  const nextPage = () => {  if (currentPage < totalPages)   dispatch(setPage(currentPage + 1));
  }
  const prevPage = () => { if (currentPage > 1)   dispatch(setPage(currentPage - 1)); }

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 mb-4 w-full"
        onKeyDown={handleSearch}
      />

    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((image) => (
          <Link key={image.id} to={`/images/${image.id}`}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="w-full h-48 object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>


      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>

        <span className="text-lg font-bold">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
