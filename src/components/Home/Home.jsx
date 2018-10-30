import React from 'react'
import PropTypes from 'prop-types'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'
import { homeSelectors, homeActions } from './ducs'
import { appActions } from '../App/ducks'

const Home = ({
  counter,
  increaseCounter,
  descreaseCounter,
  startAsyncAction
}) => (
  <>
    <Header title="Home Page" />
    <Container content="Home page content">
      <button type="button" onClick={increaseCounter}>
        +
      </button>
      <span>{counter}</span>
      <button type="button" onClick={descreaseCounter}>
        -
      </button>
      <div>
        <button type="button" onClick={startAsyncAction}>
          Start async action
        </button>
      </div>
    </Container>
  </>
)

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  descreaseCounter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  counter: createSelector(homeSelectors.getCounter(state))
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
