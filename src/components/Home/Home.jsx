import './Home.styl'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'
import { homeSelectors, homeActions } from './ducks'
import { appActions } from '../App/ducks'

class Home extends React.Component {
  componentDidMount() {
    const { startAsyncAction } = this.props
    startAsyncAction()
  }

  render() {
    const {
      counter,
      increaseCounter,
      descreaseCounter,
      startAsyncAction
    } = this.props
    return (
      <div className="home-page">
        <Header title="Home Page" />
        <Container title="Home page content">
          <div>You can review actions in Redux dev tools</div>
          <div>
            <button
              className="handle-button"
              type="button"
              onClick={descreaseCounter}
            >
              -
            </button>
            <span>{counter}</span>{' '}
            <button
              className="handle-button"
              type="button"
              onClick={increaseCounter}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="async-action-button"
              type="button"
              onClick={startAsyncAction}
            >
              Start async action
            </button>
          </div>
        </Container>
      </div>
    )
  }
}

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  descreaseCounter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  counter: homeSelectors.getCounter(state)
})

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(homeActions.increaseCounter()),
  descreaseCounter: () => dispatch(homeActions.descreaseCounter()),
  startAsyncAction: () => dispatch(appActions.startAsyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
