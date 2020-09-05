import React, { Component } from 'react'

class FetchAPOD extends Component {
    render() {
        return (
            <div>
                {this.state.loading ? <div>loading...</div> : <div>picture...</div>}
            </div>
        );
    }
}

export default FetchAPOD;
