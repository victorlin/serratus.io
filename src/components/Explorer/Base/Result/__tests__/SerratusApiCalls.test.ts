import { getAnalysisIndex } from '../SerratusApiCalls'

test('get analysis index for ERR2756788', async () => {
    const data = await getAnalysisIndex('ERR2756788')
    expect(data).toStrictEqual({
        assembly: true,
        geo: false,
        micro: true,
        nsra: true,
        psra: true,
        rsra: true,
        run_id: 'ERR2756788',
        srarun: true,
    })
})

test('get analysis index for ERR2756788-invalid', async () => {
    const data = await getAnalysisIndex('ERR2756788-invalid')
    expect(data).toBe('')
})
