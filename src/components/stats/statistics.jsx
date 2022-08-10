import PropTypes from 'prop-types';
// import data from '../../data.json';

import { ListInfo, StatBox, StatSection, StatData } from './statistics.style';
export const Statistics = ({ data, title }) => {
  return (
    <StatSection>
      {title && <h2>{title}</h2>}
      <ListInfo>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatBox key={id}>
              <StatData>{label}</StatData>
              <StatData>{percentage}</StatData>
            </StatBox>
          );
        })}
      </ListInfo>
    </StatSection>
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
