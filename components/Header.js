import PropTypes from 'prop-types'
import Link from 'next/link'


class Message extends React.Component {
	constructor(props) {
		super(props)
		this.state = {clicked:false}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.setState({clicked:true})
		console.log("Clicked")
	}
	render() {
		return (
			<div onClick={this.handleClick} style={{position:"fixed",bottom:0,width:"100%",backgroundColor:"#ff8080",display:this.state.clicked?"none":"block",fontSize:12,fontWeight:200,textAlign:"center",padding:15,lineHeight:"1.2"}}>
		    		Please excuse the website's limited functionality while I finish it :)
			</div>
		)
	}
}


const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo"><strong>Erick</strong> <span>Friis</span></a>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>                
        
        <Message />

    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
