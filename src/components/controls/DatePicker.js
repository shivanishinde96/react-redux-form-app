import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'

const DatePicker = (props) => {
    const {name,label,value,onChange}=props
    const current = new Date().toISOString().split("T")[0]
    const convertToDefEventPara=(name,value)=>({
        target:{
            name,value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          label={label}
          value={value}
          name={name}
          maxDate={current}
          onChange={date=>onChange(convertToDefEventPara(name,date))}
        />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
