import ChoicesFormInput from '@/components/from/ChoicesFormInput';
import TextFormInput from '@/components/from/TextFormInput';
import TextAreaFormInput from '@/components/from/TextAreaFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardBody, Col, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';
import  './PropertyAdd.css';

const schema = yup.object({});

const propertyTypeOptions = [
  { value: 'flat', label: 'Flat / Apartment', fieldValue: 'Flat', sectionTitle: 'Basic Property Details' },
  { value: 'villa', label: 'Villa/Banglow', fieldValue: 'Villa', sectionTitle: 'Basic Villa Details' },
  { value: 'commercial', label: 'Commercial', fieldValue: 'Commercial', sectionTitle: 'Basic Commercial Details' },
  { value: 'warehouse', label: 'Warehouse', fieldValue: 'Warehouse', sectionTitle: 'Basic Warehouse Details' },
];

const fieldBg = '#F9F9FC';

const ReadOnlyField = ({ label, value }) => (
  <div>
    <label className="form-label">{label}</label>
    <input
      className="form-control"
      readOnly
      style={{ backgroundColor: fieldBg, fontStyle: 'italic' }}
      value={value}
    />
  </div>
);

const PropertyAdd = () => {
  const [propertyType , setPropertyType] = useState('flat')
  const [selectedCountry, setSelectedCountry] = useState({ code: 'OM', name: 'Oman' });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
   const countries = [
    { code: 'GB', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'US', name: 'U.S.A' },
    { code: 'DK', name: 'Denmark' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'IN', name: 'India' },
    { code: 'OM', name: 'Oman' },
    { code: 'ES', name: 'Spain' },
    { code: 'AE', name: 'United Arab Emirates' }
  ];
  
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {}
  });

  const selectedPropertyType = propertyTypeOptions.find((option) => option.value === propertyType) ?? propertyTypeOptions[0];
  const cyclePropertyType = () => {
    const currentIndex = propertyTypeOptions.findIndex((option) => option.value === propertyType);
    const nextIndex = (currentIndex + 1) % propertyTypeOptions.length;
    setPropertyType(propertyTypeOptions[nextIndex].value);
  };
  return (
    <form className="property-add-form" onSubmit={handleSubmit(() => {})}>

      <Card className="mb-4 property-add-card">
        <CardBody className="p-0">
          <div
            className="property-add-header d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3"
          >
            <h3 className="property-add-title mb-0">
              Add New Property
            </h3>
            <div className="d-flex align-items-center gap-3">
              <span className="property-type-label">Select Property Type:</span>
              <button
                type="button"
                onClick={cyclePropertyType}
                className="property-type-toggle d-flex align-items-center justify-content-between"
              >
                <span>{selectedPropertyType.label}</span>
                <span className="property-type-toggle-arrow" />
              </button>
            </div>
          </div>

          <div className="property-add-card-body">
          <h4 className="fw-semibold">
            {selectedPropertyType.sectionTitle}
          </h4>
          <hr />
          <Row className="g-3">
            {propertyType === 'flat' && 
            <>
            <Col lg={4}><ReadOnlyField label="Property Type" value={selectedPropertyType.fieldValue} /></Col>
            <Col lg={4}><TextFormInput control={control}style ={{ backgroundColor: '#F9F9FC' }} name="property_code" label="Property Code / ID" placeholder="Auto-Generated" /></Col>
            <Col lg={4}>
              <label className="form-label">Building Name</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Select Building</option>
              </ChoicesFormInput>
            </Col>
            
<Col lg={4}>
  <TextFormInput 
    control={control} 
    name="building_block" 
    label="Building Block" 
    style={{ backgroundColor: '#F9F9FC' }}
  />
</Col>
<Col lg={4}>
  <TextFormInput 
    control={control} 
    name="floor_number" 
    label="Floor Number" 
    style={{ backgroundColor: '#F9F9FC' }}
  />
</Col>
            <Col lg={4}>
  <TextFormInput 
    control={control} 
    name="flat_no" 
    label="Flat No / Name" 
    style={{ backgroundColor: '#F9F9FC' }}
  />
</Col>
           <Col lg={4}>
  <TextFormInput 
    control={control} 
    name="total_floors" 
    label="Total Floors (Bldg)" 
    style={{ backgroundColor: '#F9F9FC' }}
  />
</Col>
</>}

            {propertyType === 'villa' && 
            <>
            <Col lg={4}><ReadOnlyField label="Property Type" value={selectedPropertyType.fieldValue} /></Col>
            <Col lg={4} ><TextFormInput control={control} name="property_code" label="Property Code / ID" placeholder="Auto-Generated" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}>
              <label className="form-label">Villa Name / Number</label>
              <ChoicesFormInput className="form-control" >
                <option>Villa Name / Number</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="building_block" label="Project / Society Name" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="floor_number" label="Unit Number (Gated)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="flat_no" label="Total Floors" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="total_floors" label="Year of Construction" style={{ backgroundColor: '#F9F9FC' }}/></Col></>}

            {propertyType === 'commercial' && 
            <>
            <Col lg={4}><ReadOnlyField label="Property Type" value={selectedPropertyType.fieldValue} /></Col>
            <Col lg={4}><TextFormInput control={control} name="property_code" label="Property Code / ID" placeholder="Auto-Generated"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}>
              <label className="form-label">Commercial Category</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Shop</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="building_block" label="Building / Complex Name" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="floor_number" label="Unit / Shop / Office No." style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="flat_no" label="Floor Number"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}><TextFormInput control={control} name="flat_no" label="Total Floors" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="total_floors" label="Year of Construction" style={{ backgroundColor: '#F9F9FC' }}/></Col></>}

              {propertyType === 'warehouse' && 
            <>
            <Col lg={4}><ReadOnlyField label="Property Type" value={selectedPropertyType.fieldValue} /></Col>
            <Col lg={4}><TextFormInput control={control} name="property_code" label="Property Code / ID" placeholder="Auto-Generated"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}>
              <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Warehouse Category</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Shop</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="building_block" label="Warehouse Name / Code" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="floor_number" label="Indusrial Estate / MIDC" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="flat_no" label="Plot / Shed Number" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="total_floors" label="Year of Construction" style={{ backgroundColor: '#F9F9FC' }}/></Col></>}
              
          </Row>
          </div>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">
            {propertyType === 'flat' ? 'Flat Configuration' : 
            propertyType === 'villa' ? 'Villa Configuration' : 
            propertyType === 'commercial' ? 'Area & Layout Details' : 
            'Area & Structural Details'}
          </h4>
          <hr />
          <Row className="g-3">
            {propertyType === 'flat' && 
            <>
          <>
  <Col lg={4}>
    <label className="form-label">BHK Configuration</label>

    <ChoicesFormInput className="form-control">
      <option>Studio</option>
      <option>1 BHK</option>
      <option>2 BHK</option>
      <option>3 BHK</option>
    </ChoicesFormInput>
  </Col>
</>

            <Col lg={4}><TextFormInput control={control} name="carpet_area" label="Carpet Area (Sq.Ft)"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Built-up Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}>
              <label className="form-label">Balcony</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Bathrooms" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}>
              <label className="form-label">Kitchen Type</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Open</option>
                <option>Closed</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">Store Room</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">Facing</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
              </ChoicesFormInput>
            </Col></>}


            {propertyType === 'villa' && 
            <>
            <Col lg={4} >
              <label className="form-label">Villa Type</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option style ={{ backgroundColor: '#F9F9FC' }}>Independent</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">BHK Configuration</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Independent</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
              </ChoicesFormInput>
            </Col>
             <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Carpet Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Built-up Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Plot Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Bedrooms"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Bathrooms"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Living Rooms Count"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}>
              <label className="form-label">Kitchen Type</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Open</option>
                <option>Closed</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}>
              <label className="form-label">Store Room</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>

            <Col lg={4}>
              <label className="form-label">Servant Room</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>

            <Col lg={4}>
              <label className="form-label">Balcony / Sit-out</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>

            <Col lg={4}>
              <label className="form-label">Facing</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
              </ChoicesFormInput>
            </Col></>}


            {propertyType === 'commercial' && 
            <>
            
             <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Carpet Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Built-up Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Super Built-up (Optional)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Frontage Width (Feet)"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Ceiling Height (Feet)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Cabins"style={{ backgroundColor: '#F9F9FC' }} /></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Washrooms"style={{ backgroundColor: '#F9F9FC' }} /></Col>

            <Col lg={4}>
              <label className="form-label">Pantry</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>

            <Col lg={4}>
              <label className="form-label">Store Room</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>

            <Col lg={4}>
              <label className="form-label">Loading Area</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
            </>}

             {propertyType === 'warehouse' && 
            <>
             <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Plot Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
              <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Built-up Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
             <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Carpet Area (Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="builtup_area" label="Clear Height(Feet)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Bays" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="No. of Loading docks" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Dock Height (Feet)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Floor Load (MT / Sq.Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Column Spacing (Feet)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
    
            <Col lg={4}>
              <label className="form-label">Mezzanine Floor</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Yes</option>
                <option>No</option>
              </ChoicesFormInput>
            </Col>
           <Col lg={4}><TextFormInput control={control} name="bathrooms" label="Office Space Area" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            </>}

            
          </Row>
        </CardBody>
      </Card>

      {propertyType === 'villa' && (
        <Card className="mb-4">
          <CardBody>
            <h4 className="fw-semibold">Outdoor & Exclusive Features</h4>
            <hr />
            <Row className="g-3">
              {[
                'Private Garden /  Lawn','Private Parking','Swiming Pool','Terrace / Rooftop Access','Boundry Wall',
                'Driveway'
              ].map(item => (
                <Col lg={3} key={item}>
                  <Form.Check type="checkbox" label={item} />
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      )}

      {propertyType === 'commercial' && (
        <Card className="mb-4">
          <CardBody>
            <h4 className="fw-semibold">Commercial Infrastructure</h4>
            <hr />
            <Row className="g-3">
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Pwer Load (KW) " style ={{ backgroundColor: '#F9F9FC' }}/></Col>
              <Col lg={4}>
                <label className="form-label">DG / Power Backup</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Lift Type</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Passanger</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>
              <Col lg={4}><TextFormInput control={control} name="security_deposit" label="Fire Safety Compliance"style={{ backgroundColor: '#F9F9FC' }}/></Col>
              <Col lg={4}>
                <label className="form-label">Emergency Exit</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Parking Availability</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Open</option>
                  <option>Close</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">CCTV / Security</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}

      {propertyType === 'warehouse' && (
        <Card className="mb-4">
          <CardBody>
            <h4 className="fw-semibold">Infrastructure & Utilities</h4>
            <hr />
            <Row className="g-3">
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Power Supply (KW)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            
              <Col lg={4}>
                <label className="form-label">Transformer Available </label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">DG Set / Backup</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Water Supply Source</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Borewell</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Drainage System</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Internet / Fiber</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}

      {propertyType === 'warehouse' && (
        <Card className="mb-4">
          <CardBody>
            <h4 className="fw-semibold">Logistics & Vehicle Access</h4>
            <hr />
            <Row className="g-3">
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Entry Gate Width(Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Road Width(Ft)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Truck Parking Capacity" style={{ backgroundColor: '#F9F9FC' }}/></Col>    
              <Col lg={4}>
                <label className="form-label">Container Access</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>20ft</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Turning Radius</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Adequate</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label className="form-label">Weighbridge Nearby</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Yes</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}

      
                        
{propertyType === 'flat' && (
  <Card className="mb-4">
    <CardBody>
      <h4 className="fw-semibold">Rental & Financial Details</h4>
      <hr />
      <Row className="g-3">
        <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Monthly Rent" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="security_deposit" label="Security Deposit" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="maintenance" label="Maintenance (Monthly)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}>
          <label className="form-label">Electricity Type</label>
          <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}>
          <label className="form-label">Water Type</label>
          <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Other Charges" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}>
          <label className="form-label">Late Fee (% / Amt)</label>
          <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
            <option>Yes</option>
            <option>No</option>
          </ChoicesFormInput>
        </Col>
      </Row>
    </CardBody>
  </Card>
)}


{propertyType === 'villa' && (
  <Card className="mb-4">
    <CardBody>
      <h4 className="fw-semibold">Rental & Financial Details</h4>
      <hr />
      <Row className="g-3">
        <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Monthly Rent" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="security_deposit" label="Security Deposit" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="maintenance" label="Maintenance (Monthly)" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}>
          <label className="form-label">Electricity Charges</label>
          <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}>
          <label className="form-label">Water Charges</label>
          <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Gardening Charges" style={{ backgroundColor: '#F9F9FC' }} /></Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Other Charges" style={{ backgroundColor: '#F9F9FC' }} /></Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Late Fee Rule" style={{ backgroundColor: '#F9F9FC' }}/></Col>
      </Row>
    </CardBody>
  </Card>
)}


{propertyType === 'commercial' && (
  <Card className="mb-4">
    <CardBody>
      <h4 className="fw-semibold">Rental & Financial Details</h4>
      <hr />
      <Row className="g-3">
        <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Monthly Rent" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="security_deposit" label="Security Deposit" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="maintenance" label="Maintenance Charges" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}>
          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>GST Applicable</label>
          <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
            <option>Yes</option>
            <option>No</option>
          </ChoicesFormInput>
        </Col>
        <Col lg={4}><TextFormInput control={control} name="maintenance" label="GST %" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}>
          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Electricity Charges</label>
          <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}>
          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Water Charges</label>
          <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Other Charges" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Late Fee Rule" style={{ backgroundColor: '#F9F9FC' }}/></Col>
      </Row>
    </CardBody>
  </Card>
)}

{propertyType === 'warehouse' && (
  <Card className="mb-4">
    <CardBody>
      <h4 className="fw-semibold">Rental & Financial Terms</h4>
      <hr />
      <Row className="g-3">
        <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Monthly Rent" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="security_deposit" label="Security Deposit" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="maintenance" label="Maintenance Charges" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}>
          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Electricity Charges</label>
          <ChoicesFormInput className="form-control"><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}>
          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Water Charges</label>
          <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}><option>Meter</option></ChoicesFormInput>
        </Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="CAM Charges" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Other Charges" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Rent Escalation %/Year" style={{ backgroundColor: '#F9F9FC' }}/></Col>
        <Col lg={4}><TextFormInput control={control} name="other_charges" label="Lock-in Period" style={{ backgroundColor: '#F9F9FC' }}/></Col>
      </Row>
    </CardBody>
  </Card>
)}

     { propertyType === 'warehouse' && (   <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Tenant & Usage Preference</h4>
          <hr />
          <label className="form-label">Landlord Name</label>
          <ChoicesFormInput className="form-control mb-3"style ={{ backgroundColor: '#F9F9FC' }}>
            <option>Select From Master</option>
          </ChoicesFormInput>

          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Allowed Industry Type</label>
          <Row className="g-3">
            {['FMCG','Pharma','Ecommerce','Manufacturing','Logistics'].map(t => (
              <Col lg={3} key={t}>
                <Form.Check label={t} />
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>)}

      
          {propertyType === 'warehouse' && ( <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Availability & Status</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}>
              <label className="form-label">Status</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Vacant</option>
                <option>Occupied</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="available_from" label="Available From" placeholder="dd-mm-yyyy" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="current_tenant" label="Current Tenant" style={{ backgroundColor: '#F9F9FC' }}/></Col>
          </Row>
        </CardBody>
      </Card>)}


      {propertyType === 'villa' && (
        <Card className="mb-4">
          <CardBody>
            <h4 className="fw-semibold">Facilities (Villa)</h4>
            <hr />
            <Row className="g-3">
              {[
                '24x7 Water Supply',
                'Power Backup',
                'Security / Guard',
                'CCTV',
                'Clubhouse Access',
                'Gym',
                'Children’s Play Area',
                'Internal Roads',
                'Street Lights',
                'Gated Community'
              ].map(item => (
                <Col lg={3} key={item}>
                  <Form.Check type="checkbox" label={item} />
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      )}

        { propertyType === 'villa' && (   <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Tenant Preference</h4>
          <hr />
          <label className="form-label">Rental Purpose</label>
          <ChoicesFormInput className="form-control mb-3" style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F9F9FC' }}>
            <option>Residential</option>
            <option>Commercial</option>
          </ChoicesFormInput>

          <label className="form-label">Tenant Type Allowed</label>
          <Row className="g-3">
            {['Bachelor','Family','Company Staff','Labour'].map(t => (
              <Col lg={3} key={t}>
                <Form.Check label={t} />
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>)}

      {propertyType === 'commercial' && (
        <Card className="mb-4">
          <CardBody>
            <h4 className="fw-semibold">Business & Tenant Preference</h4>
            <hr />
            <Row className="g-3">
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Landlord Name"style={{ backgroundColor: '#F9F9FC' }} /></Col>
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Allowed Business Type" style={{ backgroundColor: '#F9F9FC' }}/></Col>
              <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Prohibited Business" style={{ backgroundColor: '#F9F9FC' }}/></Col>    
              <Col lg={4}>
                <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Lease Type</label>
                <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                  <option>Company Lease</option>
                  <option>No</option>
                </ChoicesFormInput>
              </Col>

           <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Lease Tenure Year" style ={{ backgroundColor: '#F9F9FC' }}/></Col>    
           <Col lg={4}><TextFormInput control={control} name="monthly_rent" label="Lock-in Period" style ={{ backgroundColor: '#F9F9FC' }}/></Col>    

            </Row>
          </CardBody>
        </Card>
      )}

          {propertyType === 'commercial' && ( <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Availability & Status</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}>
              <label className="form-label">Status</label>
              <ChoicesFormInput className="form-control">
                <option>Vacant</option>
                <option>Occupied</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="available_from" label="Available From" placeholder="dd-mm-yyyy" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="current_tenant" label="Current Tenant" style={{ backgroundColor: '#F9F9FC' }}/></Col>
          </Row>
        </CardBody>
      </Card>)}
   {(propertyType === 'flat' || propertyType === 'villa') && (  
     <Card className="mb-2">
        <CardBody>
          <h4 className="fw-semibold">Ownership</h4>
          <hr />
           <Row>
          <Col lg={4} md={6}>

          <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Landlord Name</label>
          <ChoicesFormInput className="form-control mb-2"style ={{ backgroundColor: '#F9F9FC' }}>
            <option>Landlord Master</option>
          
          </ChoicesFormInput>
         </Col></Row>
          
        </CardBody>
      </Card>)}

      {propertyType === 'villa' && ( <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Availability & Status</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}>
              <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Status</label>
              <ChoicesFormInput className="form-control"style ={{ backgroundColor: '#F9F9FC' }}>
                <option>Vacant</option>
                <option>Occupied</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="available_from" label="Available From" placeholder="dd-mm-yyyy" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="current_tenant" label="Current Tenant" style={{ backgroundColor: '#F9F9FC' }}/></Col>
          </Row>
        </CardBody>
      </Card>)}

   { propertyType === 'flat' && (
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Facilities & Amenities</h4>
          <hr />
          <Row className="g-3">
            {[
              'Parking','Lift','Power Backup','Security','CCTV',
              'Gas Pipeline','Water Supply','Intercom','Fire Safety'
            ].map(item => (
              <Col lg={3} key={item}>
                <Form.Check type="checkbox" label={item} />
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>)}

    {propertyType === 'flat' && (
  <Card className="mb-3">
    <CardBody>

      <h4 className="fw-semibold mb-3">Tenant Preference</h4>
      <hr className="mb-4" />

      <Row className="mb-4">
        <Col lg={4} md={6}>
          <label className="form-label mb-2">Rental Purpose</label>

          <ChoicesFormInput
            className="form-control"
            style={{ backgroundColor: '#F9F9FC' }}
          >
            <option>Residential</option>
            <option>Commercial</option>
          </ChoicesFormInput>
        </Col>
      </Row>

      <label className="form-label mb-3">Tenant Type Allowed</label>

      <div
        className="p-3 rounded"
        style={{
          backgroundColor: '#F9F9FC',
          border: '1px solid #e6e8ee'
        }}
      >
        <Row className="gx-4 gy-3">
          {['Bachelor', 'Family', 'Company Staff', 'Labour'].map(t => (
            <Col lg={3} md={6} key={t}>
              <Form.Check
                type="checkbox"
                label={t}
                className="fw-medium"
              />
            </Col>
          ))}
        </Row>
      </div>

    </CardBody>
  </Card>
)}




     {propertyType === 'flat' && ( 
      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Availability & Status</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}>
              <label className="form-label"style ={{ backgroundColor: '#F9F9FC' }}>Status</label>
              <ChoicesFormInput className="form-control">
                <option>Vacant</option>
                <option>Occupied</option>
              </ChoicesFormInput>
            </Col>
            <Col lg={4}><TextFormInput control={control} name="available_from" label="Available From" placeholder="dd-mm-yyyy" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="current_tenant" label="Current Tenant" style={{ backgroundColor: '#F9F9FC' }}/></Col>
          </Row>
        </CardBody>
      </Card>)}

      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Location Details</h4>
          <hr />
         <div className="mb-3">
  <TextFormInput
  style ={{ backgroundColor: '#F9F9FC' }}
    control={control}
    name="address1"
    label="Address Line 1"
  />
</div>

<TextFormInput
style ={{ backgroundColor: '#F9F9FC' }}
  control={control}
  name="address2"
  label="Address Line 2"
/>

          <Row className="g-3 mt-1">
            <Col lg={4}><TextFormInput control={control} name="area" label="Area / Locality" style ={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="city" label="City" style ={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="state" label="State"style ={{ backgroundColor: '#F9F9FC' }} /></Col>
 <Col lg={4}>
  <div className="mb-3">
    <label htmlFor="choices-country" className="form-label">
      Country
    </label>

    <div className="custom-country-dropdown" >
      <div 
        className="country-select-box"style ={{ backgroundColor: '#F9F9FC' }}
        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
      >
        <div style={{ backgroundColor: '#F9F9FC',display: 'flex', alignItems: 'center', gap: '10px',  }}>
          <img 
            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
            alt={selectedCountry.name}
            className="country-flag"
          />
          <span className="country-name">{selectedCountry.name}</span>
        </div>
        <span className="dropdown-arrow">▼</span>
      </div>
      
      {showCountryDropdown && (
        <div className="country-dropdown-list">
          {countries.map((country) => (
            <div
              key={country.code}
              className="country-dropdown-item"
              onClick={() => {
                setSelectedCountry(country);
                setShowCountryDropdown(false);
              }}
            >
              <img 
                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                alt={country.name}
                className="country-flag"
              />
              <span className="country-name">{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</Col>             
            <Col lg={4}><TextFormInput control={control} name="po_box" label="PO BOX" style ={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="map_url" label="Google Map URL"style ={{ backgroundColor: '#F9F9FC' }}/></Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">Internal Tracking</h4>
          <hr />
          <TextAreaFormInput control={control} name="internal_notes" label="Internal Notes" style={{ backgroundColor: '#F9F9FC' }}/>
          <TextFormInput control={control} name="created_by" label="Created By"style={{ backgroundColor: '#F9F9FC' }} />
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <h4 className="fw-semibold">System Fields (Auto)</h4>
          <hr />
          <Row className="g-3">
            <Col lg={4}><TextFormInput control={control} name="created_time" label="Created Time" placeholder="Time Stamp" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="updated_by" label="Last Updated By" style={{ backgroundColor: '#F9F9FC' }}/></Col>
            <Col lg={4}><TextFormInput control={control} name="updated_time" label="Last Updated Time" style={{ backgroundColor: '#F9F9FC' }}/></Col>
          </Row>
        </CardBody>
      </Card>

      <div className="mb-3 rounded">
        <Row className="justify-content-end g-2">
          <Col lg={2}>
            <Button variant="outline-primary" type="submit" className="w-100">
              Cancel
            </Button>
          </Col>
          <Col lg={2}>
            <Button 
  variant="primary" 
  className="w-100"
  style={{ backgroundColor: '#5D7186', borderColor: '#5D7186' }}
>
  Add Property
</Button>
          </Col>
        </Row>
      </div>

    </form>
  );
};

export default PropertyAdd;
