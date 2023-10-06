import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import MapComponent from "@/components/MapComponent";

import { format } from "date-fns";
import { useRouter } from "next/router";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(location);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className='flex'>
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

          <div className='flex flex-col'>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  key={img}
                />
              )
            )}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <MapComponent searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
