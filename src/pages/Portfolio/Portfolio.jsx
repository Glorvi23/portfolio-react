import React from 'react';
import Project from '../../components/Project/Project'
import db from './db.json';

const Portfolio = () => {

    console.log(db);

    return (
        <div>
            Portfolio page
            {
                db.map((item) => {
                    return <Project key={item.id} {...item} />;
                })
            }
        </div>
    );
};

export default Portfolio;