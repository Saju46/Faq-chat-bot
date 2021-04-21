import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is Netflix?",
            content: `Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.   `,
        },
        {
            title: "How to pay for Netflix",
            content: `Choose a plan that meets your needs and your budget. As a Netflix member, you are charged once a month on the date you signed up. There are several options to pay for Netflix.`,
        },
        {
            title: "What is the difference between an individual membership and a family membership?",
            content:
                <p>An individual membership provides Nintendo Switch Online service to the Nintendo Account that purchased the service. Individual memberships are available in 1-month, 3-month, or 1-year increments.<br/> A family membership provides the Nintendo Switch Online service to everyone in the purchaser's family group (up to 8 people). Family memberships are available in 12-month increments only. To learn more about the benefits of a family membership, please read Information About Nintendo Switch Online Family Memberships.</p>,
        },
        {
            title: "About WhatsApp Web and Desktop",
            content: <p>WhatsApp Web: A browser-based application of WhatsApp.
            <br/>WhatsApp Desktop: An application you can download to your computer.</p>,
        },
        {
            title: "Is a Nintendo Switch Online membership needed for Wii U or Nintendo 3DS games?",
            content: `The paid online service is for Nintendo Switch games only. Online play for the Wii U and Nintendo 3DS systems will continue as normal, at no additional cost.`,
        },
        {
            title: "Can I use My Nintendo Gold Points to purchase the Nintendo Switch Online membership?",
            content: `Gold Points can be used when purchasing a membership in the Nintendo eShop. They cannot be used for auto-renewal.`,
        },
        {
            title: "What is tawk.to",
            content:
                "tawk.to is a free live chat app that lets you monitor and chat with visitors on your website or from a free customizable page.",
        },
        {
            title: "What is Pinterest?",
            content: `Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find. `,
        },
        {
            title: "What's your privacy policy?",
            content: `We will never share your information with any third party. Who is a third party? Well the first party is us, and the second party is you. So a third party is anyone other than us and you. And, you know, they probably have enough already.`,
        },{
            title: "What’s the deal with this store?",
            content: `This is the official Cards Against Humanity store. We made it ourselves so that we could cut out all of the middlemen between us and you.`,
        },
    ],
};

const styles = {
     bgColor: 'white',
     titleTextColor: 'blue',
     rowTitleColor: 'Black',
     rowContentTextSize: '16px',
     rowContentPaddingTop: '10px',
     rowContentPaddingBottom: '10px',
     rowContentPaddingLeft: '50px',
     arrowColor: "blue",
    rowContentColor: 'black',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function App (){

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}