
import Navbar from "./Navbar";
import React, { useState, useEffect } from 'react';
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
import { get_trainers, get_hours,get_packages } from '../redux/actions/trainerActions'
import axios from 'axios';

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
        marginBottom: '1rem',
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
    const [starthour, setStartHour] = useState('')
    const [endhour, setEndHour] = useState('')
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [phone,setPhone] = useState("")
    const [userpackage,setUserPackage] = useState(1)
    const [errormessage,setErrorMessage] = useState("")

    const handleInputChange = (event) => {
        setStartHour('')
        setEndHour('')
        setTrainer(event.target.value);
        let hours_array = get_hours(parseDate(date), event.target.value)
        hours_array.then(function (result) {
            setDayTraining([result])
        })
    };

    const handleInputChangeSelect = (event) => {
        setUserPackage(event.target.value)
    }

    const parseDate = (date) => {
        let new_date = moment(date).format('YYYY-MM-DD')
        return new_date
    }
    const getHour = (e) => {
        setStartHour(e.target.attributes.starthour.value)
        setEndHour(e.target.attributes.endhour.value)
    }

    const clickDate = (value) => {
        setStartHour('')
        setEndHour('')
        changeDate(value)
        let hours_array = get_hours(parseDate(value), trainer)
        hours_array.then(function (result) {
            setDayTraining([result])
        })
    }

    const handleSendData = async() =>{
        await setErrorMessage("")
        if (validateData(name,email,phone,trainer,userpackage,starthour,endhour,date)){
            let data = { 
                "client_name": name,
                "client_email": email,
                "client_phone": "+48"+ phone,
                "trainer": trainer,
                "package":userpackage,
                "events":[
                    {
                        "start_hour": starthour,
                        "end_hour": endhour,
                        "date": parseDate(date),
                        "trainer": trainer,
                        "client_phone": "+48"+ phone,
                        "client_name": name,
                        "client_email": email
                    }
                ]
            }
            console.log(data)
            await axios.post("http://127.0.0.1:8000/api/add_plan_with_event",data)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                for (const error_element in err.response.data){
                    if (error_element === "events"){
                        
                    }else{
                        setErrorMessage("*" + err.response.data[error_element][0])
                    }
                    console.log(error_element)
                    console.log(err.response.data[error_element])
                }
            }
            )
        }
        else{
            console.log("dane niepełne")
        }
        
    }

    useEffect((value) => {
        let hours_array = get_hours(parseDate(value), 1)
        hours_array.then(function (result) {
            setDayTraining([result])
        })
    }, [])

    useEffect(() => {
        if (daytraining.length > 0) {
            setDayHours([])
            let temp_array = []
            for (let i = 0; i < daytraining[0].trainershour.length; i++) {
                for (let j = 0; j < daytraining[0].trainershour[i].hours_list.length; j++) {
                    temp_array.push(daytraining[0].trainershour[i].hours_list[j])
                }
            }
            setDayHours(temp_array)
        }
    }, [daytraining, trainer]);
    const validateData = (name,email,phone,trainer,userpackage,starthour,endhour,date) => {
        if(name !== "" && email !== "" && phone !== "" && trainer !== "" && userpackage !== "" && starthour !== "" && endhour !== "" && date !== ""){
            return true
        }
        else{
            if(starthour === "" || endhour === ""){
                setErrorMessage("* Wybierz godzine")
            }
            if (date === ""){
                setErrorMessage("* Wybierz datę rezerwacji")
            }
            if(name === "" || email === "" || phone === ""){
                setErrorMessage("* Wprowadź poprawne dane osobowe")
            }
            return false
        }
    }
    return (
        <div className="reservation">
            <Navbar />
            <div className="calendar reservation__calendar">
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.selected}>Wybierz trenera</InputLabel>
                    <Select
                        defaultValue={trainer}
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
                    onChange={clickDate}
                    value={date}
                    minDate={moment().toDate()}
                    locale={"pl-Pl"}
                />
            </div>
            <div className="reservation__elements">
                {dayhours.length > 0 ? dayhours.map((hour,index) => <div key={index}>< input type="radio" id={hour[0]} name="radioHour" value="hour" disabled={hour[2] ? false : true} /><label  starthour={hour[0]} endhour={hour[1]} onClick={getHour} htmlFor={hour[0]}>{hour[0].slice(0, -3)} - {hour[1].slice(0, -3)}</label></div>):<p>Brak wolnych terminów</p>}
            </div>
            <div className="reservation__userdetails">
                <div className="reservation__userdetails__title">Rezerwacja</div>
                <FormControl className={classes.formControl}>
                    <TextField id="standard-search" label="Imię i nazwisko" type="search" onChange={e=>setName(e.target.value)} className={classes.selected} InputLabelProps={{
                        className: classes.selected,
                    }} />
                    <TextField id="standard-search" label="Adres Email"  type="search" onChange={e=>setEmail(e.target.value)} classes={{
                        root: classes.selected
                    }}
                        InputLabelProps={{
                            className: classes.selected,
                        }}/>
                    <TextField id="standard-search1" label="Telefon" type="search" onChange={e=>setPhone(e.target.value)} className={classes.selected} InputLabelProps={{
                        className: classes.selected,
                    }} />
                    {/* <TextField id="standard-search" label="Godziny" type="search" className={classes.selected} disabled={true} InputLabelProps={{
                        className: classes.selected,
                    }} /> */}
                    {/* <TextField id="standard-search" label="Pakiet" type="search" className={classes.selected} InputLabelProps={{
                        className: classes.selected,
                    }} /> */}
                    <Select
                        defaultValue={userpackage}
                        onChange={handleInputChangeSelect}
                        className={classes.selected}
                        classes={{
                            icon: classes.whiteicon
                        }}
                    >
                        {props.packages.map((pack) => <MenuItem key={pack.id} value={pack.id}>{pack.name + " Cena " + pack.price + "zł"}</MenuItem>)}
                    </Select>
                </FormControl>
                <button className="reservation__userdetails__btn" onClick={handleSendData}>Zatwierdź rezerwacje</button>
                <div className="reservation__error">{errormessage}</div>
            </div>


        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        trainers: state.trainer.trainers,
        loadedtrainers: state.trainer.loadedtrainers,
        packages: state.trainer.packages
    }
}

export default connect(mapStateToProps, { get_trainers,get_packages })(Reservation);