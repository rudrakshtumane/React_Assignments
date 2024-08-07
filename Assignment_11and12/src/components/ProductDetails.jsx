import { useParams } from 'react-router-dom';

const products = [
  { prodID: 1, pName: 'Casino tourbillon', pDescription: 'Custom made for Neymar Jr', price: '$280000', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-casino-tourbillon-ca100-40-aa-aa-abala_1.jpg' },
  { prodID: 2, pName: 'Astronomia baguette tourbillon', pDescription: 'Custom made for Conor McGregor', price: '$1 million', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-astronomia-solar-as910-40-bd-bd-a_1.jpg' },
  { prodID: 3, pName: 'Fleur de Jardin', pDescription: 'Custom made for Lana Del-Rey', price: '$450000', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-fleurs-de-jardin-af321-40-ba-ab-a_1.jpg' },
  { prodID: 4, pName: 'Bugatti Chiron tourbillon', pDescription: 'Custom made for Ronaldo', price: '$850000', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-bugatti-chiron-tb-bu200-30-aa-aa-b_1.jpg' },
  { prodID: 5, pName: 'Opera Godfather', pDescription: 'Custom made for Rudraksh Tumane', price: '$950000', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-opera-godfather-op110-21-ag-ab-a-1_1.jpg' },
  { prodID: 6, pName: 'Brilliant', pDescription: 'Custom made for Shriya Sorte', price: '$1000000', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-brilliant-bq020-40-rh-aa-abala.jpg' },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.prodID === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className=" w-full p-4 bg-white">
      <div className="card card-compact shadow-xl m-5  w-full max-w-lg mx-auto">
        <figure className="flex justify-center">
          <img
            src={product.image}
            alt={product.pName}
            className="w-full md:w-1/2"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-black text-2xl">{product.pName}</h2>
          <p>{product.pDescription}</p>
          <p className='text-black'> Price : {product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
