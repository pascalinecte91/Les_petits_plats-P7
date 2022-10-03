export function replaceSpecialChars(str) {
    return str
			.replace(/[.,;:!?*"()°]/g, '')
			.replace(/[']/g, ' ')
			.replace(/[\d]/g, '')
			.replace(/[éèêë]/g, 'e')
			.replace(/[îï]/g, 'i')
			.normalize('NFD')
			.replace(/[ôö]/g, 'o')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[ùûû]/g, 'u');
}
