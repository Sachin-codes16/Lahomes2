import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllProperty } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const propertyStatuses = ['Rented', 'Vacant', 'Rented', 'Rented', 'Vacant', 'Rented'];

const PropertiesCard = ({
  bath,
  beds,
  flor,
  size: ft,
  icon,
  location,
  name,
  price,
  type,
  image,
  status
}) => {
  const navigate = useNavigate();
  const isVacant = status === 'Vacant';

  return <Card className="overflow-hidden">
      <div className="position-relative">
        <button
          type="button"
          className="border-0 bg-transparent p-0 w-100"
          onClick={() => navigate('/landlord/detailspage')}
          aria-label={`Open ${name} details`}
        >
          <img src={image} alt="properties" className="img-fluid rounded-top w-100" style={{ cursor: 'pointer' }} />
        </button>
        <span className="position-absolute top-0 start-0 p-1">
          
        </span>
        <span className="position-absolute top-0 end-0 p-1">
          <span className={`badge text-white fs-13 ${isVacant ? 'bg-danger' : 'bg-success'}`}>
            {status}
          </span>
        </span>
      </div>
      <CardBody>
        <div className="d-flex align-items-center gap-2">
          <div className="avatar bg-light rounded flex-centered">
            <IconifyIcon icon={icon} width={24} height={24} className="fs-24 text-primary" />
          </div>
          <div>
            <Link to="" className="text-dark fw-medium fs-16">
              {name}
            </Link>
            <p className="text-muted mb-0">{location}</p>
          </div>
        </div>
        <Row className="mt-2 g-2">
  <Col lg={3} xs={3}>
    <span
      className="badge bg-light-subtle text-muted border fs-12
      d-flex align-items-center gap-1 w-100"
      style={{ padding: '8px 6px' }}
    >
      <IconifyIcon
        icon="solar:bed-broken"
        className="fs-14 flex-shrink-0"
      />
      <span className="text-nowrap">{beds} Bed</span>
    </span>
  </Col>
  <Col lg={3} xs={3}>
    <span
      className="badge bg-light-subtle text-muted border fs-12
      d-flex align-items-center gap-1 w-100"
      style={{ padding: '8px 6px' }}
    >
      <IconifyIcon
        icon="solar:bath-broken"
        className="fs-14 flex-shrink-0"
      />
      <span className="text-nowrap">{bath} Bath</span>
    </span>
  </Col>
  <Col lg={3} xs={3}>
    <span
      className="badge bg-light-subtle text-muted border fs-12
      d-flex align-items-center gap-1 w-100"
      style={{ padding: '8px 6px' }}
    >
      <IconifyIcon
        icon="solar:scale-broken"
        className="fs-14 flex-shrink-0"
      />
      <span className="text-nowrap">{ft} ft</span>
    </span>
  </Col>
  <Col lg={3} xs={3}>
    <span
      className="badge bg-light-subtle text-muted border fs-12
      d-flex align-items-center gap-1 w-100"
      style={{ padding: '8px 6px' }}
    >
      <IconifyIcon
        icon="solar:double-alt-arrow-up-broken"
        className="fs-14 flex-shrink-0"
      />
      <span className="text-nowrap">{flor} Floor</span>
    </span>
  </Col>
</Row>
<br></br>
<p>
  Landlord : Ali Shaikh | Tenant Assigned : Zara Hamilton

</p>
      </CardBody>
      <CardFooter className="bg-light-subtle d-flex justify-content-between align-items-center border-top">
        {type == '' ? <p className="fw-medium text-muted text-decoration-line-through fs-16 mb-0">{}.00 </p> : <p className="fw-medium text-dark fs-16 mb-0">OMR {price}.00 </p>}
        <div>
          <Link to="" className="link-primary fw-medium">
            More Inquiry <IconifyIcon icon="ri:arrow-right-line" className="align-middle" />
          </Link>
        </div>
      </CardFooter>
    </Card>;
};
const ListingGrid = () => {
  const propertiesData = useFetchData(getAllProperty);
  return <Col xl={9} lg={12}>
      <Row>
        {propertiesData?.map((item, idx) => <Col lg={4} md={6} key={idx}>
            <PropertiesCard {...item} status={item.status ?? propertyStatuses[idx % propertyStatuses.length]} />
          </Col>)}
      </Row>
      <div className="p-3 border-top">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end mb-0">
            <li className="page-item">
              <Link className="page-link" to="">
                Previous
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Col>;
};
export default ListingGrid;
