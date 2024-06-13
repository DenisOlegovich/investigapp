import { ReactNode } from 'react'

export interface Department {
    organization: {
        title: string
        link: string
    }
    mainPerson: {
        jobTitle: string
        fullName: string
    }
    description?: ReactNode
    postalAddress: {
        location: string
        subwayStation: ReactNode
    }
    workingTime?: string
    emails?: { link: string; label?: string }[]
    pressServiceEmail?: string
    phoneSection: {
        title: string
        phones: {
            number: string
            label?: string
        }[]
    }
    phoneMedia?: string
    detailInfo?: string
    tasksOrganization?: {
        title: string
        content: ReactNode
    }
    mainActivities?: {
        title: string
        content: ReactNode
    }
    informationResources?: {
        resource?: string
        link?: {
            href: string
            label: string
        }
    }[]
    socialLinks?: { link: string; label: string }[]
}
