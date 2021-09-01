import useSWR from 'swr'　

const fetcher = async (url) => {
  const responce = await fetch(url);

  if (!responce.ok){
  throw new Error ("エラー")
  }
	const json = await responce.json();
	return json;
}

export const usePosts = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}
