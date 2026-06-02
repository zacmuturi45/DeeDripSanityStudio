import {defineType, defineField} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',

      of: [
        {
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    }),

    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
  ],
})
