import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <div className="sidebar">
        <Link
        to='/serviceSelection'
        className={
          currentPage === '/serviceSelection' ? 'nav-link active' : 'nav-link'
        }
      >
        Service Selection
      </Link>
      <Link
        to='/login'
        className={
          currentPage === '/login' ? 'nav-link active' : 'nav-link'
        }
      >
        Login
      </Link>
      <Link
        to='/propertyDetails'
        className={
          currentPage === '/propertyDetails' ? 'nav-link active' : 'nav-link'
        }
      >
        Property Details
      </Link>
      <Link
        to='/appointmentAvailability'
        className={
          currentPage === '/appointmentAvailability' ? 'nav-link active' : 'nav-link'
        }
      >
        Appointment Availability 
      </Link>
      <Link
        to='/personalInformation'
        className={
          currentPage === '/personalInformation' ? 'nav-link active' : 'nav-link'
        }
      >
        Personal Information 
      </Link>
      <Link
        to='/summary'
        className={
          currentPage === '/summary' ? 'nav-link active' : 'nav-link'
        }
      >
        Summary 
      </Link>
    </div>
  );
};

export default Nav;