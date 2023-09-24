import { request } from '@/utils'


type Params = {
    postcode: string;
    page_no: number;
    limit: number;
}
export const getZoneMapping = async (data: Params) => {

    const res = await request.post('/get_zone_mapping', data)

    return res.data;
}


type RateParams = {
    skus: string;
    page_no: number;
    limit: number;
}
export const getZoneRate = async (data: RateParams) => {
    const res = await request.post('/get_zone_rates', data)

    return res.data
}