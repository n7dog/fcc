import type { PageLoad } from './$types'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ygo45klz',
  dataset: 'production',
  apiVersion: '2023-03-21',
  useCdn: false,
})

export const load = (async () => {
  const data = await client.fetch(`
    *[_type == "praise"] {
      av, backup, bass, date, drums, electric, guitar, keys, lead, objective, scripture, series, speaker, summary, topic, unavailable,
      'pdfURL': pdf.asset->url
    }
  `)

  if (data)
    return {
      praise: data,
      tableHeader: [
        'Date 📅',
        'Lead 🎤',
        'Guitar 🎸',
        'Keys 🎹',
        'Bass 🎸',
        'Drums 🥁',
        'Electric 🎸',
        'Backup 🗣️',
        'AV 🔊',
        'Unavailable 🙅‍♂️',
      ],
      tableBody: [
        'date',
        'lead',
        'guitar',
        'keys',
        'bass',
        'drums',
        'electric',
        'backup',
        'av',
        'unavailable',
      ],
      tableMeta: [
        'series',
        'topic',
        'speaker',
        'scripture',
        'objective',
        'summary',
        'date',
        'pdfURL',
      ],
    }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}) satisfies PageLoad
