export const fetchSWR = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Gagal memuat data');
    }
    return res.json();
  });
