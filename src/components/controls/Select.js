import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core'

const Select = (props) => {
    const { name, label, value, onChange, options, error = null } = props
    return (
        <FormControl variant='outlined'
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value={value}>None</MenuItem>
                {options.map((item) => <MenuItem value={item.title}
                    key={item.title}>{item.title}</MenuItem>)}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select
