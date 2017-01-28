import React from 'react';
import { Link, withRouter } from 'react-router';

const MyLink = ({ name, path, router }) => {
	if (path.indexOf('http') !== -1) {
		return <a
			href={path}
			target="_blank"
			className="menu-item"
		>{name}</a>;
	}
	return (
		<Link
			to={path}
			className={'menu-item' + (router.location.pathname === path ? ' active' : '')}
		>{name}</Link>
	);
}

export default withRouter(MyLink);