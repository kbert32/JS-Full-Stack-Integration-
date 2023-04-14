import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from "../../shared/hooks/form-hook";

import './Auth.css';

export default function Auth() {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    return(
        <form>
            <Input
                id='email'
                element='input'
                type='text'
                label='Email'
                validators={[VALIDATOR_EMAIL()]}
                errorText='Please enter a valid email.'
                onInput={inputHandler}
            />
            <Input
                id='password'
                element='input'
                type='text'
                label='Password'
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText='Please enter a valid password (at least 6 characters).'
                onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}></Button>
        </form>
    )
};