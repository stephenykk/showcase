import { request } from '@/utils'


type GetOrdersParams = {
    order_ids: string;
    start_date: string;
    end_date: string;
    status: string;
}
export const getOrders = async (params?: Partial<GetOrdersParams>) => {

    const res = await request.post('/orders', { params: params ?? {} })

    return res.data;
}

type PlacingData = {
    your_order_no: string;
    first_name: string;
    last_name: string;
    address1: string;
    address2: string;
    suburb: string;
    state: string;
    postcode: string;
    telephone: string;
    comment: string;
    sku: string;
    qty: string;
}
export const placingOrder = async (data?: Partial<PlacingData>) => {

    const res = await request.post('/placingOrder', data)

    return res.data;
}



