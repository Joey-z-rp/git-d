import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import NewsCard from './NewsCard';

const HooksDemo = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://hn.algolia.com/api/v1/search').then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setResults(data.hits);
            });
    }, []);

    return (
        <div>
            <h1>Hooks Demo</h1>
            {isLoading && <Loader active inline size="huge" />}
            {
                !isLoading && results.map((result, index) => (
                    <NewsCard
                        key={index}
                        title={result.title}
                        author={result.author}
                    />
                ))
            }
        </div>
    );
};

export default HooksDemo;
