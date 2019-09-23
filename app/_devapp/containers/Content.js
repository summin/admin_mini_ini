import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ContentViewCenter from '../components/Content/ContentViewCenter'
import ContentViewRight from '../components/Content/ContentViewRight'
import ContentViewLeft from '../components/Content/ContentViewLeft'
import { headerAssets } from '../actions'


class Content extends Component {

    render() {
        return (
            <Container fluid={true} key="1">
                <Row key="1">
                    {this.props.content &&
                        <ContentViewLeft
                            contentLoaded={this.props.contentLoaded}
                            content={this.props.content}
                            focus={this.props.focus}
                            key="1" />}
                    <ContentViewCenter
                        contentLoaded={this.props.contentLoaded}
                        content={this.props.content}
                        focus={this.props.focus}
                        key="2" />
                    {this.props.content &&
                        <ContentViewRight
                            contentLoaded={this.props.contentLoaded}
                            content={this.props.content}
                            focus={this.props.focus}
                            key="3" />}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const contentLoaded = state.content.contentLoaded
    const content = state.content.content
    const focus = state.content.focus
    return { contentLoaded, content, focus }
}


export default connect(
    mapStateToProps
)(Content)