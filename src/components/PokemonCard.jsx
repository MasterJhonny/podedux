import React from 'react';
import { Card } from 'antd';
import image from '../assets/react.svg'
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({name}) => {
    return (
        <Card
            title={name}
            cover={<img src={image} alt="Pokemon" />}
            extra={<StarOutlined/>}
        >
            <Card.Meta description='fuego y magic'/>
        </Card>
    );
}
 
export default PokemonCard;