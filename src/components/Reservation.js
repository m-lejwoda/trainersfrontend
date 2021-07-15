import Navbar from "./Navbar";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../sass/calendar.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../sass/reservation.css';
import moment from "moment";
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
        '&::before':{
            borderBottom: '1px solid white'
        },
        '&::after':{
            borderBottom: '1px solid white'
        }
        
        
    },
    whiteicon:{
        color: 'white !important'
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
                        <MenuItem value={10}>Patryk Trener</MenuItem>
                        <MenuItem value={20}>Kasia Trener</MenuItem>
                        <MenuItem value={30}>Maurycy Trener</MenuItem>
                        <MenuItem value={40}>Tomek Trener</MenuItem>
                    </Select>
                </FormControl>
                <Calendar
                    onChange={onChange}
                    value={value}
                    minDate={moment().toDate()}
                    locale={"pl-Pl"}
                />
            </div>
            <div className="reservation__elements">
                <div className="reservation__item">7:00 - 8:00</div>
                <div className="reservation__item">8:00 - 9:00</div>
                <div className="reservation__item">9:00 - 10:00</div>
                <div className="reservation__item">10:00 - 11:00</div>
                <div className="reservation__item">11:00 - 12:00</div>
                <div className="reservation__item">12:00 - 13:00</div>
                <div className="reservation__item">13:00 - 14:00</div>
                <div className="reservation__item">14:00 - 15:00</div>
                <div className="reservation__item">15:00 - 16:00</div>
                <div className="reservation__item">16:00 - 17:00</div>
                <div className="reservation__item">17:00 - 18:00</div>
                <div className="reservation__item">18:00 - 19:00</div>
            </div>
            <div className="reservation__userdetails">
                <div className="reservation__userdetails__title">Rezerwacja</div>
                <FormControl className={classes.formControl}>
                <TextField id="standard-search" label="Imię i nazwisko" type="search" className={classes.selected} InputLabelProps={{
                    className: classes.selected,
                }} />
                <TextField id="standard-search" label="Adres Email" type="search" classes={{
                    root: classes.selected
                }}
                InputLabelProps={{
                    className: classes.selected,
                }} 
                InputProps />
                <TextField id="standard-search" label="Telefon" type="search" className={classes.selected} InputLabelProps={{
                    className: classes.selected,
                }} />
                <TextField id="standard-search" label="Godziny" type="search" className={classes.selected} InputLabelProps={{
                    className: classes.selected,
                }} />
                <TextField id="standard-search" label="Pakiet" type="search" className={classes.selected} InputLabelProps={{
                    className: classes.selected,
                }} />
                </FormControl>
                <button className="reservation__userdetails__btn">Zatwierdź rezerwacje</button>
            </div>

        </div>
    );
}

export default Reservation;