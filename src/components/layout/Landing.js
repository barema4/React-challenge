import React, { Component } from 'react'
import { Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Fast Food Fast
                </h1>
                <p className="lead"> Create Fast food Fast</p>
                <hr />
                <div>
                    <h1> hello world</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
