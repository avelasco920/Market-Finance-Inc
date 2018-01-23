import { connect } from 'react-redux';
import Content from './content';

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
)(Content);
