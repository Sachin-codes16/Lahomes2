import properties11 from '@/assets/images/properties/p-11.jpg';
import properties12 from '@/assets/images/properties/p-2.jpg';
import properties13 from '@/assets/images/properties/p-3.jpg';
import properties14 from '@/assets/images/properties/p-4.jpg';
import api from '@/helpers/api';
import { useEffect, useMemo, useState } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useLocation, useSearchParams } from 'react-router-dom';

const requestedColumns = [
  'propertyId',
  'property_id',
  'id',
  'propertyType',
  'property_type',
  'buildingDetails',
  'buildingdetails',
  'block',
  'floor',
  'flatNumber',
  'flat_number',
  'dimensionAreaSqft',
  'rentalType',
  'rentalFor',
  'advanceAmountRent',
  'expectedRent',
  'securityDeposit',
  'maintenance',
  'electricity',
  'bathrooms',
  'bedrooms',
  'facing',
  'status',
  'availableFrom',
  'address',
  'city',
  'state',
  'poBox',
  'landlordName',
  'tenantType',
  'petsAllowed',
  'createdBy',
  'createdOn',
  'updatedOn',
  'image',
  'photo',
  'property_image',
  'thumbnail',
  'cover_image'
].join(',');

const fallbackImages = [properties11, properties12, properties13, properties14];

const getPropertyFromResponse = responseData => {
  if (responseData?.data && !Array.isArray(responseData.data)) return responseData.data;
  if (Array.isArray(responseData?.data)) return responseData.data[0] || {};
  if (Array.isArray(responseData?.results)) return responseData.results[0] || {};
  if (responseData?.property) return responseData.property;
  return responseData || {};
};

const getFirstValue = (item, keys, fallback = '---') => {
  for (const key of keys) {
    const value = item?.[key];
    if (value !== undefined && value !== null && value !== '') return value;
  }

  return fallback;
};

const formatDisplayValue = value => {
  if (value === undefined || value === null || value === '') return '---';

  if (Array.isArray(value)) {
    return value.map(formatDisplayValue).filter(item => item && item !== '---').join(', ') || '---';
  }

  if (typeof value === 'object') {
    return value.name || value.fullName || value.email || value.phoneNumber || value.phone || JSON.stringify(value);
  }

  return value;
};

const formatMoney = value => {
  if (value === undefined || value === null || value === '') return '---';
  if (typeof value === 'object') return formatDisplayValue(value);

  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) return `OMR ${value}`;
  return `OMR ${numericValue.toLocaleString('en-US')}`;
};

const getApiErrorMessage = err => {
  const data = err?.response?.data;

  if (typeof data === 'string') {
    if (data.includes('AnonymousUser')) return 'Authentication token missing or invalid. Please set a valid token in localStorage.';
    if (data.includes('<!DOCTYPE html>')) return 'Server error while loading property details. Please check the API response in Network tab.';
    return data;
  }

  return data?.message || data?.detail || data?.error || err?.message || 'Unable to load property details.';
};

const normalizeImage = image => {
  if (!image || ['string', 'n/a', 'na', 'null', 'undefined'].includes(String(image).trim().toLowerCase())) return '';
  if (typeof image === 'string' && image.startsWith('/')) return `https://essdemo.alwijha.net${image}`;
  if (typeof image === 'string' && !image.startsWith('http')) return `https://essdemo.alwijha.net/${image.replace(/^\/+/, '')}`;
  return image;
};

const getPropertyImages = property => {
  const images = [
    property?.image,
    property?.photo,
    property?.property_image,
    property?.propertyImage,
    property?.thumbnail,
    property?.cover_image
  ].map(normalizeImage).filter(Boolean);

  return images.length ? images.slice(0, 4) : fallbackImages;
};

