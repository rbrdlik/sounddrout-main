import Hero from "../../components/Hero/Hero";
import styles from "./Rules.module.css"
import Footer from "../../components/Footer/Footer";
import RulesBox from "../../components/RulesBox/RulesBox";

export default function Rules(){
    const coloredChannel = {
        color: "#7d7dff"
    }
    return(
        <>
            <Hero height="40vh">
                <div className={styles.heroText}>
                    <h1>Server Rules</h1>
                </div>
            </Hero>
            <RulesBox title="Purpose">
                <p>It is our mission to make Sound's World a safe and welcoming place for all. Every day, thousands of people from around the world come together and express themselves on Sound's World. It is our goal to ensure all users have a valuable, inclusive and welcoming experience. These rules outline what is and isn't allowed on our Discord Server.</p>
            </RulesBox>
            <RulesBox title="Preface">
                <p><b>I</b> - All rules in the server apply at all times and in all places. Most of the time, broken rules result in a warning - these expire with time and add up to punishments such as a mute or ban. Certain rules that are broken may come with an immediate ban.</p>
                <p><b>II</b> - Propagating or influencing those that have broken the rules may result in punishment. This includes attempting to bait people into admitting they're under 13, trying to make people spam ping you through a nickname, or quoting/replying to rule-breaking messages.</p>
                <p><b>III</b> - Not all rules in the server are listed on this page. Read the channel topic and pins of each channel to view any channel-specific rules that may be present. If you break rules in our Events server, you may also be punished in both servers. Please use common sense and avoid finding "loopholes" in the rules, they are not exhaustive and may apply to more circumstances beyond what is listed here.</p>
                <p><b>IV</b> - For moderation purposes, this server is English only. This means you cannot use ASCII, binary, morse code, ciphered code, or made-up languages from games/movies.</p>
                <p><b>V</b>- Plagiarism of any part of Sound's World including the rules, icons or banners is not allowed and will result in a ban. In addition, please avoid distributing copyrighted content in the server such as full movies or games.</p>
                <p><b>VI</b> - We may record voice channels or streams in the server to be used privately as evidence in the event something occurs that is against the rules, and by using our VCs you give consent to this occurring.</p>
                <p><b>We must also uphold Discord's <a href="">Terms of Service</a>, <a href="">Community Guidelines</a> and <a href="">Partner Code of Conduct.</a></b></p>
            </RulesBox>
            <RulesBox title="Rules">
                <p>1. Swearing is allowed, but you are not allowed to swear excessively or use an unnecessary amount of swearing against others in a harmful way.<br/>- You are also not allowed to use slurs or bypass our filter against them. "Bypassing" means changing the characters of a filtered word so our automod bots cannot detect what you have said. For example, incomplete slurs like n***** or f****t are not allowed<br/>- Directing attention to slurs in other locations (e.g file names or stickers) is also not allowed</p>
                <p>2. Advertising isn't allowed anywhere except within our designated advertising channels, and in these channels you cannot advertise anything that has NSFW or invite-for-rewards as its premise. Advertising is considered drawing attention to a server, product, or event for your own benefit. If you ask people to enter your DMs for an incentive such as nitro, we will assume you are advertising something. A link is not required for this to occur, and this is punishable whether in DMs or done verbally in the server.</p>
                <p>3. Do not post malicious links or files that could be used to steal accounts or information anywhere, this includes surveys. For this reason we automod all links in our channels, so don't bypass the filter by adding characters so the automod bot cannot detect your links.</p>
                <p>4. Please keep your topics in the correct channels. For example, only discuss topics related to gaming within the <span style={coloredChannel}>#gaming</span> channel. View the channel topics/pins to see the topic that each channel has.</p>
                <p>5. To keep the server peaceful, please do not be toxic by harassing, insulting, arguing, or beginning controversial topics. This can mean:<br/>- Discriminating against users based on their race, sexual orientation, or roles in the server<br/>- Disrupting users by organizing large hate trains/rallies<br/>- Discussing controversial punishments that were given to users<br/>- Spoiling movies or other forms of media without a warning<br/>- Arguing with people based on serious topics or serious discussions, if you would like to argue with someone do it in DMs and not in the server</p>
                <p>6. Do not spam or cause disturbance within channels, this can mean:<br/>- Typing lots of separate lines, large blocks of text, senseless letters/characters, or random words (also known as drytexting)<br/>- Chaining (for example writing lyrics that make up a song)<br/>- Posting the same images, emojis, or stickers multiple times (up to 6 emojis at a time)<br/>- Reacting lots of times or using epilepsy-inducing reactions/gifs<br/>- Using cluttery fonts or text surrounded by a bunch of markings<br/>- Not adding loud warnings to media with very loud audio<br/>- Creating a Discord poll that is senseless and/or has 6 or more options</p>
                <p>7. You cannot post severely inappropriate content. Nothing can be posted or streamed that is NSFW, sexually explicit, relating to substance abuse, disturbing, or that displays a grave nature. Inappropriate content includes suicide, self-harm, abuse, flirting/dating, and insinuating content such as "ahegao" pictures.</p>
                <p>8. Do not constantly beg for nitro, roles, items or anything similar from anyone in the server. If this occurs in DMs we are unable to punish the user, so we advise you to block the user instead.</p>
                <p>9. Do not use alts maliciously, this includes using them to join giveaways and give yourself an unfair advantage or to bypass a punishment given to your main account.</p>
                <p>10. Only play songs in the music voice channels, this means you aren't allowed to play normal videos. You also cannot play songs with excessive swearing - they can have mild swearing or minor amounts of racial slurs, however their primary purpose cannot be for their offensive language.</p>
                <p>11. No impersonation of individuals in the server with profile pictures or names. If the person or bot that you're impersonating is not in the server, you will still be subject to punishment if users are tricked by your impersonation.</p>
                <p>12. Your display name or nickname (depending on which is shown in chat) cannot be disruptive, this means:<br/>- Any zalgo character used in it must be reasonably sized - wide or spammy zalgo is not allowed.<br/>- It must have at least 2 characters.<br/>- It cannot have too many duplicates in the server.<br/>- Changing it back after being punished may result in more action being taken against you.</p>
                <p>13. Don't ask for or distribute any personal information without consent. Personal information includes private codes to classrooms or games like Kahoot that you don’t have permission to share. Exposing private information may result in a ban whether in the server or in DMs.</p>
                <p>14. You aren't allowed to misuse spoilers by giving your text the appearance of slurs or anything inappropriate.</p>
                <p>15. You cannot annoy others in VCs by mic spamming, making loud noises, using voice changers, or AFKing in VCs for extended periods of time.</p>
                <p>16. You aren't allowed to minimod. This means acting as a mod in any way, for example by telling people they broke a rule or saying they will be punished. If you have a problem please ping an active staff member instead of acting as one yourself.</p>
                <p>17. No interfering in moderator's duties, this could mean:<br/>- Messing with them or trolling on purpose (e.g., asking for punishments, or pinging without a good reason)<br/>- Maliciously reporting people by providing fake/forged evidence<br/>- Misusing or exploiting any of the bots in the server<br/>- Misinforming users with serious questions, or being disruptive in chat by constantly answering questions while staff are already doing so<br/>- Arguing with staff members in chat while they moderate instead of messaging a higher ranked staff member<br/>- Not responding to staff or dodging their questions regarding you breaking the rules<br/>- Assisting others in avoiding punishments after they have broken the rules</p>
            </RulesBox>
            <Footer />
        </>
    );
}