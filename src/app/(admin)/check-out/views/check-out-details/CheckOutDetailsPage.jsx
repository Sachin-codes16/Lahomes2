import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DocumentsPage from './pages/DocumentsPage';
import FinancePage from './pages/FinancePage';
import InspectionPage from './pages/InspectionPage';
import KeyHandoverPage from './pages/KeyHandoverPage';
import OverviewPage from './pages/OverviewPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import RepairDamagePage from './pages/RepairDamagePage';
import TenantDetailsPage from './pages/TenantDetailsPage';
import UtilityReadingsPage from './pages/UtilityReadingsPage';

const pageText = '#526b89';
const darkButton = '#30375f';

const detailItems = [
  { label: 'Tenant', value: 'Bilal Ahmed' },
  { label: 'Property', value: 'A-401, Ocean View' },
  { label: 'Unit No', value: 'A-401' },
  { label: 'Check-Out Date', value: '29 May 2025' },
  { label: 'Assigned To', value: 'Ramesh Kumar' },
  { label: 'Check-Out Status', value: 'Completed' },
  { label: 'Mobile No.', value: '+911 1234567890' },
  { label: 'Tenant Type', value: 'Individual' },
];

const tabs = [
  { key: 'overview', label: 'Overview', icon: 'ri:layout-grid-line', component: OverviewPage },
  { key: 'tenantDetails', label: 'Tenant Details', icon: 'ri:home-4-fill', component: TenantDetailsPage },
  { key: 'propertyDetails', label: 'Property Details', icon: 'noto:house', component: PropertyDetailsPage },
  { key: 'inspection', label: 'Inspection', icon: 'noto:clipboard', component: InspectionPage },
  { key: 'repairDamage', label: 'Repair & Damage', icon: 'noto:person-gesturing-ok', component: RepairDamagePage },
  { key: 'utilityReadings', label: 'Utility Readings', icon: 'ri:calendar-line', component: UtilityReadingsPage },
  { key: 'finance', label: 'Finance', icon: 'ri:checkbox-circle-fill', component: FinancePage },
  { key: 'keyHandover', label: 'Key Handover', icon: 'noto:key', component: KeyHandoverPage },
  { key: 'documents', label: 'Documents', icon: 'solar:document-bold', component: DocumentsPage },
];

const shellStyle = {
  background: '#f6f7fb',
  margin: '-24px -24px 0',
  minHeight: 'calc(100vh - 80px)',
};

const topBarStyle = {
  background: '#fff',
  borderBottom: '1px solid #eef1f5',
  padding: '28px 30px 14px',
};

const cardStyle = {
  background: '#fff',
  borderRadius: 8,
  boxShadow: '0 8px 26px rgba(15, 23, 42, 0.08)',
};

const outlineButtonStyle = {
  border: '1px solid #b8b6ff',
  borderRadius: 5,
  color: darkButton,
  height: 40,
  minWidth: 100,
};

const primaryButtonStyle = {
  background: darkButton,
  borderColor: darkButton,
  borderRadius: 5,
  height: 40,
  minWidth: 140,
};

const CheckOutDetailsPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const ActivePage = tabs.find((tab) => tab.key === activeTab)?.component ?? OverviewPage;

  return (
    <div style={shellStyle}>
      <div className="d-flex flex-column flex-md-row align-items-md-start justify-content-between gap-3" style={topBarStyle}>
        <div>
          <h4 className="mb-2" style={{ color: pageText, fontSize: 18, fontWeight: 700 }}>
            Check-Out Details
          </h4>
          <div style={{ color: pageText, fontSize: 15 }}>Dashboard &gt; Check-Out &gt;Check-Out Details</div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Button as={Link} to="/check-out-list" variant="outline-primary" className="d-inline-flex align-items-center justify-content-center gap-2 px-4" style={outlineButtonStyle}>
            <IconifyIcon icon="ri:arrow-left-s-line" width={18} height={18} />
            <span>Back</span>
          </Button>
          <Button style={primaryButtonStyle}>Edit Details</Button>
        </div>
      </div>

      <div style={{ padding: '25px 13px' }}>
        <div className="mb-4" style={{ ...cardStyle, padding: '25px 29px 22px' }}>
          <div className="d-flex align-items-center gap-4 mb-3">
            <span style={{ background: '#e6fbea', borderRadius: 8, color: '#21865f', display: 'inline-block', fontSize: 16, fontWeight: 700, padding: '8px 16px' }}>
              Completed
            </span>
            <span style={{ color: pageText, fontSize: 17, fontWeight: 700 }}>CL-12345665</span>
          </div>

          <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(8, minmax(120px, 1fr))', overflowX: 'auto' }}>
            {detailItems.map((item) => (
              <div key={item.label} style={{ minWidth: 120 }}>
                <p className="mb-2" style={{ color: pageText, fontSize: 15 }}>
                  {item.label}
                </p>
                <p className="mb-0" style={{ color: pageText, fontSize: 16, fontWeight: 700 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4" style={{ ...cardStyle, padding: '8px 10px', overflowX: 'auto' }}>
          <div className="d-flex flex-nowrap gap-3" style={{ minWidth: 'max-content' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <Button
                  key={tab.key}
                  type="button"
                  variant="light"
                  onClick={() => setActiveTab(tab.key)}
                  className="d-inline-flex align-items-center justify-content-center gap-2"
                  style={{
                    background: isActive ? '#f3f8fb' : '#fff',
                    border: isActive ? '1px solid #c7d2dc' : '1px solid #edf0f4',
                    borderRadius: 8,
                    color: pageText,
                    fontSize: 16,
                    fontWeight: 700,
                    height: 45,
                    minWidth: tab.label.length > 12 ? 160 : 120,
                    padding: '0 15px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <IconifyIcon icon={tab.icon} width={22} height={22} />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        <div style={{ ...cardStyle, minHeight: 290 }}>
          <ActivePage />
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetailsPage;
