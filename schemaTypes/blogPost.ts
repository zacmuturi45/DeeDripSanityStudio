import {defineType, defineField} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Posts',
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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',

      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',

      of: [
        {type: 'block'},

        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',

      to: [{type: 'author'}],
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

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',

      initialValue: () => new Date().toISOString(),
    }),
  ],
})
