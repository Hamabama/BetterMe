const filterQuotesByTime = (list, filter) => {

    return list.filter(q => q.time === filter);
}

const getCurrentList = (quotesList, timeName) => {

    switch (timeName) {

        case 'MORNING':
            return getMorningList(quotesList);

        case 'DAY':
            return getDayList(quotesList);

        case 'NIGHT':
            return getNightList(quotesList);
    }
}

const getMorningList = (quotesList) => {

    return filterQuotesByTime(quotesList, 'MORNING');
}

const getDayList = (quotesList) => {

    return filterQuotesByTime(quotesList, 'DAY');
}

const getNightList = (quotesList) => {

    return filterQuotesByTime(quotesList, 'NIGHT');
}

export default {
    getCurrentList
}