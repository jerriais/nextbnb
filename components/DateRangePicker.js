import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import { useState } from 'react'
import { DateUtils } from 'react-day-picker'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate()+1)

const numberOfNightsBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate) //clone
    const end = new Date(endDate) //clone
    let dayCount = 0

    while (end > start) {
        daycount++
        start.setDate(start.getDate()+1)
    }
    return dayCount
}

const parseDate = (str, format, locale) => {
    const parsed =dateFnsParse (str, format, new Date(), {locale})
    return DateUtils.isDate(parsed) ? parsed : null
}

const formatDate =(date, format, locale) =>
    dateFnsFormat(date, format, {locale})

const format = 'dd MMM yyyy'

export default ({datesChanged}) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return (
        <div className='date-range-picker-container'>
        <div>
            <label>From:</label>
            <DayPickerInput
                formatDate={formatDate}
                format={format}
                parseDate={parseDate}
                placeholder={`${dateFnsFormat(new Date(), format)}
                `}
                dayPickerProps={{
                    modifiers: {
                        disabled: {
                            before: new Date()
                        }
                    }
                }}
                onDayChange={day => {
                    setStartDate(day)
                    if (numberOfNightsBetweenDates(day, endDate) <1) {
                        const newEndDate = new Date(day)
                        newEndDate.setDate(newEndDate.getDate()+1)
                        setEndDate(newEndDate)
                    }
                }}
                />
        </div>
        <div>
            <label>To:</label>
            <DayPickerInput
            format={format}
            parseDate={parseDate}
            formatDate={formatDate}
            placeholder={`${dateFnsFormat(new Date(), format)}`}
            dayPickerProps={{
                modifiers: {
                    disabled: [
                        startDate,
                        {
                        before: startDate
                        }
                    ]
                }
            }}
            onDayChange={day => {
                setEndDate(day)
                datesChanged(startDate, day)
            }}
            />
        </div>

        <style jsx>{`
            .date-range-picker-container div {
                display: grid;
                border: 1px solid #ddd;
                grid-template-columns: 30% 70%;
                padding: 10px;
            }
            label {
                padding-top: 10px;
            }
        `}</style>
        <style jsx global>{`
            .DayPickerInput input {
                width: 120px;
                padding: 10px;
                font-size: 16px;
            }
        `}</style>
    </div>
)
}
