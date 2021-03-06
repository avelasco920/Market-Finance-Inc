import { connect } from 'react-redux';
import Chart from './chart';

const mapStateToProps = (state) => {
  return {
    company: state.entities.company
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
