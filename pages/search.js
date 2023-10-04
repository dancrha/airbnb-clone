import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { format } from "date-fns";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(location);
  return (
    <div>
      <Header />

      <main className='flex'></main>
      <section className='flex-grow pt-14 px-6'>
        <p className='text-xs'>
          300+ Stays - {range} - for {noOfGuests} guests
        </p>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>
          Stays in {location}
        </h1>

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
