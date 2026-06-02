import {defineType, defineField} from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'name',
      },

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',

      fields: [
        {
          name: 'github',
          title: 'Github',
          type: 'url',
        },

        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },

        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
      ],
    }),
  ],
})
