import {Simpson} from "../user/Simpson";

const Simpsons = () => {
let family = [
    {id:1, name:'Homer Jay Simpson', age: 36, status: true, gender: 'male' },
    {id:2, name:'Marjorie Jacqueline Simpson', age: 33, status: true, gender: 'female'},
    {id:3, name:'Homer Jay Simpson', age: 12, status: true, gender: 'male' },
    {id:4, name:'Lisa Marie Simpson', age: 8, status: true, gender: 'female' },
    {id:5, name:'Maggie” Simpson', age: 2, status: true, gender: 'female'}
]


    return (
        <div>
            {family.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};