import React, { useState, useRef, useEffect } from "react";
import styles from "./Faq.module.css";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        answerRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.maxHeight = openIndex === index ? `${ref.scrollHeight}px` : "0";
            }
        });
    }, [openIndex]);

    return (
        <>
            <Hero height="40vh">
                <div className={styles.heroText}>
                    <h1>FAQ</h1>
                </div>
            </Hero>
            <div className={styles.faqContainer}>
                {faqData.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.faqQuestion}
                            onClick={() => handleToggle(index)}
                        >
                            {faq.question}
                        </button>
                        <div
                            ref={(el) => (answerRefs.current[index] = el)}
                            className={styles.faqAnswer}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

const faqData = [
    {
        question: "How do I become a moderator?",
        answer: "To become a staff member, you must apply through the staff application. You will be able to view it within the channel #mod-application when the applications open, this will be when we require more staff members in the server.",
    },
    {
        question: "How can I get help from a staff member?",
        answer: "Very simple! You can just DM them if you want to ask a question or report someone, but alternatively you can just message @Sound's Utilities and file a report directly to our mod team.",
    },
    {
        question: "Do automatic warns count?",
        answer: "These warnings are separate from the normal, manual warning system. 3 strikes from the bot within 24 hours is a mute of 6 hours, and you won't see them appear on >warnings.",
    },
    {
        question: "Why did my username get moderated? (nickname set to something else)",
        answer: "You may refer to the rules and see Rule #12, you may DM or ping an active moderator to request a username change from 'Moderated Nickname' if you don't have lvl 15+ which is required to change your nickname.",
    },
    {
        question: "Why can't I advertise in the ad channels?",
        answer: "You need to have @Super Fan (Lvl 10+) to access #self-advertising and @Heroic Fan (Lvl 50+) or @💎Nitro Booster to access #exclusive-ads. You can view the #role-info channel in Sound's World for more information on these permissions.",
    },
    {
        question: "Why can't I post attachements in general chat?",
        answer: "You need to have You need to have @Insane Fan (Lvl 25+) to send images in #general, and to post them in #media you'll need @Epic Fan (Lvl 5+).",
    },
    {
        question: "How can I get [x] role?",
        answer: "See #role-info for descriptive information and how any role in the server can be obtained and/or its permissions.",
    },
    {
        question: "When is the next giveaway & how to host one?",
        answer: "There isn't an exact time for the next giveaway, and to host a giveaway you must DM a user with the @Giveaways role.",
    },
    {
        question: "How do I check my rank/level up?",
        answer: "You can receive XP to level up by sending a message every minute in the server, and you can go to #bot-commands and use !rank to check your level. You can also check the server's leaderboards by doing !levels. See bot's information (their prefixes) in #bot-info.",
    },
    {
        question: "Why is Nigeria filtered?",
        answer: "It's filtered because any time somebody uses it, it's to bypass the filter. There is little to no scenario in which this word and other similarly-spelled words to the N word are used correctly, so @everyone cannot use them anymore.",
    },
    {
        question: "How do I donate to Sound?",
        answer: "You cannot donate money to me anymore, and @💰 Donator (Legacy) is no longer obtainable. You are completely free to donate to the server bot's patreon here: https://www.patreon.com/SoundsUtilities",
    },
    {
        question: "How do I report a Staff?",
        answer: "If you have issues with a specific staff member or a punishment you've received, please DM @Sound's Utilities and send a modmail ticket.",
    },
    {
        question: "Why can't I speak [x] languages in the server?",
        answer: "Currently our staff team is comprised of English speakers, which means in the event that someone swears or says something inappropriate in another language we won't be able to deal with them quickly. Also, pretty much @everyone here is English, my videos are English, the rules are English and I speak English.",
    },
    {
        question: "How do I post my art into #art-channel?",
        answer: "Please read the #how-to-post-art channel on Sound's World for a full and simple guide.",
    },
    {
        question: "How can I enter/why can't I enter in #public-simon-says?",
        answer: "In order to enter a game of Simon Says, you can react to the game starting message. There is a maximum of 15 players that can enter into 1 game, so if there are more than the max that try to enter, it will choose 15 people randomly from those that reacted. To become simon in a game, you must be randomly selected either at the beginning or during the game when a new simon is chosen.",
    },
    {
        question: "What is Zalgo?",
        answer: "When text is surrounded by a bunch of markings ĺ̶̎ỉ̴̯k̸͔̍e̸̢͠ ̴̣̽t̶̪̐h̸̋̐ì̴̲s̵͙͛, it's considered zalgo, and weird fonts are included. It's not allowed to be used excessively as it causes major spam and is annoying to see within chats.",
    },
    {
        question: "Can I use my alternative accounts?",
        answer: "@everyone is allowed to have alts in the server, but you can't use them to enter multiple times in giveaways, or to bypass any sort of punishment another account received.",
    },
    {
        question: "Why was I punished for quoting someone?",
        answer: "If you quote a person that broke a rule for sending that message, you will be punished too as you sent the message yourself by quoting it.",
    },
    {
        question: "How can I add Sound's Utilities to my server?",
        answer: "Unfortunately this is a privately-owned custom bot, and it cannot operate in other servers, but some good moderation bots you could use are Auttaja or Dyno",
    },
    {
        question: "Why has the server logo changed?",
        answer: "If you see a new logo such as one with a lightning bolt, that means there's a +50% XP Boost event going on, this happens every Friday from Midday to Midnight CST",
    },
    {
        question: "Why can I not post links?",
        answer: "Usually links that are sent are malicious and people can accidentally click on them while in chat. To minimize this and keep all of our users safe, all links are blocked from the server.",
    },
    {
        question: "Why is slowmode so long?",
        answer: "In order to effectively moderate chat, slowmode needs to be high so that moderators can view and punish users that break the rules. You can level up to gain access to chats with no slowmode!",
    },
    {
        question: "How can I add reactions?",
        answer: "You can do this at lvl 40+ or with @⭐Merch Owner",
    },
    {
        question: "Why did that count as spam if there's slowmode?",
        answer: "Repeatedly posting the same thing is still spam, also posting large blocks of text disregards slowmode completely and is annoying.",
    },
    {
        question: "Why is swearing againts the rules",
        answer: "Swearing results in toxicity and causes the server to be an unfriendly environment, however, lvl 50+ unlocks a special chat where users can be trusted to do this.",
    },
];
