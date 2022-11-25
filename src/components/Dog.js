import fetch from 'unfetch'
import useSWR from 'swr'
import Card from './Card';

function Dog() {
    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error } = useSWR("https://api.thedogapi.com/v1/images/search", fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    const params = {
        raza: "Pitbull",
        edad: "Adulto",
        utilidad: "Acompañante",
        temperamento: "Amigable"
    }

    return <>
            {data.map(dogData => (
                <Card dogData = {dogData} params = {params} />
            ))}
        </>
}

export default Dog