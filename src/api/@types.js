module.exports = () => {
    return {
        entityId: {
            type: 'string',
            minLength: 24,
            maxLength: 24,
        },
    };
};
