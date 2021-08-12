
import Navbar from "./Navbar";
import React, { useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import '../sass/calendar.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../sass/reservation.css';
import { connect } from 'react-redux'
import moment from "moment";
import { get_trainers, get_hours } from '../redux/actions/trainerActions'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    selected: {
        width: 300,
        color: 'white',
        '&::before': {
            borderBottom: '1px solid white'
        },
        '&::after': {
            borderBottom: '1px solid white'
        }


    },
    whiteicon: {
        color: 'white !important'
    }
}));

const Reservation = (props) => {
    const [date, changeDate] = useState(new Date());
    const [trainer, setTrainer] = useState(1)
    const classes = useStyles();
    const [daytraining, setDayTraining] = useState([])
    const [dayhours, setDayHours] = useState([])
    const [starthour,setStartHour] = useState('')
    const [endhour,setEndHour] = useState('')
    
    const handleInputChange = (event) => {
        setTrainer(event.target.value);
        let hours_array = get_hours(parseDate(date), event.target.value)
        hours_array.then(function (result) {
            setDayTraining([result])
        })
    };
    const parseDate = (date) => {
        let new_date = moment(date).format('YYYY-MM-DD')
        return new_date
    }
    const getHour = (e) => {
        setStartHour(e.target.attributes.starthour.value)
        setEndHour(e.target.attributes.endhour.value)
    }
    const clickDate = (value) => {
        changeDate(value)
        let hours_array = get_hours(parseDate(value), trainer)
        hours_array.then(function (result) {
            setDayTraining([result])
        })
    }
    useEffect((value) => {
        let hours_array = get_hours(parseDate(value), 1)
        hours_array.then(function (result) {
            setDayTraining([result])
        })
    }, [])

    useEffect(() => {
        if(daytraining.length > 0 ){
            setDayHours([])
            let temp_array = []
            for(let i=0;i<daytraining[0].trainershour.length;i++){
                for(let j=0;j<daytraining[0].trainershour[i].hours_list.length;j++){
                    temp_array.push(daytraining[0].trainershour[i].hours_list[j])
                }
            }
            setDayHours(temp_array)
        }
      }, [daytraining,trainer]);

    return (

        <div className="reservation">
            <Navbar />
            <div className="calendar reservation__calendar">

                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.selected}>Wybierz trenera</InputLabel>
                    <Select
                        value={trainer}
                        onChange={handleInputChange}
                        className={classes.selected}
                        classes={{
                            icon: classes.whiteicon
                        }}
                    >
                        {props.trainers.map((trainer) => <MenuItem key={trainer.id} value={trainer.id}>{trainer.first_name + " " + trainer.last_name}</MenuItem>)}
                    </Select>
                </FormControl>

                <Calendar
                    // onChange={onChange}
                    onChange={clickDate}
                    value={date}
                    minDate={moment().toDate()}
                    locale={"pl-Pl"}
                />
            </div>
            <div className="reservation__elements">
                {dayhours.map((hour, index) => <div className="reservation__item" key={index} starthour={hour[0]} endhour={hour[1]} onClick={getHour}>{hour[0].slice(0,-3)} - {hour[1].slice(0,-3)}</div>)}
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
const mapStateToProps = (state) => {
    return {
        trainers: state.trainer.trainers,
        loadedtrainers: state.trainer.loadedtrainers
    }
}

export default connect(mapStateToProps, { get_trainers })(Reservation);