import {Person} from "../user/Person";

const Persons = () => {
    const persons = [
        {
            id: 76,
            name: 'Cousin Nicky',
            status: 'Dead',
            species: 'Alien',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/76.jpeg',
        },
        {
            id: 220,
            name: 'Mega Fruit Farmer Rick',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/220.jpeg',
        },
        {
            id: 464,
            name: 'SEAL Team Rick',
            status: 'Dead',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/464.jpeg',
        },
        {
            id: 530,
            name: 'Deliverance',
            status: 'Dead',
            species: 'Robot',
            gender: 'Genderless',
            image: 'https://rickandmortyapi.com/api/character/avatar/530.jpeg',
        },
        {
            id: 555,
            name: 'Randotron',
            status: 'Dead',
            species: 'Robot',
            gender: 'Genderless',
            image: 'https://rickandmortyapi.com/api/character/avatar/555.jpeg',
        },
        {
            id: 729,
            name: 'CHUD King',
            status: 'Alive',
            species: 'Animal',
            gender: 'Genderless',
            image: 'https://rickandmortyapi.com/api/character/avatar/729.jpeg',
        }
    ]
    return (
        <div>
            {persons.map(person => <Person key={person.id} person={person}/>)}
        </div>
    );
};

export {Persons};