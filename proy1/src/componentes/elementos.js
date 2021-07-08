import React from 'react';

import Elemento from './elemento';

class Elementos extends React.Component{

    render(){
        
        return this.props.practic1.map((s)=><Elemento elem = {s} key={s.id} />)
    }
}

export default Elemntos;