import { Link } from 'react-router-dom';

const products = [{prodID:1 , pName: 'Casino tourbillon', image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-casino-tourbillon-ca100-40-aa-aa-abala_1.jpg'},
    {prodID:2 , pName: 'Astronomia baguette tourbillon',image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-astronomia-solar-as910-40-bd-bd-a_1.jpg'},
    {prodID:3 , pName: 'Fleur de Jardin',  image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-fleurs-de-jardin-af321-40-ba-ab-a_1.jpg'},
    {prodID:4 , pName: 'Bugatti Chiron tourbillon',  image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-bugatti-chiron-tb-bu200-30-aa-aa-b_1.jpg'},
    {prodID:5 , pName: 'Opera Godfather',  image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-opera-godfather-op110-21-ag-ab-a-1_1.jpg'},
    {prodID:6 , pName: 'Brilliant',  image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/j/a/jacob-co-brilliant-bq020-40-rh-aa-abala.jpg'},
  ]

const ProductList = () => {
  return (
    <div className="container w-full p-4 bg-white ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 m-5">
      {products.map((product) => (
        <div className="card card-compact shadow-xl m-5" key={product.id}>
        <figure className="flex justify-center">
          <img
            src={product.image}
            alt={product.pName} className="w-1/2 " />
        </figure>
        <div className="card-body">
        <Link to={`/product/${product.id}`} className='text-black text-2xl'>{product.pName} </Link>
        <Link to={`/product/${product.id}`} >view details </Link>
          
        </div>
      </div>
      ))}
    </div>
   </div>
  );
};

export default ProductList;

// {products.map((product) => (
//     <li key={product.id}>
//       <Link to={`/product/${product.id}`}>{product.pame}</Link>
//     </li>
