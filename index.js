

const catering1 = (amount1) => {
    return `catering od Just Food pro ${amount1} lidí za ${amount1 * 150} Kč`
}

const catering2 = (amount2) => {
    return `catering od Your Mama pro ${amount2} lidí za ${amount2 * 250} Kč`
}

const catering3 = (amount3) => {
    return `catering od Flavour Heaven pro ${amount3} lidí za ${amount3 * 400} Kč`
}

const createEvent = (event, amount, catering) => {
    return `Událost ${event} s ${catering(amount)}`
}