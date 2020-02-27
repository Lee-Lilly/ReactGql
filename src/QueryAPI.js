import React from 'react';
import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

function QueryAPI(){
    const client = new ApolloClient({uri: 'https://countries.trevorblades.com/', });
    const [countries, setCountries] = React.useState([]);

    client.query({query: gql`{countries{code, name, continent{name},}}`}).then(result => setCountries(result.data.countries));

    const listOfCountries = countries.map((country, index) =>
        <tr key={index}>
            <td>{country.code}</td>
            <td>{country.name}</td>
            <td>{country.continent.name}</td>
        </tr>    
    );

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Code</th>
                        <th>Country</th>
                        <th>Continent</th>
                    </tr>
                    {listOfCountries}
                </tbody>
            </table>
        </div>
    )
}

export default QueryAPI;