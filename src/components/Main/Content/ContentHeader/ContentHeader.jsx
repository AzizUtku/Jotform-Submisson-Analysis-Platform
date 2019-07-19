/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import * as actionCreators from '../../../../store/actions';
import Modal from '../../../Modal/Modal';
import Center from '../../../Utilities/Center';

const propTypes = {
  title: PropTypes.string.isRequired,
  selectedForm: PropTypes.object.isRequired,
  onSetChartBackgroundColor: PropTypes.func.isRequired,
  chartBackgroundColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.string,
};

const defaultProps = {
  path: '',
};

class ContentHeader extends React.Component {
  state = {
    showModal: false,
    selectedColorIndex: 0,
  }

  modalVisibilityHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  getStyle = color => ({
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: `solid 8px ${color}`,
  });

  handleChangeComplete = (color) => {
    const { onSetChartBackgroundColor } = this.props;
    const { selectedColorIndex } = this.state;
    onSetChartBackgroundColor(selectedColorIndex, color.hex);
  };

  render() {
    const {
      path, title, selectedForm, chartBackgroundColors,
    } = this.props;
    const { showModal, selectedColorIndex } = this.state;

    const colors = chartBackgroundColors.map((element, index) => {
      if (index === selectedColorIndex) {
        return <span className="dot" key={index} style={this.getStyle(element)} onClick={() => { this.setState({ selectedColorIndex: index }); }} />;
      }
      return <span className="dot" key={index} style={{ backgroundColor: element }} onClick={() => { this.setState({ selectedColorIndex: index }); }} />;
    });

    return (
      <React.Fragment>
        <div className="header">
          <div className="left">
            <div className="navigation">
              Forms
              { selectedForm.id && <i className="fa fa-long-arrow-right" aria-hidden="true" /> }
              { selectedForm.id && path }
            </div>
            <div className="title">
              <span>{title}</span>
              <i className="fa fa-caret-down" aria-hidden="true" />
            </div>
          </div>
          <div className="right">
            { selectedForm.id && (
              <button type="button">
                <i className="fa fa-download" aria-hidden="true" />
                Download PDF
              </button>
            )}

            <i className="fa fa-cog" aria-hidden="true" onClick={() => { this.setState({ showModal: true }); }} />
          </div>
        </div>
        <Modal isVisible={showModal} onOutsideClick={this.modalVisibilityHandler}>
          <Center style={{ marginBottom: '12px' }}>
            <h2>Current chart colors</h2>
            { colors }
          </Center>
          <Center>
            <SketchPicker
              color={chartBackgroundColors[selectedColorIndex]}
              onChangeComplete={this.handleChangeComplete}
            />
          </Center>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedForm: state.data.selectedForm,
  chartBackgroundColors: state.data.chartBackgroundColors,
});

const mapDispatchToProps = dispatch => ({
  onSetChartBackgroundColor: (index, color) => dispatch(actionCreators.setChartBackgroundColor(index, color)),
});

ContentHeader.propTypes = propTypes;
ContentHeader.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(ContentHeader);
