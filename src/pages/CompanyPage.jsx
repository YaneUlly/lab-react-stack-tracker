import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const singleCompany = companies.find(company => company.slug === companySlug);

  return (
    <div key={singleCompany.id} className='companypage'>
      <h1>Company Profile</h1>
      <div className='companydetails'>
        <a href={singleCompany.website}>
          <button>
            <img
              src={singleCompany.logo}
              alt='companies-logo'
              style={{ width: '80px', height: '80px' }}
            />
          </button>
        </a>
        <div className='companydescription'>
          <h2>{singleCompany.name}</h2>
          <h3>About</h3>
          <p>{singleCompany.description}</p>
        </div>
      </div>
      <h3>Tech Stack</h3>
      <div className='techstack'>
        {singleCompany.techStack.map(tech => {
          return (
            <div key={tech.name} className='techbutton'>
              <Link to={`/tech/${tech.slug}?company=${singleCompany.slug}`}>
                <button>
                  <img
                    src={tech.image}
                    alt='technologies image'
                    style={{ width: '80px', height: '80px' }}
                  />
                </button>
                <p>{tech.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='backbutton'>
        <Link to='/'>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default CompanyPage;
