const addIdLocal = (id) =>
{
    const cart = localStorage.getItem('Bottle Cart');

    if (cart)
    {
        const cartObj = JSON.parse(cart);
        cartObj.push(id.trim());
        localStorage.setItem('Bottle Cart', JSON.stringify(cartObj));
    }
    else
    {
        localStorage.setItem('Bottle Cart', JSON.stringify([id]));
    }
}

export { addIdLocal };