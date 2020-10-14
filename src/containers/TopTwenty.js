import React, {Component} from 'react';
import SongList from '../components/SongList';

export default class TopTwenty extends Component {

    // Constructor
    constructor(props){
        super(props);
        // State
        this.state = {
            songs: []
        }
        // Binds
        this.fetchData = this.fetchData.bind(this);
    }
    
    
    // Methods
    fetchData(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({ songs: songs.feed.entry }))
        .catch(err => console.err);
    }
    
    // Mounted
    componentDidMount(){
        this.fetchData();
    }
    
    // Render

    render(){
        return(
            <div>
                <SongList songs={this.state.songs}/>
            </div>
        )
    } 
}

