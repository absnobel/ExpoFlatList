import React, { Component } from "react";
import { View } from "react-native";
import {StyledColumn,HeaderImage,HeaderPhoto,GemPhoto,SendPhoto,CommentPhoto,BookmarkPhoto,BoldAuthor,StyledImg,ActionImage,ActionBar,ActionContainer,BookmarkBar} from './StyledComponents'
export default class FlatListItem extends Component {
    constructor(props) {
      super(props);
    }
  
    render(){
        return(
        <View>
        <HeaderImage src={HeaderPhoto}/>    
          
        {this.props.data.map(tileInfo => (
          <StyledColumn key={tileInfo.id}>
            <StyledImg src={tileInfo.image.src} />
            <ActionContainer>
             <ActionBar>
               <ActionItem><ActionImage src={GemPhoto}/>{tileInfo.gems}</ActionItem>
               <ActionItem><ActionImage src={CommentPhoto}/>{tileInfo.gems}</ActionItem>
               <ActionItem><ActionImage src={SendPhoto}/></ActionItem>
               </ActionBar> 
               <BookmarkBar><ActionImage src={BookmarkPhoto}/></BookmarkBar>
               </ActionContainer>
               <div>
                 <BoldAuthor>{tileInfo.author}</BoldAuthor>
                 <span>{tileInfo.body}</span>
               </div>      
          </StyledColumn>
        ))}
      </View>);
    }
}