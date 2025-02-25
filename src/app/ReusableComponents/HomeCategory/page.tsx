import Link from 'next/link';

interface HomeCardCat{
  imagepath:String,
  category:String
}
const Homecard=({ imagepath, category } :HomeCardCat) => {
  return (
    <div className="w-full h-[350px]  flex justify-center items-center text-black box-border">
      <div className="w-3/4 h-full flex justify-center items-center border rounded-lg shadow-lg overflow-hidden">
        <Link
          href={{
            pathname: '/Products',
            query: { category },
          }}
        >
          <div className="w-full h-full p-3 bg-white flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <div className="w-full h-[200px]  flex justify-center items-center  rounded-t-lg ">
              <img
                src={imagepath}
                alt="pic"
                className="w-full h-full transform transition duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">{category}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homecard;
