export async function getData (urlApi) {
    let res=null;
    try {
        res = await fetch (urlApi);
        res = res.json();
    } catch (error) {
        console.log(error);
    }
    return res;
}