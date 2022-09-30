export function replaceSpecialChars(str) {
    if (str.length > 0 ) {
        return str
    .replace(/[.,;:!?*"()°]/g, "")
    .replace(/[']/g, " ")
    .replace(/[\d]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
    }
}
