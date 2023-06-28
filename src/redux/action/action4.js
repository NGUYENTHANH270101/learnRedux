const priorityChange = (priorities) => {
    return {
        type: 'filter/priorityChange',
        payload: priorities
    }
}

export default priorityChange