const searchFilterChange = (text) => {
    return {
        type: 'filter/searchFilterChange',
        payload: text
    }
}
export default searchFilterChange