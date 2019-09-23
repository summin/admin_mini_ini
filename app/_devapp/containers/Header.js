import { connect } from 'react-redux'
import Header from '../components/Header'
import { headerAssets } from '../actions'

const mapStateToProps = state => {
    const assets_names = state.header.header_assets_names
    const focus = state.content.focus
    return { assets_names, focus }
}


export default connect(
    mapStateToProps
)(Header)