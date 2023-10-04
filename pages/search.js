import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Search() {
  return (
    <div>
      <Header />

      <main className='flex'></main>
      <section className='flex-grow pt-14 px-6'>
        <p className='text-xs'>300+ Stays for ... guests</p>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
          <p className='button hover:scale-105'>Cancellation Flexibility</p>
          <p className='button hover:scale-105'>Type of Place</p>
          <p className='button hover:scale-105'>Price</p>
          <p className='button hover:scale-105'>Rooms and Beds</p>
          <p className='button hover:scale-105'>More filters</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Search;
