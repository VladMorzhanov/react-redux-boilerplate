import React from 'react'
import { connect } from 'react-redux'

export const Container = ({ uiStore, content }) => (
  <div className="container">
    {content}
    {uiStore.user.name}
  </div>
)

const mapStateToProps = state => ({
  data: state.dataSets.data,
  counters: state.dataSets.counters
})

export default connect(mapStateToProps)(Container)
