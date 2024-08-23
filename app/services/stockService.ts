import axiosInstance from './axiosInstance'

export const getStocks = async () => {
  try {
    const _responose = await axiosInstance.get('/api/Scraping/scrape')
    return _responose.data
    console.log(_responose)
  } catch (error) {
    console.error(error)
  }
}
