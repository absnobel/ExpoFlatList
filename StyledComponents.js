import styled from 'styled-components'; // 3.4.2
import { View, Text,Image, FlatList } from "react-native";
export const HeaderPhoto = require('./assets/logo@3x.png');
export const GemPhoto = require('./assets/gem@3x.png');
export const SendPhoto = require('./assets/send@3x.png');
export const CommentPhoto = require('./assets/comments@3x.png');
export const BookmarkPhoto = require('./assets/bookmark@3x.png');
export const BoldAuthor = styled(Text)`
font-weight:bold;
`;
export const StyledImg = styled(Image)`
height:200px;
object-fit: cover;
`;
export const HeaderImage = styled(Image)`
height:100%;
object-fit:cover;
`
export const ActionBar = styled(View)`
display:flex;
flex:0 0 50%;
flex-wrap: nowrap;
`
export const BookmarkBar = styled(View)`
flex:0 0 50%;
text-align:right;
`
export const ActionContainer = styled(View)`
display:flex;
`
export const ActionItem = styled(View)`
flex:0 0 33%;
overflow:hidden;
`
export const ActionImage = styled(Image)`
height:24px;
`