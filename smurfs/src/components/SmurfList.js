import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfList = () => {

    const {smurf} = useContext(SmurfContext)
    console.log(smurf)

	return (
		<div className="shopping-cart">
			{smurf.map(item => (
				<div key={item.id}> {`${item.name} , ${item.age}, ${item.height}`}  </div>
			))}
		</div>
	);
};

export default SmurfList;