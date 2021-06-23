import { tryGetGenBankTitle, tryGetSraStudyName } from './EntrezApiCalls'

export async function getRunTitle(runId: string) {
    return await tryGetSraStudyName(runId)
}

export async function getSequenceTitle(sequenceId: string) {
    const fromAMR = Boolean(sequenceId.match(/.*_\d{7}/g))
    if (fromAMR) {
        sequenceId = sequenceId.slice(0, sequenceId.lastIndexOf('_')) // get GenBank ID from AMR ID
        const genBankTitle = await tryGetGenBankTitle(sequenceId)
        return `[AMR] ${genBankTitle}`
    } else {
        return await tryGetGenBankTitle(sequenceId)
    }
}

export async function getFamilyTitle(family: string) {
    if (family === 'AMR') {
        return 'The Comprehensive Antibiotic Resistance Database (CARD)'
    }
    return ''
}