const InfoItem = ({ label, value }) => (
  <Col lg={2} md={4} sm={6}>
    <div style={{ marginBottom: '1.5rem' }}>
      <p style={{
        fontSize: '1rem',
        fontWeight: 500,
        color: 'black',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {label}
      </p>
      <p style={{
        fontSize: '0.938rem',
        fontWeight: 600,
        color: '#000',
        margin: 0,
        lineHeight: 1.5
      }}>
        {formatDisplayValue(value)}
      </p>
    </div>
  </Col>
);

const SectionCard = ({ title, children }) => (
  <Card style={{
    borderRadius: '0.5rem',
    border: '1px solid #dee2e6',
    marginBottom: '1.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    backgroundColor: 'white',
    marginLeft: '0rem',
    marginRight: '0rem'
  }}>
    <CardBody style={{ padding: '2rem 2.5rem' }}>
      <h4 style={{
        fontSize: '1.2rem',
        fontWeight: 600,
        marginBottom: '1.5rem',
        color: '#000'
      }}>
        {title}
      </h4>
      <div style={{ borderTop: '1px solid #dee2e6', paddingTop: '1.75rem' }}>
        {children}
      </div>
    </CardBody>
  </Card>
);

const PropertyDetails = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const propertyId = searchParams.get('property_id') || searchParams.get('id') || location.state?.propertyId || 72;

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await api.get('/property/get/', {
          params: {
            property_id: propertyId,
            value: requestedColumns
          }
        });

        setProperty(getPropertyFromResponse(response.data));
      } catch (err) {
        setError(getApiErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const details = useMemo(() => {
    const building = getFirstValue(property, ['buildingDetails', 'buildingdetails', 'name', 'title', 'property_name'], 'Property Details');
    const block = getFirstValue(property, ['block', 'location'], '');
    const address = getFirstValue(property, ['address', 'propertyAddress', 'property_location'], block || '---');

    return {
      images: getPropertyImages(property),
      title: block ? `${building} - ${block}` : building,
      address,
      monthlyRent: formatMoney(getFirstValue(property, ['expectedRent', 'expected_rent', 'monthly_rent', 'rent', 'price'], '')),
      propertyType: getFirstValue(property, ['propertyType', 'property_type', 'type', 'rentalType']),
      propertyCode: getFirstValue(property, ['propertyId', 'property_id', 'id'], propertyId),
      project: getFirstValue(property, ['buildingDetails', 'buildingdetails', 'project', 'society']),
      flatNumber: getFirstValue(property, ['flatNumber', 'flat_number', 'villaName', 'villa_no']),
      floor: getFirstValue(property, ['floor', 'totalFloors', 'floors']),
      bedrooms: getFirstValue(property, ['bedrooms', 'bedroom', 'bhk', 'flatNumber']),
      area: getFirstValue(property, ['dimensionAreaSqft', 'dimension_area_sqft', 'area', 'sqft']),
      bathrooms: getFirstValue(property, ['bathrooms', 'bathroom']),
      facing: getFirstValue(property, ['facing']),
      securityDeposit: formatMoney(getFirstValue(property, ['securityDeposit', 'security_deposit', 'advanceAmountRent'], '')),
      maintenance: formatMoney(getFirstValue(property, ['maintenance', 'maintenanceAmount'], '')),
      electricity: getFirstValue(property, ['electricity', 'electricityCharges']),
      landlordName: getFirstValue(property, ['landlordName', 'landlord_name', 'ownerName', 'owner_name']),
      rentalFor: getFirstValue(property, ['rentalFor', 'rental_for']),
      tenantType: getFirstValue(property, ['tenantType', 'tenant_type']),
      petsAllowed: getFirstValue(property, ['petsAllowed', 'pets_allowed']),
      status: getFirstValue(property, ['status', 'property_status']),
      availableFrom: getFirstValue(property, ['availableFrom', 'available_from']),
      currentTenant: getFirstValue(property, ['currentTenant', 'current_tenant']),
      city: getFirstValue(property, ['city']),
      state: getFirstValue(property, ['state']),
      poBox: getFirstValue(property, ['poBox', 'po_box', 'pobox']),
      createdBy: getFirstValue(property, ['createdBy', 'created_by']),
      createdOn: getFirstValue(property, ['createdOn', 'created_on', 'createdAt']),
      updatedOn: getFirstValue(property, ['updatedOn', 'updated_on', 'updatedAt'])
    };
  }, [property, propertyId]);

  return (
    <div style={{ backgroundColor: '#F9F9FC', minHeight: '100vh', padding: '' }}>
      {loading && <div className="text-center py-5">Loading property details...</div>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}

      {!loading && !error && (
        <>
          <Row className="g-0">
            <Col xl={12} lg={6}>
              <Card>
                <CardBody>
                  <div className="position-relative">
                    <div className="row g-2">
                      {details.images.map((image, idx) => (
                        <div className="col-6" key={`${image}-${idx}`}>
                          <img
                            src={image}
                            alt={`property ${idx + 1}`}
                            className="img-fluid rounded w-100"
                            style={{ height: '250px', objectFit: 'cover' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0', marginTop: '0rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1.5rem',
              paddingLeft: '0rem',
              paddingRight: '1rem',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 550, marginBottom: '0.25rem', color: '#000' }}>
                  {details.title}
                </h2>
                <p style={{ margin: 0, color: 'black', fontSize: '1rem', fontWeight: 400 }}>
                  {details.address}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 550, marginBottom: '0.25rem', color: '#000' }}>
                  {details.monthlyRent}
                </h2>
                <p style={{ margin: 0, color: 'black', fontSize: '1rem', fontWeight: 400 }}>
                  per month + maintenance
                </p>
              </div>
            </div>

            <SectionCard title="Basic Property Information">
              <Row>
                <InfoItem label="Property Type" value={details.propertyType} />
                <InfoItem label="Property Code" value={details.propertyCode} />
                <InfoItem label="Project/Society" value={details.project} />
                <InfoItem label="Flat/Villa No" value={details.flatNumber} />
                <InfoItem label="Floor" value={details.floor} />
                <InfoItem label="Block" value={getFirstValue(property, ['block'])} />
              </Row>
            </SectionCard>

            <SectionCard title="Configuration & Area">
              <Row>
                <InfoItem label="BHK" value={details.bedrooms} />
                <InfoItem label="Area" value={details.area === '---' ? details.area : `${details.area} sq.ft`} />
                <InfoItem label="Bathrooms" value={details.bathrooms} />
                <InfoItem label="Facing" value={details.facing} />
                <InfoItem label="Rental Type" value={details.propertyType} />
                <InfoItem label="Rental For" value={details.rentalFor} />
              </Row>
            </SectionCard>

            <SectionCard title="Rental & Financial Details">
              <Row>
                <InfoItem label="Monthly Rent" value={details.monthlyRent} />
                <InfoItem label="Security Deposit" value={details.securityDeposit} />
                <InfoItem label="Maintenance" value={details.maintenance} />
                <InfoItem label="Electricity" value={details.electricity} />
                <InfoItem label="Advance Rent" value={formatMoney(getFirstValue(property, ['advanceAmountRent', 'advance_amount_rent'], ''))} />
              </Row>
            </SectionCard>

            <SectionCard title="Ownership">
              <Row>
                <InfoItem label="Landlord Name" value={details.landlordName} />
              </Row>
            </SectionCard>

            <SectionCard title="Tenant Preference">
              <Row>
                <InfoItem label="Rental Purpose" value={details.rentalFor} />
                <InfoItem label="Tenant Type" value={details.tenantType} />
                <InfoItem label="Pets Allowed" value={details.petsAllowed} />
              </Row>
            </SectionCard>

            <SectionCard title="Availability & Status">
              <Row>
                <InfoItem label="Status" value={details.status} />
                <InfoItem label="Available From" value={details.availableFrom} />
                <InfoItem label="Current Tenant" value={details.currentTenant} />
              </Row>
            </SectionCard>

            <SectionCard title="Residential Address">
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'black',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Address
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: '#000', margin: 0 }}>
                  {details.address}
                </p>
              </div>
              <Row>
                <InfoItem label="City" value={details.city} />
                <InfoItem label="State" value={details.state} />
                <InfoItem label="PO Box" value={details.poBox} />
              </Row>
            </SectionCard>

            <SectionCard title="System Information">
              <Row>
                <InfoItem label="Created By" value={details.createdBy} />
                <InfoItem label="Created On" value={details.createdOn} />
                <InfoItem label="Last Updated" value={details.updatedOn} />
              </Row>
            </SectionCard>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyDetails;
