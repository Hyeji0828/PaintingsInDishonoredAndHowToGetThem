import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x)=>x);

    return (
      <nav className="flex items-center space-x-3 font-kor tracking-widest text-md text-white absolute left-5 top-3">
        <Link to="/" className="hover:text-primary">HOME</Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length-1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <div key={to} className="flex items-center space-x-2">
                <span>&gt;</span>
                {last ? (
                  <span className='text-gray-300'>{value}</span>
                ) : (
                  <Link to={to} className='hover:text-primary'>{value}</Link>
                )}
              </div>
            );
          })}
    </nav>
  );
};

export default Breadcrumb;