export function replaceSpecialChars(str) {
    if (str.length > 0 ) {
        return str
        .toLowerCase()
        .replace(/[.,;:!?*"()°]/g, '')
        .replace(/[']/g, ' ')
        .replace(/[\d]/g, '')
        .normalize('NFD')
        .replace(/[àäâ]/g, "a")
        .replace(/[ç]/g, "c")
        .replace(/[éèêë]/g, "e")
        .replace(/[îï]/g, "i")
        .replace(/[ôö]/g, "o")
        .replace(/[ùûû]/g, "u")
        .replace(/[\u0300-\u036f]/g, '')
    }
}
