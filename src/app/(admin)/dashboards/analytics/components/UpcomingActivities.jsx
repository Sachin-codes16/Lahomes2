import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const UpcomingActivities = () => {
  const activities = [
    {
      title: 'Check-In : New Tenant',
      subtitle: 'Ali Rehman | Unit A-502',
      date: '02 June 2026',
      time: '10:00 AM',
      icon: 'solar:calendar-date-bold-duotone',
      bgColor: 'rgba(110, 124, 145, 0.1)',
      iconColor: '#6e7c91'
    },
    {
      title: 'Check-Out : Move Out',
      subtitle: 'Sara Khan | Unit B-201',
      date: '02 June 2026',
      time: '11:00 AM',
      icon: 'solar:home-bold-duotone',
      bgColor: 'rgba(230, 200, 79, 0.1)',
      iconColor: '#e6c84f'
    },
    {
      title: 'Inspection Scheduled',
      subtitle: 'Unit C-201',
      date: '02 June 2026',
      time: '12:00 AM',
      icon: 'solar:clipboard-check-bold-duotone',
      bgColor: 'rgba(235, 114, 82, 0.1)',
      iconColor: '#eb7252'
    },
    {
      title: 'Key Handover',
      subtitle: 'Unit C-303',
      date: '02 June 2026',
      time: '14:00 AM',
      icon: 'solar:key-bold-duotone',
      bgColor: 'rgba(255, 155, 67, 0.1)',
      iconColor: '#ff9b43'
    },
    {
      title: 'Maintenance Request',
      subtitle: 'Unit D-410',
      date: '02 June 2026',
      time: '15:00 AM',
      icon: 'solar:check-circle-bold-duotone',
      bgColor: 'rgba(71, 173, 148, 0.1)',
      iconColor: '#47ad94'
    }
  ];

  return (
    <Card className="shadow-sm border-0 mb-4 h-100" style={{ borderRadius: '8px' }}>
      <CardHeader className="border-0" style={{ backgroundColor: '#fbfcfe', padding: '22px 28px 18px' }}>
        <CardTitle as="h4" className="mb-0 fw-semibold" style={{ color: '#516986', fontSize: '15px' }}>
          Upcoming Activities
        </CardTitle>
      </CardHeader>
      <CardBody style={{ padding: '18px 28px 20px' }}>
        <div className="d-flex flex-column">
          {activities.map((item, idx) => (
            <div
              key={idx}
              className={`d-flex align-items-center justify-content-between ${
                idx !== activities.length - 1 ? 'border-bottom border-light' : ''
              }`}
              style={{ padding: '13px 0' }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-3 flex-centered d-flex align-items-center justify-content-center"
                  style={{
                    width: '28px',
                    height: '28px',
                    backgroundColor: item.bgColor,
                    color: item.iconColor
                  }}
                >
                  <IconifyIcon icon={item.icon} width={20} height={20} />
                </div>

                <div>
                  <h6 className="mb-1 fw-medium" style={{ color: '#516986', fontSize: '15px' }}>
                    {item.title}
                  </h6>
                  <span style={{ color: '#7488a4', fontSize: '13px' }}>
                    {item.subtitle}
                  </span>
                </div>
              </div>

              <div className="text-end ms-3">
                <div className="fw-medium" style={{ color: '#56708f', fontSize: '14px' }}>
                  {item.date}
                </div>
                <div style={{ color: '#56708f', fontSize: '14px' }}>{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default UpcomingActivities;
