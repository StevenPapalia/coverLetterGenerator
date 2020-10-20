import { App as Component } from '../components/App/App'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { IStoreState } from '../store'

const mapStateToProps = (state: IStoreState) => {
  return {}
}

export const App = compose(connect(mapStateToProps, {}))(Component)
