import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Eiffel Tower',
        description: 'The famous tower in Paris!',
        imageUrl: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
        location: {
            lat: 48.8584,
            lng: 2.2945
        },
        creator: 'u1' 
    },
    {
        id: 'p2',
        title: 'Delicate Arch',
        description: "Utah's Delicate Arch!",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Delicate_arch_sunset.jpg/1280px-Delicate_arch_sunset.jpg',
        address: 'Arches National Park, Moab, Utah, USA',
        location: {
            // lat: 38.743600,
            // lng: -109.499300
            lat: 38.7436,
            lng: -109.4993
        },
        creator: 'u2'
    }
];


export default function UpdatePlace() {

    const [isLoading, setIsLoading] = useState(true);

    const placeId = useParams().placeId;
 
    const [formState, inputHandler, setFormData] = useForm({    //setFormData function is used to initialize the input
        title: {                //fields once the data is retrieved from the backend.
            value: '',
            isValid: false
            },
        description: {
            value: '',
            isValid: false
            },
        }, 
        false
    );
    
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                    },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                    },
                }, true
            );
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    function placeUpdateHandler(event) {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateHandler}>
           <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title.'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            /> 
           <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (at least 5 characters).'
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            /> 
            <Button type='submit' disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    );
};