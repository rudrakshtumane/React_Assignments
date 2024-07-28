

const Gallery = ({ images }) => {
    return (
        <>
        <h1 className="text-4xl text-center mt-5 font-bold"> Car Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
            {images.map((url, index) => (
                <div className="card card-compact shadow-xl m-5 mt-[50px] bg-white rounded-none target:shadow-lg " key={index}>
                    <figure className="flex justify-center">
                        <img
                            src={url}
                            alt={`Gallery item ${index + 1}`}
                           className="w-full "
                        />
                    </figure>
                </div>
            ))}
        </div>
        </>
    );
}

export default Gallery;
