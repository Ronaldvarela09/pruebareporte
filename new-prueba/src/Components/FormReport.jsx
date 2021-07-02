import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid'
import React from "react";
import {
    MenuItem,
    OutlinedInput,
    FormControl,
    Select,
    InputLabel
} from "@material-ui/core"
import {TimePicker} from "@material-ui/pickers"
import moment from "moment"
import Button from '@material-ui/core/Button'


function FormReport({handleChange, index, handleChangeemployee, customers, projects, handleChangedateBeg,
                        handleChangedateEnd, handleChangecustomer, handleChangeproject, handleChangedescription}) {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h6" align="center" gutterBottom>
                    Formulario reporte de horas
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                    id="employee" name="employee" variant="outlined" fullWidth margin="dense"
                    label="Empleado"
                    onChange={({target}) => handleChangeemployee(target.value, index)}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                    id="dateBeg" name="dateBeg" label="Fecha inicial" type="date"
                    onChange={({target}) => handleChangedateBeg(target.value, index)}
                    variant="outlined" fullWidth margin="dense"
                    InputLabelProps={{shrink: true}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                    id="dateEnd" name="dateEnd" label="Fecha final" type="date"
                    onChange={handleChange} variant="outlined" fullWidth margin="dense"
                    onChange={({target}) => handleChangedateEnd(target.value, index)}
                    InputLabelProps={{shrink: true}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <FormControl
                    margin="dense" variant="outlined" fullWidth
                >
                    <InputLabel htmlFor="employment">Seleccione el cliente</InputLabel>
                    <Select
                         name="customer"
                         onChange={({target}) => handleChangecustomer(target.value, index)}
                        input={<OutlinedInput labelWidth={130} name="customer"/>} label="Seleccione un cargo"
                    >
                        {
                            customers ? customers.map(customer => <MenuItem value={customer.id}
                                                                            key={customer.id}>{customer.name}</MenuItem>)
                                : null
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <FormControl
                    margin="dense" variant="outlined" fullWidth
                >
                    <InputLabel htmlFor="project">Seleccione el proyecto</InputLabel>
                    <Select
                        name="project"
                        onChange={({target}) => handleChangeproject(target.value, index)}
                        input={<OutlinedInput labelWidth={130} name="project"/>} label="Seleccione un proyecto"
                    >
                        {
                            projects ? projects.map(project => <MenuItem value={project.id}
                                                                         key={project.id}>{project.name}</MenuItem>)
                                : null
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                    onChange={({target}) => handleChangedescription(target.value, index)}
                    label="Descripción" name="description" multiline rows={3} variant="outlined"
                    margin="dense" variant="outlined" fullWidth
                />
            </Grid>
        </React.Fragment>
    )
}

export default FormReport
