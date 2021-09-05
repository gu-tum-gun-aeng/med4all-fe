const requiredValue = (value) => {
    return (value !== undefined && value !== null && value !== '')
        ? false
        : 'This field is required'
}

export default { requiredValue };
