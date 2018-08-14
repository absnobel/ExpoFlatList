import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import {FlatListItem} from './FlatListItem'

class FlatListDemo extends Component {
_keyExtractor = (item, index) => item.id;
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://yuser.co/nodes.json`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data:  res.results,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  _renderItem = ({item}) => (
    <FlatListItem
     data={item}
    />
  );
  render() {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
   
  }
}

export default FlatListDemo;