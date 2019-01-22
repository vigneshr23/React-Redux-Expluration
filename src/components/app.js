import React from 'react';
import { connect } from 'react-redux';

const data = [
    {title: 'Generic List', length: 24, id: '_cc13'},
    {title: 'The Last Hour', length: 12, id: '_ac81'},
    {title: 'The Wall Street Journal', length: 60, id: '_aa01'}
]

const List = ({lists, showEv}) => {
    return (
        lists.map((list) => (
             <li className="list-group-item my-list" key={list.id}>{list.title}  &nbsp;
             <button className="btn btn-sm btn-primary" id={list.id} onClick={showEv} >SHOW</button>
             </li>
            )
        )
    );
}

const DetailView = ({selected = '0'}) => {
    let match = data.filter(
        (item) => item.id === selected
    );
    let matchedOb = match[0] ? match[0] : '';
    console.log(matchedOb);
    return (
        matchedOb && <Details detail={matchedOb} />
    )
    //return <h2>asdsad - {selected}</h2>
}

const Details = (props) => {
    return (
        <React.Fragment>
            <h2>Showing Details for - {props.detail.title}</h2>
            <div>Id - {props.detail.id}</div>
            <div>length - {props.detail.length}</div>
        </React.Fragment>
    );
}

export class App extends React.Component {
    state = {
        isLoading: true,
        isSelected: false,
        selectedSong: ''
    };
    show = (e)=> {
        this.setState({
            isSelected: true,
            selectedSong: e.currentTarget.getAttribute("id")
        },()=>console.log(this.state.selectedSong));
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("Mounted!");
            this.setState({isLoading: false});
            this.setState({
                selectedSong: this.props.selectedSong,
                songsList: this.props.songsList
            })
        }, 1200);
    }

    render() {
        console.log('App rendering..');
        if(this.state.isLoading) {
            return <h3 className="text-center">Loading... please wait!!</h3>
        } 
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-md-6">
                        <ul className="list-group">
                            <List lists={data} showEv={this.show.bind(this)} />
                        </ul>
                    </div>
                    { this.state.isSelected &&
                    <div className="col col-md-6">
                        <DetailView selected={this.state.selectedSong}/>
                    </div>
                    }
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        console.log('Com Updated! props', this.props)
        console.log('Com Updated! state', this.state)
    }
}

const mapStateToProps = (state) => {
    console.log("store state", state);
    return state;
}

//export default App;
export default connect(mapStateToProps)(App);