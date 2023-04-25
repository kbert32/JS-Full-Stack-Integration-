import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList"

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

export default function UserPlaces() {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces} />;
};