import { Col, Row } from 'react-bootstrap';
import { useAnalyticsDashboardController } from '../controllers/useAnalyticsDashboardController';
import RecentCheckInOuts from '../components/RecentCheckInOuts';
import SocialSource from '../components/SocialSource';
import Statistics from '../components/Statistics';
import UpcomingActivities from '../components/UpcomingActivities';

const AnalyticsDashboardView = () => {
  useAnalyticsDashboardController();

  return (
    <>
      <h4 className="mb-2 fw-semibold" style={{ color: '#516986', fontSize: '17px' }}>Dashboard</h4>
      <Statistics />

      <SocialSource />

      <Row className="g-3 mt-1">
        <Col lg={8}>
          <RecentCheckInOuts />
        </Col>
        <Col lg={4}>
          <UpcomingActivities />
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsDashboardView;
