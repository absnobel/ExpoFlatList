import styled from 'styled-components'; // 3.4.2
export const HeaderPhoto = require('assets/lgoo@3x.png');
export const GemPhoto = require('assets/gem@3x.png');
export const SendPhoto = require('assets/send@3x.png');
export const CommentPhoto = require('assets/comments@3x.png');
export const BookmarkPhoto = require('assets/bookmark@3x.png');
export const BoldAuthor = styled.span`
font-weight:bold;
`;
export const StyledImg = styled.img`
height:200px;
object-fit: cover;
`;
export const ActionBar = styled.div`
display:flex;
flex:0 0 50%;
flex-wrap: nowrap;
`
export const BookmarkBar = styled.div`
flex:0 0 50%;
text-align:right;
`
export const ActionContainer = styled.div`
display:flex;
`
export const ActionItem = styled.div`
flex:0 0 33%;
overflow:hidden;
`
export const ActionImage = styled.img`
height:24px;
`