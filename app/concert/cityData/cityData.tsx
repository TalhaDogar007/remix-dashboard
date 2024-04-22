export interface Params {
    city: string;
    people: number;
  }
  
  export interface Gist {
    id: number;
    html_url: string;
  }
  

const getParam = async (params: Params) => {
    console.log('params//: ', params);
    return params


}

const getdata = async () => {
    try {
        const res = await fetch("https://api.github.com/gists");
        return await res.json();
    } catch (error) {
        console.log('error: ', error);
    }
}

export default { getParam, getdata };