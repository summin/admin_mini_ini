import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageLeft from './ImageLeft'
import ContentForm from './ContentForm'
import ButtonsLeft from './ButtonsLeft'
import cuid from 'cuid'
import myApp from 'myApp'; /** We are importing our index.php my app Vairaible */


export default class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClickButtons.bind(this);
        this.handlerForm = this.handlerForm.bind(this);
        this.setContent = this.setContent.bind(this);
        this.displayElement = { display: 'none' }
        console.log("Result constructor")
    }

    displayDecision = () => {
        return !this.state.content ?
            this.displayElement = { display: 'none' } :
            this.displayElement = {};
    }

    state = {
        content: "",
        contentForm: [],
        focus: "",
        contentLoaded: false,
        contentFormOnChange: ""
    }



    handlerForm = (e) => {
        console.log(e.target.value)
    }

    onClickButtons = (data) => {
        this.setState({ focus: data.currentTarget.innerHTML });
        this.setContent(data.currentTarget.innerHTML);
        console.log("CLICKED" + data.currentTarget.innerHTML);
    }

    setContent = (value) => {
        console.log("setContent REACHED")
        let entries = Object.entries(this.state.content);
        entries.map((i) => {
            if (this.state.contentLoaded == 'days') {
                console.log("setdays reached");
                entries = this.filterbyFirst(i[1], value);
            }
            else if
                (i[0] === value) {
                entries = Object.entries(i[1]);
                console.log(entries);
            }
        });

        //////////////////////////////////////////////////////
        // promo in days.ini fix /////////////////////////////
        //////////////////////////////////////////////////////
        if (value === "calendar.newsletter") {
            entries = Object.entries(this.state.content);
            entries.map((i) => {
                if (i[0] === value) {
                    entries = Object.entries(i[1]);
                }
            })
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////

        this.setState({ contentForm: entries });
        return entries;
    }

    filterbyFirst = (pairs, n) => {
        let array = [[], []];
        Object.entries(pairs).map((i) => {
            let j = (i[0].split("."));
            if (j[0] == n) {
                i[0] = j.splice(1, 4).join(".");
                array.push(i);
            }
        })
        return array;
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps === this.props) && (prevProps === this.props)) {
            console.log("NOTHING TO UPDATE")
            return;
        }
        else {
            console.log(this.props.content[0]);
            if ((prevProps.content !== this.props.content) && (prevProps.focus == this.props.focus))
                fetch(API_URL_CONTENT + "?asset=" + this.props.content[0])
                    .then(response => response.json())
                    .then(json => {
                        this.setState({
                            content: json,
                            contentLoaded: this.props.content[0],
                            focus: ""
                        })
                    });

        }
    }

    render() {
        console.log("CONTENTCONTAINER RENDERED");
        const { user: { name, email }, logged } = myApp;
        return (
            <Container fluid={true}><br></br>
                <Row>
                    <Col lg={3}>
                        <div
                            className="ml-2 mr-2 mt-0 shadow p-3 pt-0 pb-0 mb-0 bg-white"
                            style={this.displayDecision()}>
                            <Row>
                                <Col sm={6} lg={12}>
                                    <ButtonsLeft
                                        contentLoaded={this.state.contentLoaded}
                                        content={this.state.content}
                                        onClick={this.onClickButtons}
                                        key={cuid()} />
                                </Col>
                                <Col sm={6} lg={12}>
                                    <ImageLeft
                                        key={cuid()}
                                        contentLoadedinParent={this.state.contentLoaded}
                                        focus={this.state.focus} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="mt-4 mt-lg-0" lg={7}>
                        <ContentForm
                            content={this.state.contentForm}
                            focus={this.state.focus}
                            contentLoaded={this.state.contentLoaded}
                            onChangeForm={this.handlerForm}>
                        </ContentForm>
                    </Col>
                    <Col lg={2}>
                        <div
                            className="ml-2 mr-2 mt-4 mt-lg-0 shadow p-3 pt-0 pb-0 mb-0 bg-white"
                            style={this.displayDecision()}>
                            <h5>Recent Actions:
                        </h5>
                            <div className="dashboard">
                                {logged &&
                                    <p className="status">Logged In 6</p>
                                }
                                <p>{name}  {email} API 1host variable {__API_HOST__} </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}
