const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}

export default statusFilterChange