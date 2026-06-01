export type Job = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

export type Project = {
    name: string;
    description: string;
    GitHubURL: string;
    gallery?: GalleryItem[];
}

export type GalleryItem = {
    Title: string;
    ImagePath: string;
    Description: string;
}

export type Education = {
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
    note: string;
    description: string;
    courses: GalleryItem[];
}