import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className='flex items-center'>
      {/* left */}
      <div className='relative h-16 w-16 '>
        <Image
          src={img}
          layout='fill'
          className='rounded-lg'
          alt='card-image'
        />
      </div>

      {/* right */}
      <div className=''></div>
    </div>
  );
}

export default SmallCard;
