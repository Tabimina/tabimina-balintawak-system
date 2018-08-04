import React from 'react';

const { Provider, Consumer: BrowserConsumer } = React.createContext();

export { BrowserConsumer }

export class BrowserProvider extends React.Component {
  state = {
    isScrolling: false,
    viewportWidth: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleBrowserChange, { passive: true });
    window.addEventListener('resize', this.handleBrowserChange);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleBrowserChange, { passive: true });
    window.removeEventListener('resize', this.handleBrowserChange);
  }

  handleBrowserChange = event => {
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