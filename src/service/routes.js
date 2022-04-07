export function getParams(){
    const url = new URL(window.location.href);
    return url.searchParams.get("city");
}