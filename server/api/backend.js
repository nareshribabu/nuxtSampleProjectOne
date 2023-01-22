export default defineEventHandler(async (event) => {

    //handle query parameters
    // const { name } = getQuery(event)

    //handle post data
    // const { age } = await readBody(event)

    //Api call with key (private)
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=dvcXG6DMxjDeXYAh1ZIYwXPXNSqPWHw6IYUi8dDx')

    return data
})