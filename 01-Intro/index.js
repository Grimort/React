const person = {
    name: 'Pepe',
    age: 20,
    key: 'Large'
}
const useContext = ({ name, age, key, range = 'High' }) => {
    return {
        nameKey = key,
        years = age
    }
}

const hero = useContext(person)

console.log(hero)