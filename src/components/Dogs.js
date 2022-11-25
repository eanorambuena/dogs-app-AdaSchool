import fetch from 'unfetch'
import useSWR from 'swr'

function Dogs() {
    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error } = useSWR("https://api.thedogapi.com/v1/images/search", fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <>
            <img src={data[0].url} alt="dog" />
        </>
}

export default Dogs