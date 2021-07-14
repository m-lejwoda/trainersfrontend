import Navbar from "./Navbar";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../sass/calendar.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import '../sass/reservation.css';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    selected:{
        width:300,
        color: 'white',
        // borderBottom: '1px solid white',
        '&::before':{
            borderBottom: '1px solid white'
        },
        '&::after':{
            borderBottom: '1px solid white'
        }
        
        
    },
    whiteicon:{
        color: 'white'
    }
}));
const Reservation = () => {
    const [value, onChange] = useState(new Date());
    const [age, setAge] = useState('');
    const classes = useStyles();
    const handleInputChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="reservation">
            <Navbar />
            <div className="calendar reservation__calendar">
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.selected}>Wybierz trenera</InputLabel>
                    <Select
                        value={age}
                        onChange={handleInputChange}
                        className={classes.selected}
                        classes={{
                            icon: classes.whiteicon
                        }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>

        </div>
    );
}

export default Reservation;