import React from 'react';
import defaultimage from '../../assets/images/fashe.jpg';
import sending from '../../assets/images/fashe.gif';
import {connect} from 'react-redux';


class Boy extends React.Component{
    state= {
        issend: false
    };
    handleClisk= ()=>{
        let {issend} = this.state;

        issend ? this.props.stoplove() : this.props.sendlove();

        this.setState({
            issend: !issend
        });

    }
    render(){
        return(
            <div>
                <img src={this.state.issend ? sending : defaultimage} alt="" />
                <div>
                    <button onClick={this.handleClisk}>{this.state.issend ? 'stop' : 'send'} </button>
                </div>
                
            </div>
        );
           
        
    }



}

const MapDispatchToProps=(dispatch)=>{
    //return a objet to this component which can be geted by "this.props"
    return({
        sendlove: ()=>{
            dispatch({type: 'send_love'});
        },
        stoplove:()=>{
            dispatch({type: 'stop_love'});
        }

    }) 

}

export default connect(null,MapDispatchToProps)(Boy);