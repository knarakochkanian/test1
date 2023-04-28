import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useForm, Controller} from "react-hook-form";


export default function SelectSection() {
    const [relations, setRelations] = React.useState("");
    const [positions, setPositions] = React.useState("");


    const handleChangeRelations = (event: SelectChangeEvent) => {
        setRelations(event.target.value as string);
    };
    const handleChangePosition = (event: SelectChangeEvent) => {
        setRelations(event.target.value as string);
    };

    const {handleSubmit, reset, control, formState: {errors}} = useForm();
    const onSubmit = (data: object) => console.log(data);

    return (
        <form className="select-section">
            <Controller
                render={({ field }) => (
                    <Select {...field}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                )}
                control={control}
                name="select"
                defaultValue={""}
            />
            <Controller
                render={({ field }) => (
                    <Select {...field}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                )}
                control={control}
                name="select"
                defaultValue={""}
            />
            <Controller
                name={"textValue"}
                control={control}
                rules={{required: "Right something"}}
                render={
                    ({field: {onChange, value}}) => (
                        <TextField required onChange={onChange} label={"Text"} id="value"
                                   error={!!errors.textValue?.message}
                                   helperText={errors.textInput && `${errors.textInput.message}`}/>

                    )}
            />
            <Button onClick={handleSubmit(onSubmit)} variant="contained">Submit</Button>
            <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
        </form>
    );
}