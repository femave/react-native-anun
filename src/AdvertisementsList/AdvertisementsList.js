import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
// import AlbumDetail from '../AlbumDetail/AlbumDetail'

class AdvertisementsList extends Component {
    state = { albums: [] };

    componentWillMount() {
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // return this.state.albums.map(album => 
        //     <AlbumDetail key={album.title} album={album} />
        // );
    }

    render() {
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    };
};

export default AdvertisementsList;