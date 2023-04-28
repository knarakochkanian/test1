import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useForm, Controller} from "react-hook-form";
import {ADD_LIST, ADD_LIST_POSITIONS, GET_LIST, GET_LIST_POSITIONS} from "@/components/list/list.query";
import {variables , IFormInput} from "../list/list.types";
import {useQuery, useMutation} from '@apollo/client';

export default function SelectSection() {

    const {loading, error, data} = useQuery(GET_LIST);
    const {data:dataPosition} = useQuery(GET_LIST);
    const [relations, setRelations] = useState([]);
    const [positions, setPositions] = useState([]);
    const {handleSubmit, reset, control, formState: {errors}} = useForm();
console.log(errors, "11111111111111")
    const handleChangeRelations = (event:any) => {
        setRelations(event.target.value);
    };
    const handleChangePositions = (event:any) => {
        setPositions(event.target.value);
    };

    const onSubmit = (data: object) => console.log(data);
    if (loading) return <div> Loading... </div>;
    if (error) return <div>Error! {error.message}</div>;
    // @ts-ignore
    return (

        <form className="select-section">
            <Controller
                render={({ field: onChange= {handleChangeRelations}  }) => (
                    <Select>
                        {data.applicantIndividualCompanyPositions.data?.map((relations) => {
                            return <MenuItem value={relations} key={relations.index}>{relations.name}</MenuItem>;
                        })}
                    </Select>
                )}
                rules={{required: "Right something"}}
                control={control}
                name={"select"}
                defaultValue={""}
            />
            <Controller
                render={({ field: onChange= {handleChangePositions} }) => (
                    <Select>
                        {data.applicantIndividualCompanyPositions.data?.map((positions) => {
                            return <MenuItem value={positions} key={positions.index}>{positions.name}</MenuItem>;
                        })}
                    </Select>
                )}
                rules={{required: "Right something"}}
                control={control}
                name={"select"}
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