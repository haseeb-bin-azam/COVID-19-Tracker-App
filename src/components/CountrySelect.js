import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export function CountrySelect({ data }) {
    const classes = useStyles();


    // console.log(data[1][0].countries);
    //   console.log(data);


    let countryName = '';
    const handleChange = (event) => {
        // console.log(event.target.value); // country name

        countryName = event.target.value;

        data[0][1](countryName);
    };
    

    if (!data[1][0].countries) {
        return ' ';
    }


    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect
                    onChange={handleChange}
                    className={classes.selectEmpty}
                >
                    <option value="dummy">Global Data</option>
                    {data[1][0].countries.map((country, ind) => {
                        return (<option key={ind} value={country.name} onChange={handleChange}>{country.name}</option>)
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
