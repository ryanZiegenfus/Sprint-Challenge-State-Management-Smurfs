import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import { Card } from 'semantic-ui-react';

const SmurfList = () => {

    const {smurf} = useContext(SmurfContext)
    console.log(smurf)

	return (
		<div className="shopping-cart">
			{smurf.map(item => (
                <Card
                key={item.id}
                header={item.name}
                meta={item.age}
                description={item.height}
                />
			))}
		</div>
	);
};

export default SmurfList;

