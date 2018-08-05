import React, { Component } from 'react';
import PropTypes from 'prop-types'

const { Provider, Consumer: BrowserConsumer } = React.createContext();

export { BrowserConsumer }

export default class BrowserProvider extends Component {
  state = {
    isScrolling: false,
    viewportWidth: null,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidMount() {
    this.handleBrowserChange()
    window.addEventListener('scroll', this.handleBrowserChange, { passive: true });
    window.addEventListener('resize', this.handleBrowserChange);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleBrowserChange, { passive: true });
    window.removeEventListener('resize', this.handleBrowserChange);
  }

  handleBrowserChange = () => {
    const isScrolling = window.scrollY > 0
    const viewportWidth = window.innerWidth

    this.setState({
      isScrolling,
      viewportWidth,
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}