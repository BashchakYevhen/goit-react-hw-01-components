import data from '../../data.json';
import { getRandomHexColor } from 'components/utils/randomColor';
import { ListInfo, StatBox, StatSection, StatData } from './statistics.style';
export const Statistics = () => {
  return (
    <StatSection>
      <h2>Upload stats</h2>
      <ListInfo>
        {data.map(stat => {
          return <StatisticsItem key={stat.id} stat={stat} />;
        })}
      </ListInfo>
    </StatSection>
  );
};

const StatisticsItem = ({ stat: { label, percentage } }) => {
  return (
    <StatBox style={{ backgroundColor: getRandomHexColor() }}>
      <StatData>{label}</StatData>
      <StatData>{percentage}</StatData>
    </StatBox>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
