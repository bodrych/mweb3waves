import ReactDOM from 'react-dom'
import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.authFunc = this.authFunc.bind(this)
    }
    async authFunc() {
        const authData = {
            data: 'Auth on my site'
        }
        if (WavesKeeper) {
            try {
                const auth = await WavesKeeper.auth(authData)
                console.log(auth)
            } catch(error) {
                console.error(error)
            }
        } else {
            alert('To Auth WavesKeeper should be installed')
        }
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}