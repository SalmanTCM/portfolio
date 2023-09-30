import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            Your Logo
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className='font-mono space-x-4'>
           <span className='text-[#00818A]'>i.</span>Home
          </Link>
          <Link href="/about">
          <span className='text-[#00818A]'>ii.</span>About
          </Link>
          <Link href="/experience">
          <span className='text-[#00818A]'>iii.</span>Experience
          </Link>
          <Link href="/work">
          <span className='text-[#00818A]'>iv.</span>Work
          </Link>
          <Link href="/contact" className='hover:text-gray-400'>
          <span className='text-[#00818A]'>v.</span>Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
