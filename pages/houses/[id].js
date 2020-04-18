import Head from 'next/head'
import Layout from '../../components/Layout'
import DateRangePicker from '../../components/DateRangePicker'

import houses from '../houses.json'
import { useState } from 'react'

const House = props => {
    const [dateChosen, setDateChosen] = useState(false)
    return (
        <Layout
            content={
                <div className='container'>
                    <Head>
                        <title>{props.house.title}</title>
                    </Head>
                    <article>
                        <img src={props.house.picture} width='100%' alt='House Picture' />
                        <p>{props.house.type} - {props.house.town}</p>
                        <p>
                            {props.house.title}
                        </p>
                        <p>
                            {props.house.rating} ({props.house.reviewsCount})
                        </p>
                    </article>
                    <aside>
                        <h2>Add dates for prices</h2>
                        <DateRangePicker
                            datesChanged={(startDate, endDate) => {
                                console.log(startDate, endDate)
                            }}
                            {dateChosen && (
                                <div>
                                    <h2>Price per night</h2>
                                    <p>${props.house.price}</p>
                                </div>
                            )}
                        />
                    </aside>
                    <style jsx>{`
                        .container {
                            display: grid;
                            grid-template-columns: 60% 40%;
                            grid-gap: 30px;
                        }
                        aside {
                            border: 1px solid #ccc;
                            padding: 20px;
                        }
                        `}</style>
                </div>
            }
        />
    )
}
House.getInitialProps = ({ query }) => {
    const { id } = query

    return {
        house: houses.filter(house => house.id === id)[0]
    }
}
export default House
