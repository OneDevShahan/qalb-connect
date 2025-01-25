import PropTypes from 'prop-types';

const Card = ({ edition, onClick }) => {
  return (
    <div
      className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{edition.name}</h3>
      <p className="text-sm text-gray-600">Language: {edition.language}</p>
      <p className="text-sm text-gray-600">Format: {edition.format}</p>
      <p className="text-sm text-gray-600">Type: {edition.type}</p>
    </div>
  );
};  
Card.propTypes = {
  edition: PropTypes.shape({
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
