import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white font-playfair hover:text-primary transition-colors cursor-pointer">
        Wedora
      </span>
    </Link>
  );
};

export default Logo;
