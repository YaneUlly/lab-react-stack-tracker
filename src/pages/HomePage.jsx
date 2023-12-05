import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='bodycards'>
        {companies.map(company => {
          return (
            <div key={company.id} className='companiescard'>
              <Link to={`/company/${company.slug}`}>
                <div className='companyname'>{company.name}</div>
                <img src={company.logo} alt='companies logo' />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
