import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  // console.log('slug:', slug);

  const techSlug = technologies.find(tech => tech.slug === slug);

  const [searchParams, setSearchParams] = useSearchParams();
  const companyName = searchParams.get('company');

  // console.log('companyName:', companyName);
  // console.log('searchParams:', searchParams);

  return (
    <div key={techSlug.id} className='techbox'>
      <h1>Technology Details</h1>

      <div className='techinfo'>
        <button>
          <img src={techSlug.image} alt='tech-logo' />
        </button>
        <div className='techdescription'>
          <h2>{techSlug.name}</h2>
          <h3>About</h3>
          <p>{techSlug.description}</p>
        </div>
      </div>
      <div className='backbutton'>
        <Link to={`/company/${companyName}`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default TechnologyPage;
