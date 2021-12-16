// Retrieve photographer id from URL
export const getParam = (param) =>
    new URL(document.location).searchParams.get(param);
