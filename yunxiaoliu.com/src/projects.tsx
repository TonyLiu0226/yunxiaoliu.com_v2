import type { Project } from "./types";

export const projects: Project[] = [
    {
        name: "Flowleaflets",
        description: "Developed in collaboration with a nonprofit, Flowleaflets is a SaaS that allows medical students to transcribe and digitize handwritten notes from medical logbooks.",
        GitHubURL: "https://github.com/ubclaunchpad/clinical-logging",
        gallery: [
            
            {
                Title: "Signup page",
                ImagePath: "Flowleaflets_signup.png",
                Description: ""
            },
            {
                Title: "Login page",
                ImagePath: "Flowleaflets_login.png",
                Description: ""
            },
            {
                Title: "Home",
                ImagePath: "Flowleaflets_home.png",
                Description: "Dashboard page"
            },
            {
                Title: "Logbooks Page",
                ImagePath: "Flowleaflets_single.png",
                Description: "Supports up to 100 logbooks per user, 5 types to choose from!"
            },
            {
                Title: "Single Logbook",
                ImagePath: "Flowleaflets_logbook.png",
                Description: "Details for a single logbook"
            },
            {
                Title: "Log entries",
                ImagePath: "Flowleaflets_logs.png",
                Description: ""
            },
            {
                Title: "Recent activity",
                ImagePath: "Flowleaflets_recents.png",
                Description: ""
            },
            {
                Title: "Form",
                ImagePath: "Flowleaflets_manualentry_1.png",
                Description: "Users can manually input log entries if they choose not to use the automatic transcription feature. This page is for recent medical examinations."
            },
            {
                Title: "Form",
                ImagePath: "Flowleaflets_manualentry_2.png",
                Description: "Users can manually input log entries if they choose not to use the automatic transcription feature. This page is for surgery results."
            }
        ]
    },
    {
        name: "Class of 19",
        description: "A visual novel made using RenPy about the experiences of two high school friends as they navigate the complexities of high school life. Totally NOT based on a true story in my life.",
        GitHubURL: "https://github.com/TonyLiu0226/Class_of_19"
    },
    {
        name: "Celeste.png",
        description: "An app that leverages open-source LLMs hosted locally to generate short stories based on user-controlled prompts and togglable parameters.",
        GitHubURL: "https://github.com/TonyLiu0226/celeste.png"
    },
    {
        name: "EpiLog",
        description: "A seizure tracker app for iOS and Android. Users can log daily seizure activity, record seizures via the camera, and keep track of important events and medications on a built-in calendar.",
        GitHubURL: "https://github.com/ubclaunchpad/epilog"
    },
    {
        name: "Shopinder",
        description: "An app that allows you to make shopping lists ahead of time and set email or text reminders to notify you when its time to shop!",
        GitHubURL: "https://devpost.com/software/shopinder"
    },
    {
        name: "UniMeetups",
        description: "A meetup app for university students to plan events and make friends with others who are geographically close and share common interests.",
        GitHubURL: "https://devpost.com/software/unimeetups"
    }
]