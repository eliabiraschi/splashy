/**
 * Catch-em-all!
 */
import React from 'react'
import { Container } from '../Components/UI'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return (
      this.state.hasError
        ? (<Container>
            <h1>Something went wrong. :(</h1>
          </Container>
        ) : this.props.children
    )
  }
}

export default ErrorBoundary
