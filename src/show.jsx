import React, { Component } from 'react'
import axios from 'axios'

export class show extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: []
        }
    }

    componentDidMount(){
    axios.get(`https://xebiascart.herokuapp.com/products`)
    .then(res =>{
        const show =res.data;
        this.setState({show});
        console.log(show)
    })
    }


    filtershowlist = () =>{
        const {searchtext}=this.props
        const {show}=this.state
        let currentlist=[]
        let filteredlist=[]
    
        if (searchtext!=='')
        {currentlist=show 
            filteredlist=currentlist.filter(item => {
                const lc=item.title.toLowerCase()
                const filter=searchtext.toLowerCase()
                return lc.includes(filter)
            })
        }
        else{
            filteredlist=show
        }
        
        return filteredlist
    }

    


    render() {
        return (
            <div className="itemwrapper"> 
           {/* </div> <div className="imagewrapper"> */}
        {this.filtershowlist().map(item => (<><div className="imagewrapper"><img src={item.image} alt=""/>{item.title}</div>
                </>))}
            </div>

        )
    }
}

export default show
