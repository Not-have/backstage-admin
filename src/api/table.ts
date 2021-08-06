import request from "@/utils/reques";

export function getList() {
    return request({
        url: '/vue-admin-template/table/test',
        method: 'get'
    })
}