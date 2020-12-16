import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'

const query = {
    indicators: {
        resource: 'indicators',
        fields: [
            'id',
            'shotName',
            'displayName'
        ]
    },
    dataElements: {
        resource: 'dataElements',
        fields: [
            'id',
            'name',
            'displayName',
            'formName'
        ]
    },
}

const MyApp = () => {
    const {loading, error, data} = useDataQuery(query);

    return (
        <div>
            {data && (
                <ul>
                    {
                        data.dataElements.dataElements.map((item) => {
                            return <li> ${item.formName} </li>
                        })
                    }
                </ul>
            )}
        </div>
    )
}

export default MyApp