export default {
	name: 'sunday-ministries',
	type: 'document',
	title: 'Sunday Ministries',
	fields: [
		{
			name: 'date',
			type: 'date',
			description: 'Date of given worship service.',
			title: 'Date',
		},
		{
			name: 'presider',
			type: 'string',
			description: 'Presider of given worship service.',
			title: 'Presider',
		},
		{
			name: 'invites',
			type: 'string',
			description: 'Invites sender of given worship service.',
			title: 'Worship Service Invites',
		},
		{
			name: 'openingPrayer',
			type: 'string',
			description:
				'Assigned person for opening prayer of given worship service.',
			title: 'Opening Prayer',
		},
		{
			name: 'closingPrayer',
			type: 'string',
			description:
				'Assigned person for closing prayer of given worship service.',
			title: 'Closing Prayer',
		},
		{
			name: 'offeringUshers',
			type: 'string',
			description: 'Assigned offering usher(s) of given worship service.',
			title: 'Offering Ushers',
		},
		{
			name: 'powerpoint',
			type: 'string',
			description: 'Assigned PowerPoint person of given worship service.',
			title: 'PowerPoint',
		},
		{
			name: 'crawlersToddlers',
			type: 'string',
			description:
				'Assigned crawlers/toddlers teachers of given worship service.',
			title: 'Crawlers & Toddlers',
		},
		{
			name: 'ssYoung',
			type: 'string',
			description: 'Assigned grades 1-3 teacher of given worship service.',
			title: 'SS Young Kids Grades 1-3',
		},
		{
			name: 'ssOld',
			type: 'string',
			description: 'Assigned grades 4-6 teacher of given worship service.',
			title: 'SS Older Kids Grades 4-6',
		},
		{
			name: 'communionPresider',
			type: 'string',
			description: 'Assigned communion presider of given worship service.',
			title: 'Communion Presider',
		},
		{
			name: 'coffeeBreakfast',
			type: 'string',
			description:
				'Assigned coffee/breakfast person/family of given worship service.',
			title: 'Coffee / Breakfast',
		},
		{
			name: 'counters',
			type: 'string',
			description: 'Assigned counter of given worship service.',
			title: 'Counters',
		},
		{
			name: 'setupUshers',
			type: 'string',
			description: 'Assigned setup and ushers of given worship service.',
			title: 'Set Up / Ushers',
		},
	],
}
