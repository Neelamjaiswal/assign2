import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
		About me
		</NavLink>
		<NavLink to="/enterskills" activeStyle>
		Enter Skills
		</NavLink>
		<NavLink to="/skills" activeStyle>
		Skills
		</NavLink>

		<NavLink to="/enterexperience" activeStyle>
		Enter Experience
		</NavLink>
    <NavLink to="/experience" activeStyle>
	Experience
		</NavLink>
		<NavLink to="/enterrecommendation" activeStyle>
		Enter Recommendations
		</NavLink>
		
    <NavLink to="/recommendations" activeStyle>
	Recommendations
		</NavLink>
		<NavLink to="/contact" activeStyle>
		Contact me
		</NavLink >
		
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   &nbsp;&nbsp; &nbsp; &nbsp;
   <NavLink to="/" activeStyle><button>Logout</button>
		
		</NavLink>	
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
