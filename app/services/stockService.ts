import axiosInstance from './axiosInstance'

export const getStocks = async () => {
  try {
    const _responose = await axiosInstance.get('/Scraping/scrape')
    return _responose.data
  } catch (error) {
    console.error(error)
  }
}
