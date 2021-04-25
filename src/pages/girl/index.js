import React from 'react';

import defaultimage from '../../assets/images/接受.jpg';
import reciveimage from '../../assets/images/fashe.gif'
import {connect} from 'react-redux';


class Girl extends React.Component{
    render(){
        console.log("girl",this.props);
        return(
            <div>
                <img src={!this.props.status ? defaultimage  : reciveimage} alt='' />
            </div>
        );

    }



}
const MapStateToProps=(state)=>{
    return state;
}
export default connect(MapStateToProps)(Girl);