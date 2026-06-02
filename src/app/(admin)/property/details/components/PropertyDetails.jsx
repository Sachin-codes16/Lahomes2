/* eslint-disable no-unused-vars */
import properties11 from '@/assets/images/properties/p-11.jpg';
import properties12 from '@/assets/images/properties/p-2.jpg';
import properties13 from '@/assets/images/properties/p-3.jpg';
import properties14 from '@/assets/images/properties/p-4.jpg';
import properties15 from '@/assets/images/properties/p-5.jpg';  // ✅ YE ADD KARO
import avatar from '@/assets/images/users/avatar-1.jpg';  // ✅ YE ADD KARO (ya jo bhi avatar image ho)

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { 
  Button, 
  Card, 
  CardBody, 
  Col, 
  Dropdown, 
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Row,
  Carousel  // ✅ YE ADD KARO
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const PropertyDetails = () => {
  
  
  const properties = [
    {
      code: 'March 2026',
      name: 'OMR 8,500',
      type: 'UPI',
      location: '01 Mar 2026',
      status: 'Paid'
    },
    {
      code: 'February 2026',
      name: 'OMR 8,500',
      type: 'BANK NEFT',
      location: '1 Feb 2026',
      status: 'Paid'
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#F9F9FC',
      minHeight: '100vh',
      padding: ''
    }}>
      {/* Image Carousel Section */}
      

      {/* Grid Images Section - CAROUSEL KE NICHE */}
      <Row className="g-0" >
        <Col xl={12} lg={6}>
          <Card>
            <CardBody>
              <div className="position-relative">
                <div className="row g-2">
                  <div className="col-6">
                    <img 
                      src={properties11} 
                      alt="property 1" 
                      className="img-fluid rounded w-100" 
                      style={{height: '250px', objectFit: 'cover'}} 
                    />
                  </div>
                  <div className="col-6">
                    <img 
                      src={properties12} 
                      alt="property 2" 
                      className="img-fluid rounded w-100" 
                      style={{height: '250px', objectFit: 'cover'}} 
                    />
                  </div>
                  <div className="col-6">
                    <img 
                      src={properties13} 
                      alt="property 3" 
                      className="img-fluid rounded w-100" 
                      style={{height: '250px', objectFit: 'cover'}} 
                    />
                  </div>
                  <div className="col-6">
                    <img 
                      src={properties14} 
                      alt="property 4" 
                      className="img-fluid rounded w-100" 
                      style={{height: '250px', objectFit: 'cover'}} 
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Profile Section */}
      <div style={{ 
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0',
        marginTop: '0rem'
      }}>
        {/* Header Section */}
       {/* Profile Section */}
<div style={{ 
  maxWidth: '100%',
  margin: '0 auto',
  padding: '0',
  marginTop: '0rem'
}}>
  {/* Header Section */}
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    marginBottom: '1.5rem',
    paddingLeft: '0rem',
    paddingRight: '1rem'
  }}>
    {/* Left Side - Property Name & Address */}
    <div>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 550, 
        marginBottom: '0.25rem',
        color: '#000'
      }}>
        Green Valley Villa 12A
      </h2>
      <p style={{ 
        margin: 0, 
        color: 'black',
        fontSize: '1rem',
        fontWeight: 400
      }}>
        Green Valley Society, Muskat, Oman, 4100001
      </p>
    </div>

    {/* Right Side - Price */}
    <div style={{
      textAlign: 'right'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 550, 
        marginBottom: '0.25rem',
        color: '#000'
      }}>
        OMR 8,500
      </h2>
      <p style={{ 
        margin: 0, 
        color: 'black',
        fontSize: '1rem',
        fontWeight: 400
      }}>
        per month + maintenance
      </p>
    </div>
  </div>
  </div>

        {/* Basic Profile Card */}
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
              Basic Property Information
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
                <Col lg={2} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                      PROPERTY TYPE
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      Villa
                    </p>
                  </div>
                </Col>

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
                      PROPERTY CODE
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      PRP-10234
                    </p>
                  </div>
                </Col>

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
                      PROJECT/SOCIETY
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Green Valley
                    </p>
                  </div>
                </Col>

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
                      VILLA NAME/NO
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Villa 12A
                    </p>
                  </div>
                </Col>

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
                      TOTAL FLOORS
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      2
                    </p>
                  </div>
                </Col>

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
                      YEAR BUILT
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      2023
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>

        {/* KYC & Identity Card */}
         {/* Basic Profile Card */}
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
              Configuration & Area
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
                <Col lg={2} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                      BHK
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      4
                    </p>
                  </div>
                </Col>

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
                      CARPET AREA
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      2200 sq.ft
                    </p>
                  </div>
                </Col>

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
                      BUILT-UP-AREA
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      2800 sq.ft
                    </p>
                  </div>
                </Col>

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
                      PLOT AREA
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      4000 sq.ft
                    </p>
                  </div>
                </Col>

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
                      BATHROOMS
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      4
                    </p>
                  </div>
                </Col>

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
                      FACING
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      EAST
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>

        {/* Property Linked Card */}
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
              Rental & Financial Details
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
                <Col lg={2} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                      MONTHLY RENT
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      OMR 8,500
                    </p>
                  </div>
                </Col>

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
                     SECURITY DEPOSIT
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      OMR 100,000
                    </p>
                  </div>
                </Col>

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
                      MAINTENANCE
                    </p>
                    <p style={{ 
                      fontSize: '0.999rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      OMR 1000
                    </p>
                  </div>
                </Col>

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
                      ELICTRICITY
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Metered
                    </p>
                  </div>
                </Col>
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
                     WATER CHARGES 
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Included
                    </p>
                  </div>
                </Col>

              </Row>
            </div>
          </CardBody>
        </Card>

        {/* Lease & Contact Card */}
         {/* Basic Profile Card */}
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
              Ownership 
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
                <Col lg={2} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                      LANDLORD NAME
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      Mr.Rajesh Mehta
                    </p>
                  </div>
                </Col>

                

                

               

               

              
              </Row>
            </div>
          </CardBody>
        </Card>
        
        {/* Rent & Financials Card */}
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
              Amenities & Facilities
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
               <Col lg={2} md={4} sm={6}>
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'black', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px', backgroundColor: '#f3f4f6', padding: '12px 12px', borderRadius: '6px' }}>
      Parking
    </p>
  </div>
</Col>

<Col lg={2} md={4} sm={6}>
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'black', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px', backgroundColor: '#f3f4f6', padding: '12px 12px', borderRadius: '6px' }}>
      Private Garden
    </p>
  </div>
</Col>

<Col lg={2} md={4} sm={6}>
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'black', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px', backgroundColor: '#f3f4f6', padding: '12px 12px', borderRadius: '6px' }}>
      Swimming Pool
    </p>
  </div>
</Col>

<Col lg={2} md={4} sm={6}>
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'black', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px', backgroundColor: '#f3f4f6', padding: '12px 12px', borderRadius: '6px' }}>
      Power Backup
    </p>
  </div>
</Col>

<Col lg={2} md={4} sm={6}>
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'black', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px', backgroundColor: '#f3f4f6', padding: '12px 12px', borderRadius: '6px' }}>
      CCTV
    </p>
  </div>
</Col>

<Col lg={2} md={4} sm={6}>
  <div style={{ marginBottom: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'black', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.8px', backgroundColor: '#f3f4f6', padding: '12px 12px', borderRadius: '6px' }}>
      Gated Community
    </p>
  </div>
</Col>
              </Row>
            </div>
          </CardBody>
        </Card>

       

        {/* Preferences & Rules Card */}
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
              Tenant Preference
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
                <Col lg={2} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                      RENTAL PURPOSE 
                    </p>
                      <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      Residential
                    </p>
                  </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      TENANT TYPE
                    </p>
                      <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      Family / Company Lease
                    </p>
                  </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      PETS ALLOWED
                    </p>
                      <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      Yes
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>

        {/* System Information Card */}
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
              Availability & Status
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              <Row>
                <Col lg={2} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                     STATUS
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Vacant
                    </p>
                  </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      AVAILABLE FORM
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      15 Mar 2026
                    </p>
                  </div>
                </Col>
             
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      CURRENT TENANT
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      ---
                    </p>
                  </div>
                </Col>
                  </Row>
            </div>
          </CardBody>
        </Card>
                
     <Card style={{ 
          borderRadius: '0.5rem',
          border: '1px solid #dee2e6',
          marginBottom: '2rem',
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
              Residential Address
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              {/* Address */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ 
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'black',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ADDRESS
                </p>
                <p style={{ 
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#000',
                  margin: 0
                }}>
                  Green Valley Society, Muskat, Oman
                </p>
              </div>

              <Row>
                {/* City */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      CITY
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Muskat
                    </p>
                  </div>
                </Col>

                {/* State */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      STATE
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Muskat
                    </p>
                  </div>
                </Col>

                {/* PO Box */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      PO BOX
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      401000
                    </p>
                  </div>
                </Col>

                {/* Google Map */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      GOOGLE MAP
                    </p>
                    <a 
                      href="#" 
                      style={{ 
                        fontSize: '0.938rem',
                        fontWeight: 600,
                        color: 'black',
                        textDecoration: 'none',
                        margin: 0
                      }}
                    >
                      View Location
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card> 
               <Card style={{ 
          borderRadius: '0.5rem',
          border: '1px solid #dee2e6',
          marginBottom: '2rem',
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
              System Information
            </h4>
            
            <div style={{ 
              borderTop: '1px solid #dee2e6',
              paddingTop: '1.75rem'
            }}>
              {/* Address */}
            
              <Row>
                {/* City */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      CREATED BY
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      Admin
                    </p>
                  </div>
                </Col>

                {/* State */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      CREATED ON
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      10 Feb 2026
                    </p>
                  </div>
                </Col>

                {/* PO Box */}
                <Col lg={3} md={4} sm={6}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'black',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      LAST UPDATED
                    </p>
                    <p style={{ 
                      fontSize: '0.938rem',
                      fontWeight: 600,
                      color: '#000',
                      margin: 0
                    }}>
                      02 Mar 2026
                    </p>
                  </div>
                </Col>

                {/* Google Map */}
               
              </Row>
            </div>
          </CardBody>
        </Card>
        </div>

      {/* Original AgentDetailsCard Component */}
      {/* <AgentDetailsCard /> */}
    </div>
  );
};
             

export default PropertyDetails;
