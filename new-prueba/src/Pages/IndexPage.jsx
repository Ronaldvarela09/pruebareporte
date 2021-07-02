import React, {useState} from 'react'
import FormReport from "../Components/FormReport";
import OptionsPage from "../Pages/OptionsPage";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid'
import {createStyles, makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles(() =>
    createStyles({
        buttonSave: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonAdd: {
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left'
        },
    })
);

const IndexPage = () => {
    const classes = useStyles()


    const customers = [{id: 1, name: 'Ronald Varela'}, {id: 2, name: 'alejandro Carcamo'},
        {id: 3, name: 'Valeria Jimenez'}]

    const projects = [{id: 1, name: 'proyecto 1'}, {id: 2, name: 'proyecto 2'}, {id: 3, name: 'proyecto 3'}]

    const initialAssigned = [{
        employee: '',
        dateBeg: '',
        dateEnd: '',
        time: 0,
        customer: '',
        project: '',
        description: ''
    }]


    const [form, setForm] = useState(initialAssigned)

    const handleChange = (event) => {

    }

    const handleDateChange = (time) => {
        let hourMinutes = 0 //selectedDate.getHours() * 60
        let sumMinutes = hourMinutes + time.getMinutes()
        let seconds = sumMinutes * 60
        let total = seconds + time.getSeconds()
        console.log(total)
    }

    const handleSaveForm = () => {
        console.log(form)
    }

    const handleAddForm = () => {
        setForm([...form, {employee: '', dateBeg: '', dateEnd: '', time: 0, customer: '', project: '', description: ''}])
        console.log(form)
    }

    return (
        <React.Fragment>
            <Grid container spacing={1} alignContent="center">


                { form.length > 0 && form.map((form, index) =>
                <FormReport handleChange={handleChange} form={form} customers={customers} projects={projects}
                />
                )
                }


                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <OptionsPage handleAddForm={handleAddForm}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.buttonSave}>
                    <Button variant="contained" onClick={handleSaveForm} color="primary">
                        Guardar
                    </Button>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}
export default IndexPage
