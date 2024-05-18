'use client'

import React from 'react'
import Image from 'next/image'
import { classMerge } from '~/utils/helpers'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'

interface CardItemProps {
  image: string
  title: string
  description: string
  className?: string
}

// card item for the grid section
// that show the best fits
function CardItem({
  description,
  image,
  title,
  className,
}: CardItemProps): React.ReactElement {
  return (
    <div
      className={classMerge(
        'flex flex-col w-full bg-secondary rounded-4xl p-7 cursor-pointer transition-all duration-700 hover:-translate-y-2',
        className,
      )}
    >
      <Image src={image} alt={title} width={104} height={104} quality={100} />
      <h4 className="text-2xl font-medium font-heading !leading-tight mt-16">
        {title}
      </h4>
      <span className="text-base !leading-relaxed mt-4 font-medium text-opacity-90">
        {description}
      </span>
    </div>
  )
}

export default function BestFits(): Readonly<React.ReactElement> {
  return (
    <section className="relative">
      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col">
          <div className="flex">
            <SectionLabel>Our Best Fits</SectionLabel>
          </div>
          <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-9/12 mt-10">
            We’re best partner for your growth & success business
          </h2>
          <p className="text-lg font-medium leading-relaxed desktop:w-6/12 mt-8">
            We help business to create their own standing website, agency,
            company, enterprise, professional, or marketing that need to create,
            update, maintain, or create unlimited website for the clients. We
            help by provide you better services to manage all of your core of
            business in site.
          </p>

          <div className="mt-40 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6">
            <CardItem
              image="/images/illustration/outre-6.png"
              title="Startups & SMEs"
              description="Startups, small and medium business that need to grow their customers, sales, and increase the profit"
              className="laptop:col-start-2"
            />
            <CardItem
              image="/images/illustration/fundraising-10.png"
              title="Creative & Luxury"
              description="Best for creative, photographer, content creator and luxury brand that want to sread and reach global customers"
            />
            <CardItem
              image="/images/illustration/fundraising-19.png"
              title="Home Services"
              description="Contractor that focus on home services who want to scale their business by reach more customers"
            />
            <CardItem
              image="/images/illustration/fundraising-12.png"
              title="Professional"
              description="Professional that need to scale the business and reach more audience."
            />
            <CardItem
              image="/images/illustration/fundraising-1.png"
              title="Online Business"
              description="Enterpreneur, coaching, side hustle and online business that want to create better experience and lift the profit"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
